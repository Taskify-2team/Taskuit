import { UserProfile } from '@/components';

interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

interface ProfileListProps {
  data: {
    members: Member[];
    totalCount: number;
  };
}

export default function ProfileList({ data }: ProfileListProps) {
  const memberData = data?.members;
  return (
    <div>
      {memberData ? (
        <div className='flex items-center gap-[-1rem]'>
          {memberData.slice(0, 4).map((member) => (
            <div key={member.id} className="mr-[-1.3rem]">
              <UserProfile
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
              />
            </div>
          ))}
          {data.totalCount > 4 && (
            <div className="relative">
              <div className="h-[3.8rem] w-[3.8rem] rounded-full border-2 border-white bg-[#d9d9d9] flex items-center justify-center text-center">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1.6rem]">
                  +{data.totalCount - 4}
                </span>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
