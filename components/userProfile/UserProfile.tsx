import Image from 'next/image'

interface UserInfo {
  profileImgSource: string
  UserName: string
}

export default function UserProfile({ profileImgSource, UserName }: UserInfo) {
  return (
    <div className="flex items-center gap-5 pr-32 pl-12">
      <Image
        src={profileImgSource}
        alt="유저프로필 사진"
        className="w-14 h-14 stroke-2 rounded-full stroke-white"
      />
      <p className="text-2xl ">{UserName}</p>
    </div>
  )
}
