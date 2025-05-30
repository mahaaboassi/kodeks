import Hero from "@/components/hero/page"
import { solutionData } from "@/data/data"
import DynamicComponent from "@/components/daynamicComponent/page"

const Solution = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Solutions" description="Driving Digital Transformation with Innovation & Expertise" link="/aboutUs" pathFirst="About Us" pathSecond="solutions" />
        <DynamicComponent type="solution" data={solutionData}  />
    </div>
}
export default Solution