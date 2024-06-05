import { AppLayout } from '@/components'
import EditInvitation from '@/components/Edit/EditInvitation'
import EditMember from '@/components/Edit/EditMember'
import EditName from '@/components/Edit/EditName'

export default function Edit() {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center gap-[1.2rem]">
        <EditName />
        <EditMember />
        <EditInvitation />
      </div>
    </AppLayout>
  )
}
