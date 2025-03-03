import Hero from "@/components/hero/page"
import { esgData } from "@/data/data"
import DynamicPages from "@/components/daynamicPages/page"

const ESG = ()=>{
    return<div className={`pb-16`}>
        <Hero title="ESG" description="Building a Sustainable & Inclusive Future" link="/aboutUs" pathFirst="About Us" pathSecond="ESG" />
        <DynamicPages data={esgData} />
    </div>
}
export default ESG