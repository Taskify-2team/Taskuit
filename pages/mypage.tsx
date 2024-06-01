import AppLayout from '@/components/AppLayout/AppLayout'
import MyPageLayout from '@/components/AppLayout/MyPageLayout/MyPageLayout'
import EditProfile from '@/components/AppLayout/MyPageLayout/EditProfile/EditProfile'
import EditPassword from '@/components/AppLayout/MyPageLayout/EditPassword/EditPassword'

export default function MyPage() {
  return (
    <AppLayout>
      <MyPageLayout EditProfile={<EditProfile />} EditPassword={<EditPassword />} />
    </AppLayout>
  )
}
