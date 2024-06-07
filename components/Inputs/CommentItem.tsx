import { Comment } from '@/types/dashboard'
import { formatDateTime } from '@/utils/formatDate'
import ShortButton from '../Buttons/ShortButton'
import UserProfile from '../UserInfo/UserProfile'

interface CommentItemProps {
  comment: Comment
}

export default function CommentItem({ comment }: CommentItemProps) {
  const handleSubmit = () => {}
  console.log(comment)

  const handleChange = () => {}
  return (
    <div>
      <UserProfile
        profileImageUrl={comment.author.profileImageUrl}
        nickname={comment.author.nickname}
      />
      <div>
        <div>
          <h3>{comment.author.nickname}</h3>
          <span>{formatDateTime(comment.createdAt)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            id="comment"
            // value={}
            onChange={handleChange}
            placeholder="댓글 작성하기"
            className="input-layout h-[13.9rem] w-full resize-none text-[1.4rem]"
          />
          <div className="absolute bottom-[1.2rem] right-[1.2rem]">
            <ShortButton type="submit" text="입력" color="white" />
          </div>
        </div>
      </form>
    </div>
  )
}
