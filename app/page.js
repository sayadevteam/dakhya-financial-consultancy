import AboutUsPage from "./AboutUs/page";
import ContactUsPage from "./ContactUs/page";
import HomePage from "./HomePage/page";
import ServicesSection from "./ServicesPage/page";


export default function Home() {
  return (
    <main>
        <HomePage/>
        <ServicesSection/>
        <AboutUsPage/>
        <ContactUsPage/>
    </main>
  );
} 
