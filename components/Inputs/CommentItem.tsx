import { Comment } from '@/types/dashboard'
import { formatDateTime } from '@/utils/formatDate'
import ShortButton from '../Buttons/ShortButton'
import UserProfile from '../UserInfo/UserProfile'
import { useState } from 'react'
import EditButton from '../Buttons/EditButton'

interface CommentItemProps {
  comment: Comment
}

export default function CommentItem({ comment }: CommentItemProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(comment.content)

  const handleSubmit = () => {}

  const handleChange = () => {}
  const handleEditClick = () => {
    setIsEdit(true)
  }
  const handleDeleteClick = () => {}
  return (
    <li className="flex gap-[1rem]">
      <UserProfile
        size="m"
        profileImageUrl={comment.author.profileImageUrl}
        nickname={comment.author.nickname}
      />
      <div className="w-full">
        <div className="flex items-center gap-[0.8rem] pb-[0.6rem] pt-[0.4rem]">
          <h3 className="text-[1.4rem] font-[600]">{comment.author.nickname}</h3>
          <span className="text-[1.2rem] text-var-gray4">{formatDateTime(comment.createdAt)}</span>
        </div>
        {isEdit ? (
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <textarea
                id="comment"
                value={text}
                onChange={handleChange}
                placeholder="댓글 작성하기"
                className="input-layout h-[7rem] w-full resize-none text-[1.4rem]"
              />
              <div className="absolute bottom-[1.2rem] right-[1.2rem]">
                <ShortButton type="submit" text="완료" color="white" />
              </div>
            </div>
          </form>
        ) : (
          <div>
            <p className="text-[1.4rem] text-var-black2">{comment.content}</p>
            <div className="mt-[1.2rem] flex gap-[1.2rem]">
              <EditButton onClick={handleEditClick} text="수정" />
              <EditButton onClick={handleDeleteClick} text="삭제" />
            </div>
          </div>
        )}
      </div>
    </li>
  )
}
