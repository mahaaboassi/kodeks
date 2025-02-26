import Hero from "@/components/hero/page"
import Style from "./page.module.css"

const ESG = ()=>{
    return<div className={`${Style.container}`}>
        <Hero title="ESG" description="Building a Sustainable & Inclusive Future" link="/aboutUs" pathFirst="About Us" pathSecond="ESG" />
        <h1>EGS</h1>
    </div>
}
export default ESG