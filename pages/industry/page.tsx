import Hero from "@/components/hero/page"
import Style from "./page.module.css"
import { industryData } from "@/data/data"

const Industry = ()=>{
    return<div className={`${Style.container} pb-16`}>
        <Hero title="Industries" description="Industries we Serve" link="/aboutUs" pathFirst="About Us" pathSecond="Industry" />
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            {industryData.description}
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerBlocks}`}>
            <div className={`${Style.blocks} grid px-8 md:px-16 gap-5 grid-cols-1 md:grid-cols-2 pt-28 `}>
                {industryData.children.map((e,idx)=><div className={`${Style.card} p-5`} key={`Solutions_elements_${e.title}_${idx}`}>
                    <div className="flex gap-3 items-center pb-3">
                        <div className={Style.containerSvg} >{e.img}</div>
                        <div>
                            <h3>{e.title}</h3>
                            <p className="">{e.description}</p>
                        </div>
                    </div>
                    
                    <div className={`${Style.sub}`}>{e.subDes}</div>
                   
                </div>)}
            </div>
        </div>
    </div>
}
export default Industry