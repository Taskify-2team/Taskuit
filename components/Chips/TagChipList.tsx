import TagChip from './TagChip'

interface TagChipListProps {
  tags: string[]
  onDelete?: (idx: number) => void
}

export default function TagChipList({ tags, onDelete }: TagChipListProps) {
  const tagColor = [
    { bg: '#F9EEE3', text: '#D58D49' },
    { bg: '#F7DBF0', text: '#D549B6' },
    { bg: '#DBE6F7', text: '#4981D5' },
    { bg: '#E7F7DB', text: '#86D549' },
  ]

  return (
    <ul className="flex gap-[0.6rem]">
      {tags.map((tag, idx) => {
        const randomPick = Math.floor(Math.random() * 4)
        return (
          <TagChip
            key={tag}
            tag={tag}
            bgColor={tagColor[randomPick].bg}
            textColor={tagColor[randomPick].text}
            onDelete={() => onDelete?.(idx)}
          />
        )
      })}
    </ul>
  )
}
