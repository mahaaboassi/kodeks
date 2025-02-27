import Hero from "@/components/hero/page"
import Style from "./page.module.css"
import { esgData } from "@/data/data"

const ESG = ()=>{
    return<div className={`${Style.container} pb-16`}>
        <Hero title="ESG" description="Building a Sustainable & Inclusive Future" link="/aboutUs" pathFirst="About Us" pathSecond="ESG" />
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            {esgData.description}
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerBlocks}`}>
            <div className={`${Style.blocks} grid px-8 md:px-16 gap-5 grid-cols-1 md:grid-cols-2 pt-28 `}>
                {esgData.children.map((e,idx)=><div className={`${Style.card} p-5`} key={`Solutions_elements_${e.title}_${idx}`}>
                    <div className="flex gap-3 items-center pb-3">
                        <div className={Style.containerSvg} >{e.img}</div>
                        <div>
                            <h3>{e.title}</h3>
                            <p className="">{e.subTitle}</p>
                        </div>
                    </div>
                    
                    <div className={`${Style.sub}`}>{e.description}</div>
                    <ul className="pt-3 flex flex-col gap-1">
                        {e.content.map((child,i)=><li  key={`Solutions_elements_${child}_${i}`}>{child}</li>)}
                    </ul>
                    <div className={`${Style.sub} pt-3`}>{e.description}</div>
                </div>)}
            </div>
        </div>
    </div>
}
export default ESG