'use client';

import { usePathname } from 'next/navigation';

export default function KittyStickers() {
  const pathname = usePathname();

  // 현재 주소가 메인 홈 화면('/') 이라면 아무것도 보여주지 않고 끝냅니다.
  if (pathname === '/') {
    return null; 
  }

  // 홈 화면이 아닌 다른 모든 화면에서는 스티커를 보여줍니다.
  return (
    <>
      <img className="sticker sticker1" src="/doll1.png" alt="sticker1" />
      <img className="sticker sticker2" src="/doll2.png" alt="sticker2" />
      <img className="sticker sticker3" src="/doll3.png" alt="sticker3" />
    </>
  );
}