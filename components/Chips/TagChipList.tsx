import TagChip from './TagChip'

interface TagChipListProps {
  tags: string[]
}

export default function TagChipList({ tags }: TagChipListProps) {
  const tagColor = [
    { bg: '#F9EEE3', text: '#D58D49' },
    { bg: '#F7DBF0', text: '#D549B6' },
    { bg: '#DBE6F7', text: '#4981D5' },
    { bg: '#E7F7DB', text: '#86D549' },
  ]

  return (
    <ul className="mb-[1.3rem] flex gap-[0.6rem]">
      {tags.map((tag) => {
        const randomPick = Math.floor(Math.random() * 4)
        return (
          <TagChip
            key={tag}
            tag={tag}
            bgColor={tagColor[randomPick].bg}
            textColor={tagColor[randomPick].text}
          />
        )
      })}
    </ul>
  )
}
