interface TagColorSelectorProps {
  onMouseLeave: () => void
}

export default function TagColorSelector({ onMouseLeave }: TagColorSelectorProps) {
  const tagColor = [
    { bg: '#F9EEE3', text: '#D58D49' },
    { bg: '#F7DBF0', text: '#D549B6' },
    { bg: '#DBE6F7', text: '#4981D5' },
    { bg: '#E7F7DB', text: '#86D549' },
  ]
  return (
    <ul
      onMouseLeave={onMouseLeave}
      className="flex animate-slideDown gap-[1.2rem] rounded-[0.6rem] border border-var-gray3 bg-var-white p-[1rem] shadow-lg"
    >
      <li className="size-[4rem] cursor-pointer rounded-[1rem] bg-[#F9EEE3]" />
      <li className="size-[4rem] cursor-pointer rounded-[1rem] bg-[#E7F7DB]" />
      <li className="size-[4rem] cursor-pointer rounded-[1rem] bg-[#F7DBF0]" />
      <li className="size-[4rem] cursor-pointer rounded-[1rem] bg-[#DBE6F7]" />
      <li className="absolute left-1/2 top-[-1rem] size-[2rem] translate-x-[-1.4rem] rotate-45 border-l border-t border-var-gray3 bg-var-white" />
    </ul>
  )
}
