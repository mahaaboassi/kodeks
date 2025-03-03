import Hero from "@/components/hero/page"
import { solutionData } from "@/data/data"
import DynamicPages from "@/components/daynamicPages/page"

const Solution = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Solutions" description="EDriving Digital Transformation with Innovation & Expertise" link="/aboutUs" pathFirst="About Us" pathSecond="solutions" />
        <DynamicPages data={solutionData}  />
    </div>
}
export default Solution