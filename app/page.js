import AboutUsPage from "./AboutUs/page";
import ContactUsPage from "./ContactUs/page";
import HomePage from "./HomePage/page";
import ServicesPage from "./ServicesPage/page";

export const metadata = {
  title: "Dakhya Financial Consultancy",
  description: "",
};  

export default function Home() {
  return (
    <main>
        <HomePage/>
        <ServicesPage/>
        <AboutUsPage/>
        <ContactUsPage/>
    </main>
  );
} 
