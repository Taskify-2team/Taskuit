interface TextCounterProps {
  text: string
  length: number
}

export default function TextCounter({ text, length }: TextCounterProps) {
  return (
    <div className="absolute bottom-[-1.5rem] right-0">
      <p
        className={`${text.length === length ? 'text-var-red' : 'text-var-black4'} text-[1.2rem]`}
      >{`${text.length}/${length}`}</p>
    </div>
  )
}
