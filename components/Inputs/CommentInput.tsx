import { ChangeEvent, useState } from 'react'
import WhiteButton from '../Buttons/ShortButtons/WhiteButton'
import InputLayout from './InputLayout'

export default function CommentInput() {
  const [text, setText] = useState('')

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputLayout id="comment" label="댓글">
        <textarea
          id="comment"
          value={text}
          onChange={handleChange}
          placeholder="댓글 작성하기"
          className="input-layout h-[13.9rem] resize-none"
        />
        <WhiteButton type="submit" text="입력" />
      </InputLayout>
    </form>
  )
}
