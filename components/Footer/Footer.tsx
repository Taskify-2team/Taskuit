import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex h-[10rem] w-full items-center justify-between bg-[--white-white_FFFFFF] px-[14rem]">
      <p className="text-[1.6rem] font-normal">@FTF-Coding</p>
      <div className="flex gap-[3.2rem]">
        <Link href="/">
          <p className="text-[1.6rem] font-normal">Privacy Policy</p>
        </Link>
        <Link href="/">
          <p className="text-[1.6rem] font-normal">FAQ</p>
        </Link>
      </div>
      <div className="flex gap-[1.4rem]">
        <Link href="https://mail.google.com/mail" target="_blank">
          <Image src="/icons/emailIconDark.svg" alt="이메일 아이콘" width={22} height={22} />
        </Link>
        <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <Image src="/icons/facebookIconDark.svg" alt="페이스북 아이콘" width={22} height={22} />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            src="/icons/instagramIconDark.svg"
            alt="인스타그램 아이콘"
            width={22}
            height={22}
          />
        </Link>
      </div>
    </div>
  )
}
