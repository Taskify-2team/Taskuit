import { ChangeEvent, FormEvent, useState } from 'react'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'
import CardChip from '../Chips/CardChip'

interface TagInputProps {
  id: string
  label: string
  isRequired?: boolean
}

export default function TagInput({ id, label, isRequired }: TagInputProps) {
  const [tagList, setTagList] = useState<string[]>([])
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (tagList.includes(text)) {
      setText('')
      return
    }
    setTagList((prev) => [...prev, text])
    setText('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <form
        className={`${inputStyles} flex flex-wrap gap-x-[1.0rem] gap-y-[0.5rem]`}
        onSubmit={handleSubmit}
      >
        {tagList.length > 0 && (
          <div className="flex flex-wrap gap-[0.6rem]">
            {tagList.map((tagItem) => (
              <CardChip key={tagItem} text={tagItem} />
            ))}
          </div>
        )}
        <input
          id={id}
          value={text}
          placeholder="입력 후 Enter"
          onChange={handleChange}
          required={isRequired}
          className="outline-none"
        />
      </form>
    </InputLayout>
  )
}

TagInput.defaultProps = {
  isRequired: false,
}
