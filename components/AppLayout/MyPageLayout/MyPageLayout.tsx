import { ReactNode } from 'react'

interface MyPageLayoutProps {
  EditProfile: ReactNode
  EditPassword: ReactNode
}

export default function MyPageLayout({ EditProfile, EditPassword }: MyPageLayoutProps) {
  return (
    <div className="flex flex-col gap-[1.2rem] p-[2rem] sm:p-[1.2rem]">
      {EditProfile}
      {EditPassword}
    </div>
  )
}
