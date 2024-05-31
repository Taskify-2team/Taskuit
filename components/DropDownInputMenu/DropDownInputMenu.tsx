/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import cancel from '@/public/icons/cancel.svg'
import Image from 'next/image'

interface MenuList {
  id: number
  nickname: string
  profileImageUrl: string
}

interface DropDownInputMenuProps {
  menuList: MenuList[]
}

export default function DropDownInputMenu({ menuList }: DropDownInputMenuProps) {
  const [selectMenu, setSelectMenu] = useState({
    id: 0,
    nickname: '',
    profileImageUrl: '',
  })
  const [foundList, setFoundList] = useState<MenuList[]>(menuList)
  const [showMenuList, setShowMenuList] = useState(false)
  const refNode = useRef<HTMLDivElement>(null)

  const isKoreanFoundValue = (value: string) => {
    const koreanPattern = /[가-힣]/
    return value.match(koreanPattern)
  }

  const initializeSelectMenu = () => {
    setSelectMenu({
      id: 0,
      nickname: '',
      profileImageUrl: '',
    })
    setFoundList(menuList)
  }

  const findMatchingItemList = (inputValue: string) => {
    const result = menuList.filter((menuItem) => {
      return (
        menuItem.nickname.toLowerCase().includes(inputValue.toLowerCase()) &&
        isKoreanFoundValue(inputValue)
      )
    })
    setFoundList(result)
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    findMatchingItemList(e.target.value)
    if (e.target.value) {
      setSelectMenu({
        ...selectMenu,
        nickname: e.target.value,
      })
    } else {
      initializeSelectMenu()
    }
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
  }, [refNode])

  return (
    <div
      ref={refNode}
      onClick={() => setShowMenuList(true)}
      className={`${showMenuList ? 'border-violet-500' : 'border-gray-300'} relative h-[4.8rem] w-full cursor-pointer rounded-md border border-solid bg-white px-[1.6rem] py-[1.3rem] text-black`}
    >
      <div className="flex size-full items-center">
        <div className="grid grid-cols-[1.5rem_1fr] items-center gap-1 text-black">
          {selectMenu.profileImageUrl && (
            <>
              <button
                type="button"
                className="relative col-start-1 h-[1.2rem] w-[1.2rem]"
                onClick={initializeSelectMenu}
              >
                <Image fill src={cancel} alt="취소 버튼" />
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
            value={selectMenu.nickname}
            onChange={changeInput}
            className="col-start-3 text-[1.2rem] outline-none"
            placeholder="담당자를 선택해 주세요"
          />
        </div>
        <div>
          <Image src={arrow} alt="드롭다운 화살표" className={showMenuList ? 'rotate-180' : ''} />
        </div>
      </div>
      {showMenuList && (
        <div className="absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid border-gray-300 bg-white py-[0.65rem] shadow-lg">
          {foundList.map((menuItem) => (
            <div
              key={menuItem.id}
              onClick={() =>
                setSelectMenu({
                  id: menuItem.id,
                  nickname: menuItem.nickname,
                  profileImageUrl: menuItem.profileImageUrl,
                })
              }
              className="relative grid h-full w-full grid-cols-[1.5rem_1fr] place-items-start content-center gap-1 px-[1.6rem] py-[0.65rem] hover:bg-slate-200"
            >
              {menuItem.nickname === selectMenu.nickname && (
                <div className="relative col-start-1 self-center">
                  <Image src={check} alt="체크 표시" />
                </div>
              )}
              <div className="col-start-2 flex items-center gap-[0.8rem] rounded-full px-[0.8rem] py-[0.4rem] text-black">
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
