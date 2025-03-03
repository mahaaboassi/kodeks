import Hero from "@/components/hero/page"
import { industryData } from "@/data/data"
import DynamicPages from "@/components/daynamicPages/page"

const Industry = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Industries" description="Industries we Serve" link="/aboutUs" pathFirst="About Us" pathSecond="Industry" />
        <DynamicPages data={industryData} />
    </div>
}
export default Industry