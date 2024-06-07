/* eslint-disable react/button-has-type */
import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

interface ShortButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: 'white' | 'purple'
  isDisabled?: boolean
  link?: string
}

export default function ShortButton({
  text,
  color,
  type = 'button',
  onClick,
  isDisabled,
  link,
}: ShortButtonProps) {
  const colorVariants = {
    white: 'button-white',
    purple: 'button-purple',
  }

  if (link) {
    return (
      <Link
        href={link}
        className={`${isDisabled ? 'button-disabled' : colorVariants[color]} inline-block w-[8.4rem] cursor-pointer rounded-[0.4rem] py-[0.7rem] text-center text-[1.4rem] leading-tight`}
      >
        {text}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={`${isDisabled ? 'button-disabled' : colorVariants[color]} inline-block w-[8.4rem] cursor-pointer rounded-[0.4rem] py-[0.7rem] text-center text-[1.4rem] leading-tight`}
    >
      {text}
    </button>
  )
}
