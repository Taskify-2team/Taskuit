interface TextCounterProps {
  text: string
}

export default function TextCounter({ text }: TextCounterProps) {
  return (
    <div className="absolute bottom-[-2rem] right-0">
      <p
        className={`${text.length === 250 ? 'text-var-red' : 'text-var-black4'} text-[1.2rem]`}
      >{`${text.length}/250`}</p>
    </div>
  )
}
