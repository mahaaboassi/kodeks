"use client"
import Hero from "@/components/hero/page"
import  Style  from "./page.module.css";
import { solutionData } from "@/data/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface pagesProps {
    slug:  string ;
    name: string
  }
const SubSolution = ({slug, name } : pagesProps)=>{
    const formatName = name.replace(" ","-").toLowerCase()
    const data :  {
            title: string;
            img: React.ReactNode;
            subTitle: string;
            description: string;
            content: string[];
            link: string;
            srcImg: string;
            finalDescription: string;
        } | undefined= solutionData.children.find(e=> `/aboutUs/solutions/${formatName}`== e.link)

    
    const [isTriggle, setIsTriggle ] = useState(false)
    const targetRef = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
            setIsTriggle(entry.isIntersecting);
            },
            { threshold: 0.3 } // adjust threshold as needed
        );

        const current = targetRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    },[])
    return(<div className={`pb-16`} >
        <Hero title="Solutions" description="Driving Digital Transformation with Innovation & Expertise" link="/aboutUs/solutions" pathFirst="Solutions" pathSecond={slug}  />
        <div className={`${Style.container} gap-10 py-16 px-8 md:px-16`}>
            <div className={`${Style.first}`}>{data && <Image width={300} height={300} src={data.srcImg} alt={data && data.title} />}</div>
            <div ref={targetRef} className={`w-full flex flex-col ${Style.second}`}>
                <h1>{data && data.title}</h1>
                <p className="mb-5 pl-2">{ data && data.subTitle }</p>
                <div className={`${Style.content} pl-5`}>
                    {data && data.description}
                </div>
                <ul  className={`pt-3 flex flex-col gap-1 ${isTriggle ? Style.animate: ""}`}>
                    {data && data.content.map((child,i)=><li  key={`Solutions_sperate_elements_${child}_${i}`}>{child}</li>)}
                </ul>

            </div>
        </div>
        {/* { data && data.title == "Banking"  && <Bank/>}
        { data && data.title == "Communications"  && <Communication/>}
        { data && data.title == "Energy"  && <Energy/>} 
        { data && data.title == "Government"  && <Government/>} 
        { data && data.title == "Healthcare"  && <Healthcare/>}
        { data && data.title == "Manufacturing"  && <Manufacturing/>}
        { data && data.title == "Retail"  && <Retail/>} 
        { data && data.title == "Transportation & Logistics"  && <Transportation/>} */}
    </div>)
}

export default SubSolution