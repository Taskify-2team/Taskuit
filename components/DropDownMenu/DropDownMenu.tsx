import { useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import Image from 'next/image'

interface DropDownMenuProps {
  menuList: string[]
}

export default function DropDownMenu({ menuList }: DropDownMenuProps) {
  const [selectMenu, setSelectMenu] = useState(menuList[0])
  const [showMenuList, setShowMenuList] = useState(false)
  const refNode = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (refNode.current && !refNode.current.contains(e.target as Node)) {
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
    <div
      ref={refNode}
      onClick={() => setShowMenuList((prev) => !prev)}
      className={`${showMenuList ? 'border-violet-500' : 'border-gray-300'} relative h-[4.8rem] w-full cursor-pointer rounded-md border border-solid bg-white px-[1.6rem] py-[1.3rem] text-black`}
      className={`${showMenuList ? 'border-violet-500' : 'border-gray-300'} relative h-[4.8rem] w-full cursor-pointer rounded-md border border-solid bg-white px-[1.6rem] py-[1.3rem] text-black`}
    >
      <div className="flex size-full items-center justify-between">
        <div className="col-start-2 flex gap-1 rounded-full bg-purple-200 px-[0.8rem] py-[0.4rem] text-purple-900">
      <div className="flex size-full items-center justify-between">
        <div className="col-start-2 flex gap-1 rounded-full bg-purple-200 px-[0.8rem] py-[0.4rem] text-purple-900">
          <div className="text-[1.2rem]">{`• ${selectMenu}`}</div>
        </div>
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
        <div className="absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-gray-300 bg-white py-[0.65rem] shadow-lg">
        <div className="absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-gray-300 bg-white py-[0.65rem] shadow-lg">
          {menuList.map((menuItem) => (
            <div
              key={menuItem}
              onClick={() => setSelectMenu(menuItem)}
              className="relative grid size-full grid-cols-[2.2rem_1fr] place-items-start content-center gap-1 px-[1.6rem] py-[0.65rem] hover:bg-slate-200"
            >
              {menuItem === selectMenu && (
                <div className="col-start-1 self-center">
                  <Image src={check} alt="체크 표시" />
                </div>
              )}
              <div className="col-start-2 flex rounded-full bg-purple-200 px-[0.8rem] py-[0.4rem] text-purple-900">
              <div className="col-start-2 flex rounded-full bg-purple-200 px-[0.8rem] py-[0.4rem] text-purple-900">
                <div className="text-[1.2rem]">{`• ${menuItem}`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
