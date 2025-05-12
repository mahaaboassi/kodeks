
import Hero from "@/components/hero/page"
import  Style  from "./page.module.css";
import { industryData } from "@/data/data";
import Image from "next/image";
import Bank from "./components/bank";
import Communication from "./components/communication";
import Energy from "./components/energy";
import Government from "./components/goverment";
import Healthcare from "./components/healthcare";
import Manufacturing from "./components/manufacturing";
import Retail from "./components/retail";
import Transportation from "./components/Transportation";


interface pagesProps {
    slug:  string ;
    name: string
  }
const SubIndustry = ({slug, name } : pagesProps)=>{
    const formatName = name.toLowerCase()
    const data = industryData.children.find(e=> `/aboutUs/industry/${formatName}`== e.link)

    return(<div className={`pb-16`} >
        <Hero title="Industries" description="Industries we Serve" link="/aboutUs/industry" pathFirst="Industries" pathSecond={slug} />
        <div className={`${Style.container} gap-10 py-16 px-8 md:px-16`}>
            <div className={`${Style.first}`}>{data && <Image width={300} height={300} src={data.srcImg} alt={data && data.title} />}</div>
            <div className={`w-full flex flex-col `}>
                <h1>{data && data.title}</h1>
                <p className="mb-5 pl-2">{ data && data.subTitle }</p>
                <div className={`${Style.content} pl-5`}>
                    {data && data.description}
                </div>

            </div>
        </div>
        { data && data.title == "Banking"  && <Bank/>}
        { data && data.title == "Communications"  && <Communication/>}
        { data && data.title == "Energy"  && <Energy/>} 
        { data && data.title == "Government"  && <Government/>} 
        { data && data.title == "Healthcare"  && <Healthcare/>}
        { data && data.title == "Manufacturing"  && <Manufacturing/>}
        { data && data.title == "Retail"  && <Retail/>} 
        { data && data.title == "Transportation & Logistics"  && <Transportation/>}
    </div>)
}

export default SubIndustry