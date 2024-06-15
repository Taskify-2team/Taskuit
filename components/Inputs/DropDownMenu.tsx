import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/useApp'
import { Column, UpdateCard } from '@/types/dashboard'
import { useLoadTheme } from '@/store/context/ThemeContext'
import ProgressChip from '../Chips/ProgressChip'
import InputLayout from './InputLayout'

interface DropDownMenuProps {
  label: string
  id: string
  columnTitle: string
  onChange: Dispatch<SetStateAction<UpdateCard>>
  isRequired?: boolean
}

export default function DropDownMenu({
  columnTitle,
  onChange,
  id,
  label,
  isRequired,
}: DropDownMenuProps) {
  const { data: columnList } = useAppSelector((state) => state.column.columnList)
  const [selectMenu, setSelectMenu] = useState(columnTitle)
  const [showMenuList, setShowMenuList] = useState(false)
  const dropDownElement = useRef<HTMLDivElement>(null)
  const { theme } = useLoadTheme()

  const handleClickOutside = (e: MouseEvent) => {
    if (dropDownElement.current && !dropDownElement.current.contains(e.target as Node)) {
      setShowMenuList(false)
    }
  }

  const handleChangeProgress = (nextColumn: Column) => {
    onChange((prev) => ({
      ...prev,
      columnId: nextColumn.id,
    }))
    setSelectMenu(nextColumn.title)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div
        ref={dropDownElement}
        onClick={() => setShowMenuList((prev) => !prev)}
        className={`${showMenuList ? 'border-primary-violet' : 'border-var-gray3'} relative w-full cursor-pointer items-center rounded-[0.6rem] border border-solid ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black1'} px-[1.6rem] py-[1.1rem] text-var-black3 sm:py-[0.75rem]`}
      >
        <div className="flex size-full items-center justify-between">
          <ProgressChip progress={selectMenu} />
          <div className="absolute right-[1.5rem] size-[1rem]">
            <Image
              fill
              src={arrow}
              alt="드롭다운 화살표"
              className={showMenuList ? 'rotate-180' : ''}
            />
          </div>
        </div>
        {showMenuList && (
          <div
            className={`absolute left-0 top-[5rem] z-50 flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid py-[0.65rem] shadow-lg ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black2 bg-var-black1'}`}
          >
            {columnList.map((column) => (
              <div
                key={column.id}
                onClick={() => handleChangeProgress(column)}
                className={`${selectMenu === column.title && (theme === 'normal' ? 'bg-var-violet' : 'bg-var-black1')} relative grid size-full grid-cols-[2.2rem_1fr] place-items-start gap-1 px-[1.6rem] py-[0.65rem] ${theme === 'normal' ? 'hover:bg-var-violet' : 'hover:bg-var-black2'} `}
              >
                {column.title === selectMenu && (
                  <div className="col-start-1 size-[1rem] self-center">
                    <Image src={check} alt="체크 표시" />
                  </div>
                )}
                <ProgressChip progress={column.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </InputLayout>
  )
}
