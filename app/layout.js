import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react'

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
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {/* <Navbar/> */}
        <ReactLenis root/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
