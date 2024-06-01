/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import cancel from '@/public/icons/cancel.svg'
import Image from 'next/image'
import { Member } from '@/types/member'

interface DropDownInputMenuProps {
  initMenuList: Member[]
}

export default function DropDownInputMenu({ initMenuList }: DropDownInputMenuProps) {
  const [selectMenu, setSelectMenu] = useState({
    id: 0,
    nickname: '',
    profileImageUrl: '',
    index: 0,
  })
  const [menuList, setMenuList] = useState<Member[]>(initMenuList)
  const [showMenuList, setShowMenuList] = useState(false)
  const dropDownElement = useRef<HTMLDivElement>(null)
  const menuElement = useRef<HTMLDivElement[]>([])
  const inputElement = useRef<HTMLInputElement>(null)

  const initializeSelectMenu = () => {
    setSelectMenu({
      id: 0,
      nickname: '',
      profileImageUrl: '',
      index: 0,
    })
    setMenuList(initMenuList)
  }

  const findMatchingItemList = (inputValue: string) => {
    const result = initMenuList.filter((menuItem) => {
      return menuItem.nickname.toLowerCase().includes(inputValue.toLowerCase())
    })
    setMenuList(result)
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    findMatchingItemList(e.target.value)
    if (e.target.value) {
      setSelectMenu((prev) => ({
        ...prev,
        nickname: e.target.value,
      }))
    } else {
      initializeSelectMenu()
    }
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (dropDownElement.current && !dropDownElement.current.contains(e.target as Node)) {
      setShowMenuList(false)
    }
  }

  const handleArrowDown = () => {
    if (menuElement.current[0]) {
      if (selectMenu.id) {
        const idx = selectMenu.index
        if (menuElement.current[idx + 1]) {
          menuElement.current[idx + 1].click()
        } else {
          menuElement.current[0].click()
        }
      } else {
        menuElement.current[0].click()
      }
    }
  }

  const handleArrowUp = () => {
    if (menuElement.current[menuList.length - 1]) {
      if (selectMenu.nickname) {
        const idx = selectMenu.index
        if (menuElement.current[idx - 1]) {
          menuElement.current[idx - 1].click()
        } else {
          menuElement.current[menuList.length - 1].click()
        }
      } else {
        menuElement.current[menuList.length - 1].click()
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
    switch (e.key) {
      case ' ':
        e.preventDefault()
        break
      case 'ArrowDown':
        e.preventDefault()
        handleArrowDown()
        break
      case 'ArrowUp':
        e.preventDefault()
        handleArrowUp()
        break
      case 'Enter':
        e.preventDefault()
        setShowMenuList(false)
        e.currentTarget.blur()
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropDownElement}
      onClick={() => setShowMenuList(true)}
      className={`${showMenuList ? 'border-violet-500' : 'border-gray-300'} relative h-[4.8rem] w-full cursor-pointer rounded-md border border-solid bg-white px-[1.6rem] py-[1.3rem] text-black`}
    >
      <div className="flex size-full items-center justify-between">
        <div className="grid grid-cols-[1.5rem_1fr] items-center gap-1 text-black">
          {selectMenu.profileImageUrl && (
            <>
              <button
                type="button"
                className="col-start-1 flex size-[1.5rem] items-center justify-center rounded-md hover:bg-slate-200"
                onClick={initializeSelectMenu}
              >
                <div className="relative h-[0.8rem] w-[0.8rem]">
                  <Image fill src={cancel} alt="취소 버튼" />
                </div>
              </button>
              <div className="relative col-start-2 h-[2.6rem] w-[2.6rem]">
                <Image
                  fill
                  src={selectMenu.profileImageUrl}
                  alt="프로필 이미지"
                  className="rounded-full border-[0.2rem]"
                />
              </div>
            </>
          )}
          <input
            ref={inputElement}
            onKeyDown={handleKeyDown}
            value={selectMenu.nickname}
            onChange={changeInput}
            className="col-start-3 text-[1.2rem] outline-none"
            placeholder="담당자를 선택해 주세요"
          />
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
          {menuList.map((menuItem, i) => (
            <div
              key={menuItem.id}
              ref={(el) => {
                menuElement.current[i] = el as HTMLDivElement
              }}
              onClick={() =>
                setSelectMenu({
                  ...selectMenu,
                  id: menuItem.id,
                  nickname: menuItem.nickname,
                  profileImageUrl: menuItem.profileImageUrl,
                  index: i,
                })
              }
              className={`${menuItem.nickname === selectMenu.nickname ? 'bg-slate-200' : ''} relative grid h-full w-full grid-cols-[1.5rem_1fr] place-items-start content-center gap-1 px-[1.6rem] py-[0.65rem] hover:bg-slate-200`}
            >
              {menuItem.nickname === selectMenu.nickname && (
                <div className="relative col-start-1 self-center">
                  <Image src={check} alt="체크 표시" />
                </div>
              )}
              <div className="col-start-2 flex items-center gap-[0.8rem] rounded-full text-black">
                <div className="relative h-[2.6rem] w-[2.6rem]">
                  <Image
                    fill
                    src={menuItem.profileImageUrl}
                    alt="프로필 이미지"
                    className="rounded-full border-[0.2rem]"
                  />
                </div>
                <div className="text-[1.2rem]">{menuItem.nickname}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
