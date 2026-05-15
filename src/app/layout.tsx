// import "@/styles/globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Providers from "./providers";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="ko">
//       <body>
//         <Navbar />
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;


import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Providers from "./providers";
import KittyStickers from "@/components/layout/KittyStickers"; // 👈 방금 만든 스티커 담당 컴포넌트 불러오기

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        
        {/* 🎀 이 컴포넌트가 알아서 주소를 확인하고 스티커를 붙일지 말지 결정합니다 */}
        <KittyStickers />

        <Navbar />

        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}