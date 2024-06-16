export default function LoadingBox({ theme }: { theme: string }) {
  return (
    <div className="mb-[1.2rem] flex animate-pulse gap-[0.6rem]">
      <div
        className={`h-[25rem] w-full rounded-[0.6rem] ${theme === 'normal' ? 'border-var-gray2 bg-var-gray2' : 'border-var-black1 bg-var-black1'}`}
      />
    </div>
  )
}
