import Hero from "@/components/hero/page"
import { innovationData } from "@/data/data"
import DynamicPages from "@/components/daynamicPages/page"

const Innovation = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Innovation at KODEKS" description="Turning Ideas into Scalable Solutions" link="/aboutUs" pathFirst="About Us" pathSecond="Innovation" />
        <DynamicPages data={innovationData} />
    </div>
}
export default Innovation