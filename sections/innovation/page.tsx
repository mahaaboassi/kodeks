import Hero from "@/components/hero/page"
import { innovationData } from "@/data/data"
import DynamicComponent from "@/components/daynamicComponent/page"

const Innovation = ()=>{
    return<div className={`pb-16`}>
        <Hero title="Innovation at KODEKS" description="Turning Ideas into Scalable Solutions" link="/aboutUs" pathFirst="About Us" pathSecond="Innovation" />
        <DynamicComponent type="innovation" data={innovationData} />
    </div>
}
export default Innovation