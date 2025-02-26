import Hero from "@/components/hero/page"
import Style from "./page.module.css"

const Industry = ()=>{
    return<div className={`${Style.container}`}>
        <Hero title="Industries" description="Industries we Serve" link="/aboutUs" pathFirst="About Us" pathSecond="Industry" />
        <h1>Industry</h1>
    </div>
}
export default Industry