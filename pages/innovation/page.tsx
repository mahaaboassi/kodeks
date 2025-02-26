import Hero from "@/components/hero/page"
import Style from "./page.module.css"

const Innovation = ()=>{
    return<div className={`${Style.container}`}>
        <Hero title="Innovation at KODEKS" description="Turning Ideas into Scalable Solutions" link="/aboutUs" pathFirst="About Us" pathSecond="Innovation" />
        <h1>Innovation</h1>
    </div>
}
export default Innovation