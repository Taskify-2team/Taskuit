import { ChangeEvent, FormEvent, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { postComment } from '@/service/comments'
import { useRouter } from 'next/router'
import ShortButton from '../Buttons/ShortButton'
import InputLayout from './InputLayout'

interface CommentInputProps {
  cardId: number
  columnId: number
  onAdd: () => void
}

export default function CommentInput({ cardId, columnId, onAdd }: CommentInputProps) {
  const router = useRouter()
  const { dashboardId } = router.query

  const [content, setContent] = useState('')
  const { requestFunction } = useAsync(postComment)

  const postCommentRequest = async () => {
    await requestFunction({
      content,
      cardId,
      columnId,
      dashboardId: Number(dashboardId),
    })
    setContent('')
    onAdd()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postCommentRequest()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputLayout id="comment" label="댓글" isSmallSize>
        <div className="relative">
          <textarea
            id="comment"
            value={content}
            onChange={handleChange}
            placeholder="댓글 작성하기"
            className="input-layout h-[13.9rem] w-full resize-none text-[1.4rem]"
          />
          <div className="absolute bottom-[1.2rem] right-[1.2rem]">
            <ShortButton type="submit" text="입력" color="white" />
          </div>
        </div>
      </InputLayout>
    </form>
  )
}
