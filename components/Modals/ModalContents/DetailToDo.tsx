import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  KebabEditButton,
  ProgressChip,
  TagChip,
  CommentInput,
  CardInfoChip,
  CommentItem,
} from '@/components'
import kebabIcon from '@/public/icons/kebab.svg'
import closeIcon from '@/public/icons/close.svg'
import { Card, Comment } from '@/types/dashboard'
import { useAppDispatch } from '@/hooks/useApp'
import useAsync from '@/hooks/useAsync'
import { getComments } from '@/service/comments'
import { Tag } from '@/service/tag'
import { deleteDashBoardCard } from '@/service/cards'
import { closeModal, openModal } from '@/store/reducers/modalReducer'
import { openToast } from '@/store/reducers/toastReducer'
import { deleteCardItem } from '@/store/reducers/cardReducer'
import { useLoadTheme } from '@/store/context/ThemeContext'

export interface ToDoDetailProps {
  card: Card
  columnTitle: string
  tags?: Tag[]
}

export default function DetailToDo({ card, columnTitle, tags }: ToDoDetailProps) {
  const obsRef = useRef(null)
  const dispatch = useAppDispatch()
  const [cursorId, setCursorId] = useState<number>(0)
  const [commentList, setCommentList] = useState<Comment[]>([])
  const [openKebab, setOpenKebab] = useState(false)
  const { requestFunction: getCommentsRequest, pending } = useAsync(getComments)
  const { requestFunction: deleteCardRequest } = useAsync(deleteDashBoardCard)
  const { theme } = useLoadTheme()
  const getCommentData = useCallback(async () => {
    const result = await getCommentsRequest({ cardId: card.id, cursorId })
    if (result) {
      setCommentList((prev) => [...prev, ...result.data.comments])
      setCursorId(result.data.cursorId)
    }
  }, [card.id, getCommentsRequest, cursorId])

  const deleteCardData = async () => {
    await deleteCardRequest(card.id)
    dispatch(deleteCardItem({ cardId: card.id, columnId: card.columnId }))
  }

  const handleDeleteCard = () => {
    deleteCardData()
    dispatch(closeModal())
    dispatch(openToast('successDeleteColumn'))
  }

  const handleAddComment = (newComment: Comment) => {
    setCommentList((prev) => [newComment, ...prev])
  }

  const handleUpdateComment = (updatedItem: Comment) => {
    setCommentList(
      commentList?.map((commentItem) =>
        updatedItem.id === commentItem.id ? updatedItem : commentItem,
      ),
    )
  }

  const handleDeleteComment = (deletedItem: Comment) => {
    setCommentList(commentList?.filter((commentItem) => deletedItem.id !== commentItem.id))
  }

  const handleKebabClick = () => {
    setOpenKebab(!openKebab)
  }

  const handleKebabClose = () => {
    if (openKebab) {
      setOpenKebab(false)
    }
  }

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (!pending && target.isIntersecting) {
        getCommentData()
      }
    },
    [getCommentData, pending],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && !pending && cursorId) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
  }, [cursorId, pending, handleObserver])

  useEffect(() => {
    getCommentData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      onClick={handleKebabClose}
      className={`modal-layout w-[73rem] ${theme === 'dark' && 'bg-var-black2'}`}
    >
      <div className="absolute right-[2.8rem] top-[3.2rem] z-10 flex items-center gap-[2.4rem]">
        <button type="button" onClick={handleKebabClick}>
          <Image src={kebabIcon} alt="케밥" width={28} height={28} />
        </button>
        {openKebab && (
          <div
            className={`absolute right-[6rem] top-[3rem] flex w-[9.3rem] flex-col gap-[0.5rem] rounded-[0.6rem] border ${theme === 'normal' ? 'border-var-gray3 bg-white' : 'border-var-black2 bg-var-black1'} p-[0.6rem]`}
          >
            <KebabEditButton
              text="수정하기"
              onClick={() =>
                dispatch(
                  openModal({
                    modalName: 'EditToDo',
                    modalProps: {
                      columnId: card.columnId,
                      card,
                      managerList: card.assignee,
                      columnTitle,
                      tags,
                    },
                  }),
                )
              }
            />
            <KebabEditButton text="삭제하기" onClick={handleDeleteCard} />
          </div>
        )}
        <button type="button" onClick={() => dispatch(closeModal())}>
          <Image src={closeIcon} alt="케밥" width={32} height={32} />
        </button>
      </div>
      <div className="relative pr-[22.4rem] sm:pr-0">
        <h3
          className={`mb-[2.4rem] text-[2.4rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          style={{ maxWidth: 'calc(100% - 100px)', overflowWrap: 'break-word' }}
        >
          {card.title}
        </h3>
        <CardInfoChip card={card} />
        <div className="mb-[1.6rem] flex items-center gap-[2rem]">
          <ProgressChip progress={columnTitle} />
          <div className="h-[2rem] w-[0.1rem] bg-var-gray3" />
          <ul className="flex flex-wrap gap-[0.6rem]">
            {tags && tags.map((tag) => <TagChip key={tag.text} tag={tag} />)}
          </ul>
        </div>
        <p
          className={`mb-[1.6rem] whitespace-pre-wrap text-[1.4rem] leading-[2.4rem] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
        >
          {card.description}
        </p>
        {card.imageUrl && (
          <Image
            className="mb-[2.4rem] w-full rounded-[0.6rem]"
            src={card.imageUrl}
            alt="이미지"
            width={450}
            height={500}
            objectFit="cover"
            layout="responsive"
          />
        )}
        <CommentInput onAdd={handleAddComment} cardId={card.id} columnId={card.columnId} />
        <ul className="mt-[2rem] flex flex-col gap-[1rem]">
          {commentList?.map((commentItem) => (
            <CommentItem
              key={commentItem.id}
              comment={commentItem}
              authorId={commentItem.author.id}
              onUpdate={handleUpdateComment}
              onDelete={handleDeleteComment}
            />
          ))}
          <div ref={obsRef} />
        </ul>
      </div>
    </div>
  )
}
