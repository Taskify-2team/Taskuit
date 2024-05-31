import Image from 'next/image';

interface UserInfo {
  profileImgSource: string;
  UserName: string;
}
export default function UserProfile({ profileImgSource, UserName }: UserInfo) {
  return (
    <div className="flex justify-center gap-2">
      <Image
        src={profileImgSource}
        alt="유저프로필 사진"
        className="w-9 h-9 stroke-2 stroke-white"
      />
      <p>{UserName}</p>
    </div>
  );
}
