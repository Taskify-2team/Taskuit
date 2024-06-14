import { ChangeEvent, FormEvent, useState } from 'react'
import useAsync from '@/hooks/useAsync'
import { postComment } from '@/service/comments'
import { useRouter } from 'next/router'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { Comment } from '@/types/dashboard'
import ShortButton from '../Buttons/ShortButton'
import InputLayout from './InputLayout'
import TextCounter from '../TextCounter/TextCounter'

interface CommentInputProps {
  cardId: number
  columnId: number
  onAdd: (props: Comment) => void
}

export default function CommentInput({ cardId, columnId, onAdd }: CommentInputProps) {
  const router = useRouter()
  const { dashboardId } = router.query
  const { theme } = useLoadTheme()

  const [content, setContent] = useState('')
  const { requestFunction } = useAsync(postComment)

  const postCommentRequest = async () => {
    const newComment = {
      content,
      cardId,
      columnId,
      dashboardId: Number(dashboardId),
    }
    const result = await requestFunction(newComment)
    setContent('')
    onAdd(result?.data)
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
        <div>
          <div className="relative">
            <textarea
              id="comment"
              value={content}
              onChange={handleChange}
              placeholder="댓글 작성하기"
              className={`input-layout h-[13.9rem] w-full resize-none text-[1.4rem] sm:h-[7rem] ${theme === 'dark' && 'border-var-black1 bg-var-black1 text-var-gray3'}`}
              maxLength={250}
            />
            <TextCounter text={content} length={250} />
          </div>
          <ShortButton type="submit" text="입력" color="white" />
        </div>
      </InputLayout>
    </form>
  )
}
