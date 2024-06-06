import { useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import Image from 'next/image'
import ProgressChip from '../Chips/ProgressChip'
import InputLayout from './InputLayout'

interface DropDownMenuProps {
  label: string
  id: string
  progressList: string[]
}

export default function DropDownMenu({ id, label, progressList }: DropDownMenuProps) {
  const [selectMenu, setSelectMenu] = useState(progressList?.[0])
  const [showMenuList, setShowMenuList] = useState(false)
  const dropDownElement = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (dropDownElement.current && !dropDownElement.current.contains(e.target as Node)) {
      setShowMenuList(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <InputLayout id={id} label={label}>
      <div
        ref={dropDownElement}
        onClick={() => setShowMenuList((prev) => !prev)}
        className={`${showMenuList ? 'border-primary-violet' : 'border-var-gray3'} relative h-[4.8rem] w-full cursor-pointer items-center rounded-[0.6rem] border border-solid bg-var-white px-[1.6rem] py-[1.3rem] text-var-black3`}
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
          <div className="absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-var-gray3 bg-var-white py-[0.65rem] shadow-lg">
            {progressList.map((menuItem) => (
              <div
                key={menuItem}
                onClick={() => setSelectMenu(menuItem)}
                className={`${selectMenu === menuItem ? 'bg-var-violet' : ''} relative grid size-full grid-cols-[2.2rem_1fr] place-items-start gap-1 px-[1.6rem] py-[0.65rem] hover:bg-var-violet`}
              >
                {menuItem === selectMenu && (
                  <div className="col-start-1 size-[1rem] self-center">
                    <Image src={check} alt="체크 표시" />
                  </div>
                )}
                <ProgressChip progress={menuItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </InputLayout>
  )
}
