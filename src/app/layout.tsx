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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>

        {/* 🎀 떠다니는 스티커 이미지 */}
        <img className="sticker sticker1" src="/doll1.png" alt="sticker1" />
        <img className="sticker sticker2" src="/doll2.png" alt="sticker2" />
        <img className="sticker sticker3" src="/doll3.png" alt="sticker3" />

        <Navbar />

        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}