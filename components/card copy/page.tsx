"use client"
import { useEffect, useState } from "react";
import Style from "./page.module.css"
import { useRouter } from "next/navigation";

type InfoProps = {
    icon : React.ReactNode,
    title : string,
    description : string ,
    keywords : string[],
    link : string
}

const CardServices =({icon,title,description,keywords,link}:InfoProps)=>{
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
        }
    }, []);
  return <div className={`${Style.container}`}>
        <div className="flex gap-2">
            <div  className={`${Style.containerSvg} `}>
                {icon}
            </div> 
            <h3 className="flex items-center">{title}</h3>
        </div>
        
        
        <p className="py-3">{windowWidth <500?description.substring(0,300)+"...":description}</p>
        <ul className="gap-2">
            {keywords.map((e,idx)=><li key={`Service_${e}_${idx}`}>{e}</li>)}
        </ul>
        <div className={` pt-5`}>
            <button onClick={()=>router.push(link)}  className="btn-light">learn more</button>
        </div>
  </div>

}
export default CardServices 