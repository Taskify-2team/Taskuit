import Link from 'next/link'
import { useRouter } from 'next/router'

interface DropdownProps {
  theme: string
}

function Dropdown({ theme }: DropdownProps) {
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    router.push('/login')
  }

  return (
    <div
      className={`absolute left-[1rem] top-[4.5rem] flex w-[11rem] animate-slideDown flex-col overflow-hidden rounded-md border border-solid p-[0.5rem] text-center sm:left-[-4.5rem] sm:w-[10rem] md:left-[0.5rem] ${
        theme === 'normal'
          ? 'border-var-gray3 bg-var-white'
          : 'border-var-black1 bg-var-black1 text-white'
      } shadow-lg`}
    >
      <Link
        href="/mypage"
        className="block w-full rounded-[0.4rem] px-4 py-[1rem] text-left text-[1.6rem] hover:bg-var-violet sm:text-[1.3rem]"
      >
        내 정보
      </Link>
      <Link
        href="/mydashboard"
        className="block w-full rounded-[0.4rem] px-4 py-[1rem] text-left text-[1.6rem] hover:bg-var-violet sm:text-[1.3rem]"
      >
        내 대시보드
      </Link>
      <button
        type="button"
        className="border-t-block w-full rounded-[0.4rem] px-4 py-[1rem] text-left text-[1.6rem] hover:bg-var-violet sm:text-[1.3rem]"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  )
}

export default Dropdown
