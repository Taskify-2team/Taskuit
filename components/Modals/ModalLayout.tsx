import { ReactNode } from 'react'

export default function ModalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black/50">
      <div className="h-auto w-[54rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">{children}</div>
    </div>
  )
}
