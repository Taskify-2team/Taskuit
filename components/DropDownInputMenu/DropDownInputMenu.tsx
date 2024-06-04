import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import cancel from '@/public/icons/cancel.svg'
import Image from 'next/image'
import { Member } from '@/types/member'
import InputLayout from '../Input/InputLayout'

interface DropDownInputMenuProps {
  label: string
  id: string
  menuList: Member[]
}

export default function DropDownInputMenu({
  label,
  id,
  menuList: initMenuList,
}: DropDownInputMenuProps) {
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
      if (selectMenu.nickname) {
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
    <InputLayout id={id} label={label}>
      <div
        ref={dropDownElement}
        onClick={() => setShowMenuList(true)}
        className={`${showMenuList ? 'border-primary-violet' : 'border-var-gray3'} relative flex h-[4.8rem] w-[21.7rem] cursor-pointer items-center gap-[0.6rem] rounded-[0.6rem] border border-solid bg-var-white px-[1.6rem] py-[1.3rem] text-var-black2`}
      >
        {selectMenu.profileImageUrl && (
          <>
            <button
              type="button"
              className="flex size-[1.5rem] items-center justify-center rounded-md hover:bg-var-gray2"
              onClick={initializeSelectMenu}
            >
              <div className="relative size-[0.8rem]">
                <Image fill src={cancel} alt="취소 버튼" />
              </div>
            </button>
            <div className="relative size-[2.6rem] shrink-0">
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
          className="w-full text-[1.6rem] outline-none"
          placeholder="이름을 입력해 주세요"
        />
        <div className="absolute right-[1.5rem] size-[1rem]">
          <Image
            fill
            src={arrow}
            alt="드롭다운 화살표"
            className={showMenuList ? 'rotate-180' : ''}
          />
        </div>
        {showMenuList && (
          <div className="absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-var-gray3 bg-var-white py-[0.65rem] shadow-lg">
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
                className={`${menuItem.nickname === selectMenu.nickname ? 'bg-var-violet' : ''} relative flex h-full w-full items-center gap-[1rem] px-[1.6rem] py-[0.65rem] hover:bg-var-violet`}
              >
                <div className="relative size-[1rem] self-center">
                  {menuItem.nickname === selectMenu.nickname && (
                    <Image src={check} alt="체크 표시" />
                  )}
                </div>
                <div className="relative h-[2.6rem] w-[2.6rem]">
                  <Image
                    fill
                    src={menuItem.profileImageUrl}
                    alt="프로필 이미지"
                    className="rounded-full border-[0.2rem]"
                  />
                </div>
                <div className="text-[1.6rem]">{menuItem.nickname}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </InputLayout>
  )
}
