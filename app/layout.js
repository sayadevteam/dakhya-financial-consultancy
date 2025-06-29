import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react'
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dakhya Financial Consultancy",
  description: "",
  icons: {
    icon: '/favicon.png', 
  },
};  



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {/* <Navbar/> */}
        <ReactLenis root/>
        {children}
        <WhatsAppButton />
        <Toaster/>
        <Footer/>
      </body>
    </html>
  
  );
}
