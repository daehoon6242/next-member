import Navbar from "@/components/layout/Navbar";
import Providers from "./providers";


const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html><body>
      <Navbar />
      <Providers>
        {children}
      </Providers>
    </body></html>
  );
};

export default RootLayout;