/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import Image from 'next/image'

interface DropDownInputMenuProps {
  menuList: string[]
  menuListIcon: string[]
}

export default function DropDownInputMenu({ menuList, menuListIcon }: DropDownInputMenuProps) {
  const [selectMenu, setSelectMenu] = useState(menuList[0])
  const [showMenuList, setShowMenuList] = useState(false)
  const refNode = useRef<HTMLDivElement>(null)

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectMenu(e.target.value)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refNode.current && !refNode.current.contains(e.target as Node)) {
        setShowMenuList(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div
      ref={refNode}
      onClick={() => setShowMenuList((prev) => !prev)}
      className={`${showMenuList ? 'border-violet-500' : 'border-gray-300'} relative cursor-pointer w-full h-12 bg-white px-2 py-6 border-solid border rounded-md text-sm text-black`}
    >
      <div className="size-full flex justify-between items-center">
        <div className="col-start-2 flex gap-1 px-2 py-1 text-black">
          <input value={selectMenu} onChange={changeInput} className="outline-none" />
        </div>
        <div>
          <Image src={arrow} alt="드롭다운 화살표" className={showMenuList ? 'rotate-180' : ''} />
        </div>
      </div>
      {showMenuList && (
        <div className="absolute left-0 top-[3.2rem] w-full border border-solid border-gray-300 rounded-md flex flex-col overflow-hidden shadow-lg animate-slideDown bg-white">
          {menuList.map((menuItem, i) => (
            <div
              key={menuItem}
              onClick={() => setSelectMenu(menuItem)}
              className="relative w-full h-12 px-2 py-6 grid grid-cols-[1rem_1fr] gap-1 content-center place-items-start border-solid border-1 border-blue-500 hover:bg-slate-200"
            >
              {menuItem === selectMenu && (
                <div className="col-start-1 self-center">
                  <Image src={check} alt="체크 표시" />
                </div>
              )}
              <div className="col-start-2 flex gap-1 px-2 py-1 text-black rounded-full">
                <div>{menuListIcon[i]}</div>
                <div>{menuItem}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
