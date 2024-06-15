export default function LoadingTag({ theme }: { theme: string }) {
  return (
    <div className="mb-[1.2rem] flex animate-pulse gap-[0.6rem]">
      <div
        className={`h-[2.6rem] w-[5rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray2 bg-var-gray2' : 'border-var-black1 bg-var-black1'}`}
      />
      <div
        className={`h-[2.6rem] w-[8rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray2 bg-var-gray2' : 'border-var-black1 bg-var-black1'}`}
      />
      <div
        className={`h-[2.6rem] w-[3rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray2 bg-var-gray2' : 'border-var-black1 bg-var-black1'}`}
      />
    </div>
  )
}
