import { ReactNode } from 'react'

interface MyPageLayoutProps {
  EditProfile: ReactNode
  EditPassword: ReactNode
}

export default function MyPageLayout({ EditProfile, EditPassword }: MyPageLayoutProps) {
  return (
    <>
      <div>{EditProfile}</div>
      <div>{EditPassword}</div>
    </>
  )
}
