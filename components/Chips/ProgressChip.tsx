interface ProgressChipProps {
  progress: string
}

export default function ProgressChip({ progress }: ProgressChipProps) {
  return (
    <div className="col-start-2 flex w-fit rounded-full bg-var-violet px-[0.8rem] py-[0.4rem] text-primary-violet">
      <div className="text-[1.2rem]">{`• ${progress}`}</div>
    </div>
  )
}
