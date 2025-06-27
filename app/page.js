import AboutUsPage from "./AboutUs/page";
import ContactUsPage from "./ContactUs/page";
import HomePage from "./HomePage/page";
import ServicesSection from "./ServicesPage/page";


export default function Home() {
  return (
    <main className="bg-[#131314]">
        <HomePage/>
        <ServicesSection/>
        <AboutUsPage/>
        <ContactUsPage/>
    </main>
  );
} 
