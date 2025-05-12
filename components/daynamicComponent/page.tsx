import Link from "next/link";
import Style from "./page.module.css"

type DataType = {
    title : string,
    description : React.ReactNode,
    children :{
        title : string,
        subTitle ? : string,
        description : React.ReactNode,
        finalDescription ? : React.ReactNode,
        img :  React.ReactNode;
        content: string[];
        link?: string; 
    }[]
    
}
type PropsDynamic = {
    data: DataType;
};
const DynamicComponent = ({data}:PropsDynamic)=>{
    return<div className={`${Style.container}`}>
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            {data.description}
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerBlocks}`}>
            <div className={`${Style.blocks} grid px-8 md:px-16 gap-5 grid-cols-1 md:grid-cols-2 pt-28 `}>
                {data.children.map((e,idx)=><div className={`${Style.card} p-5`} key={`Solutions_elements_${e.title}_${idx}`}>
                    <div className="flex gap-3 items-center pb-3">
                        <div className={Style.containerSvg} >{e.img}</div>
                        <div>
                            <h3>{e.title}</h3>
                            {e.subTitle != "" && <p >{e.subTitle}</p>}
                        </div>
                    </div>
                    
                    <div className={`${Style.description}`}>{e.description}</div>
                    {e.content.length >0 && <ul className="pt-3 flex flex-col gap-1">
                        {e.content.map((child,i)=><li  key={`Solutions_elements_${child}_${i}`}>{child}</li>)}
                    </ul>}
                    {e.finalDescription != "" && <div className={`${Style.sub} pt-3`}>{e.finalDescription}</div>}
                    {e.link && <div className="py-3">
                        <Link href={e.link}><span >See More</span></Link>
                        </div>}
                </div>)}
            </div>
        </div>
    </div>
}

export default DynamicComponent