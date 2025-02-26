import Link from "next/link"
import Style from "./page.module.css"

type HeroProps = {
    pathFirst : string,
    pathSecond : string,
    description : string,
    link : string,
    title : string
}
const Hero = ({pathFirst,pathSecond,link,description,title}:HeroProps)=>{
    return <div >
    <div className={`${Style.container} pt-14 sm:pt-28`}>
        <div className="grid grid-cols-1  ">
            <div >
                <div  className="flex flex-col justify-center pt-20 px-8 md:px-16">
                    <h1>{title}</h1>
                    <h2>
                        {description}
                    </h2>
                    <p className="pt-3"> <Link href={link}>{pathFirst}</Link> <span>/ {pathSecond}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
}
export default Hero