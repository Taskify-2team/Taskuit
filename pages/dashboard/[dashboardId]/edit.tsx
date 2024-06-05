import { AppLayout } from '@/components'
import EditMember from '@/components/Edit/EditMember'
import EditName from '@/components/Edit/EditName'

export default function Edit() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[1.2rem]">
        <EditName />
        <EditMember />
      </div>
    </AppLayout>
  )
}
