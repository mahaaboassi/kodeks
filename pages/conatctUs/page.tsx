import Hero from "@/components/hero/page"
import Style from "./page.module.css"

const ContactUs = ()=>{
    return<div className={`${Style.container} pb-16`}>
        <Hero title="Contact Us" description="How can we help?" link="/" pathFirst="Home" pathSecond="Contact Us" />
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            To submit a question or request, please fill out the form. We will respond as soon as possible.
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerContent} px-8 md:px-16`}>
            <form>
                
            </form>
        </div>
    </div>
}
export default ContactUs