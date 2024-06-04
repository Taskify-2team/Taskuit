import { useState } from 'react'
import InputLayout from './InputLayout'
import inputStyles from './inputstyles'
import CardChip from '../Chips/CardChip'

interface TagInputProps {
  id: string
  label: string
  isRequired?: boolean
}

export default function TagInput({ id, label, isRequired }: TagInputProps) {
  const [tagList, setTagList] = useState(['프로젝트', '백앤드'])
  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div className={inputStyles}>
        {tagList?.map((tagItem) => <CardChip key={tagItem} text={tagItem} />)}
        <input id={id} placeholder="입력 후 Enter" required={isRequired} className="outline-none" />
      </div>
    </InputLayout>
  )
}

TagInput.defaultProps = {
  isRequired: false,
}
