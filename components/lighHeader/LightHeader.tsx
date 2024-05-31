import { useEffect, useState } from 'react';
import Image from 'next/image';
import lightlogo from './lightLogo.svg';
import lightlogosmall from './lightlogosmall.svg';

export default function LightHeader() {
  const [logoSrc, setLogoSrc] = useState<string>(lightlogo);

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 400) {
        setLogoSrc(lightlogosmall);
      } else {
        setLogoSrc(lightlogo);
      }
    };
    window.addEventListener('resize', updateLogo);
    updateLogo();

    return () => window.removeEventListener('resize', updateLogo);
  }, []);

  return (
    <div className="flex justify-between items-center pt-4 pr-20 pb-4 pl-4 bg-white w-full">
      <Image src={logoSrc} alt="라이트 헤더 로고" />
      <div className="flex gap-9">
        <p className="text-base text-black">로그인</p>
        <p className="text-base text-black">회원가입</p>
      </div>
    </div>
  );
}
