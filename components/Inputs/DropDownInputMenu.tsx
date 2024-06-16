import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import cancel from '@/public/icons/cancel.svg'
import Image from 'next/image'
import { Assignee } from '@/types/dashboard'
import { Member } from '@/types/member'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import InputLayout from './InputLayout'
import UserInfo from '../UserInfo/UserInfo'

interface DropDownInputMenuProps {
  label: string
  id: string
  currentManager?: Assignee
  memberList: Member[]
  setManager: Dispatch<SetStateAction<number>>
  setPage: Dispatch<SetStateAction<number>>
  totalMember: number
  isRequired?: boolean
}

export default function DropDownInputMenu({
  label,
  id,
  setManager,
  currentManager,
  memberList: initMemberList = [],
  setPage,
  totalMember,
  isRequired,
}: DropDownInputMenuProps) {
  const [selectMenu, setSelectMenu] = useState({
    id: currentManager?.id,
    nickname: currentManager?.nickname,
    profileImageUrl: currentManager?.profileImageUrl,
    index: 0,
  })
  const [menuList, setMenuList] = useState<Member[]>([])
  const [showMenuList, setShowMenuList] = useState(false)
  const dropDownElement = useRef<HTMLDivElement>(null)
  const menuElement = useRef<HTMLDivElement[]>([])
  const inputElement = useRef<HTMLInputElement>(null)
  const obsRef = useRef(null)
  const { theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  const initializeSelectMenu = () => {
    setSelectMenu({
      id: 0,
      nickname: '',
      profileImageUrl: '',
      index: 0,
    })
    setMenuList(initMemberList)
  }

  const findMatchingItemList = (inputValue: string) => {
    const result = initMemberList?.filter((member) => {
      return member.nickname.toLowerCase().includes(inputValue.toLowerCase())
    })
    setMenuList(result)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleOutsideClick = (e: MouseEvent) => {
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
    if (menuList && menuElement.current[menuList.length - 1]) {
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
    if (e.nativeEvent.isComposing) return
    switch (e.key) {
      case ' ':
        e.preventDefault()
        break
      case 'ArrowDown':
        handleArrowDown()
        break
      case 'ArrowUp':
        handleArrowUp()
        break
      case 'Enter':
        setShowMenuList(false)
        e.currentTarget.blur()
        break
      default:
        break
    }
  }

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (selectMenu.id) {
      setManager(selectMenu.id)
    }
  }, [selectMenu.id, setManager])

  useEffect(() => {
    setMenuList(initMemberList)
  }, [initMemberList])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 })
    if (obsRef.current && totalMember !== menuList.length) observer.observe(obsRef.current)
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenuList, menuList])

  return (
    <InputLayout id={id} label={label} isRequired={isRequired}>
      <div
        ref={dropDownElement}
        onClick={() => setShowMenuList(true)}
        className={`${showMenuList ? 'border-primary-violet' : 'border-var-gray3'} relative flex w-full cursor-pointer items-center gap-[0.6rem] rounded-[0.6rem] border border-solid ${theme === 'normal' ? 'bg-var-white text-var-black2' : 'border-var-black1 bg-var-black1 text-var-gray3'} px-[1.6rem] py-[1.2rem] sm:py-[1rem]`}
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
                className={`rounded-full border ${theme === 'normal' ? 'border-var-white' : 'border-var-black1'}`}
              />
            </div>
          </>
        )}
        <input
          ref={inputElement}
          onKeyDown={handleKeyDown}
          value={selectMenu.nickname}
          onChange={handleInputChange}
          className={`w-full text-[1.6rem] outline-none sm:text-[1.4rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black1'}`}
          placeholder={language === 'ko' ? '이름을 입력해 주세요' : 'Input your name'}
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
          <div
            className={`absolute left-0 top-[5rem] z-50 flex max-h-[19rem] w-full animate-slideDown flex-col overflow-scroll rounded-md border border-solid ${theme === 'normal' ? 'border-var-gray3 bg-var-white' : 'border-var-black1 bg-var-black1'} py-[0.65rem] shadow-lg`}
          >
            {menuList?.map((menuItem, i) => (
              <div
                key={menuItem.userId}
                ref={(el) => {
                  menuElement.current[i] = el as HTMLDivElement
                }}
                onClick={() =>
                  setSelectMenu({
                    ...selectMenu,
                    id: menuItem.userId,
                    nickname: menuItem.nickname,
                    profileImageUrl: menuItem.profileImageUrl,
                    index: i,
                  })
                }
                // eslint-disable-next-line no-nested-ternary
                className={`${menuItem.nickname === selectMenu.nickname && (theme === 'normal' ? 'bg-var-violet' : 'bg-var-black2')} relative flex h-full w-full items-center gap-[1rem] px-[1.6rem] py-[0.65rem] ${theme === 'normal' ? 'hover:bg-var-violet' : 'hover:bg-var-black2'} `}
              >
                <div className="relative size-[1rem] self-center">
                  {menuItem.nickname === selectMenu.nickname && (
                    <Image src={check} alt="체크 표시" />
                  )}
                </div>
                <UserInfo profileImageUrl={menuItem.profileImageUrl} nickname={menuItem.nickname} />
              </div>
            ))}
            <div ref={obsRef} />
          </div>
        )}
      </div>
    </InputLayout>
  )
}
