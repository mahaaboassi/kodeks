import Hero from "@/components/hero/page"
import { industryData } from "@/data/data"
import DynamicComponent from "@/components/daynamicComponent/page"

const Industry = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Industries" description="Industries we Serve" link="/aboutUs" pathFirst="About Us" pathSecond="Industry" />
        <DynamicComponent type="industry" data={industryData} />
    </div>
}
export default Industry