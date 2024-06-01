import { ReactNode } from 'react'

interface MyPageLayoutProps {
  EditProfile: ReactNode
  EditPassword: ReactNode
}

export default function MyPageLayout({ EditProfile, EditPassword }: MyPageLayoutProps) {
  return (
    <div className="flex flex-col">
      <div>{EditProfile}</div>
      <div>{EditPassword}</div>
    </div>
  )
}
