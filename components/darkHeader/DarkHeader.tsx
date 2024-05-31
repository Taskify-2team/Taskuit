import { useEffect, useState } from 'react';
import Image from 'next/image';
import darklogo from './darklogo.svg';
import darklogosmall from './darklogosmall.svg';

export default function DarkHeader() {
  const [logoSrc, setLogoSrc] = useState<string>(darklogo);

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 400) {
        setLogoSrc(darklogosmall);
      } else {
        setLogoSrc(darklogo);
      }
    };
    window.addEventListener('resize', updateLogo);
    updateLogo();

    return () => window.removeEventListener('resize', updateLogo);
  }, []);

  return (
    <div className="flex justify-between items-center pt-4 pr-20 pb-4 pl-4 bg-black w-full">
      <Image src={logoSrc} alt="다크 헤더 로고" />
      <div className="flex gap-9">
        <p className="text-base">로그인</p>
        <p className="text-base">회원가입</p>
      </div>
    </div>
  );
}
