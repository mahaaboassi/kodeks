import Solutions from "./components/solutions"
import HeroSection from "./components/hero"
import Services from "./components/services"
import AboutUS from "./components/aboutUs"
import Blogs from "./components/blogs"
import ContactUs from "./components/contactUs"

const HomePage = ()=>{
    return <>
        <HeroSection/>
        <Services/>
        
        <AboutUS/>
        <Solutions/>
        <Blogs/>
        <ContactUs/>
    
    </>
}
export default HomePage