
import Hero from "@/components/hero/page"
import Style from "./page.module.css"
import Introduction from "./components/intro"
import Blocks from "./components/blocks"

const About = ()=>{
    return<div className={`${Style.container}`}>
        <Hero title="About Us" description="Empowering Businesses with Technology" link="/" pathFirst="Home" pathSecond="About Us" />
        <Introduction/>
        <Blocks/>
    </div>
}
export default About