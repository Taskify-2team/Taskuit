export default function LoadingCard({ theme }: { theme: string }) {
  return (
    <div
      className={`relative h-[13.8rem] w-[100%] animate-pulse rounded-[0.6rem] border-[0.1rem] p-[2rem] hover:border-var-blue ${theme === 'normal' ? 'border-var-gray3 bg-var-gray2' : 'border-var-black2 bg-var-black2'}`}
    >
      <div
        className={`mb-[1.2rem] h-[2.4rem] w-[10rem] animate-pulse rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
      />
      <div className="mb-[1.2rem] flex gap-[0.6rem]">
        <div
          className={`h-[2.6rem] w-[5rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
        />
        <div
          className={`h-[2.6rem] w-[8rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
        />
        <div
          className={`h-[2.6rem] w-[3rem] rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
        />
      </div>
      <div className="flex justify-between">
        <div
          className={`mb-[1.2rem] h-[2.4rem] w-[10rem] animate-pulse rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
        />
        <div
          className={`size-[2.5rem] rounded-full ${theme === 'normal' ? 'border-var-gray3 bg-var-gray3' : 'border-var-black1 bg-var-black1'}`}
        />
      </div>
    </div>
  )
}
