import Image from "next/image"
import Style from "../page.module.css"
const HeroSection = ()=>{
    return <div >
        <div className={`${Style.containerHero} pt-20`}>
            <div className="grid grid-cols-2 ">
                <div className="flex flex-col justify-center pt-20 px-16">
                    
                    <h1>Industry-Specific Expertise </h1>
                    <h2>We understand your sector’s unique challenges and deliver tailored solutions.</h2>
                </div>

            </div>
            {/* <Image src={"/ai-robot-working-in-the-office-2025-01-08-07-41-32-utc.jpg"} alt="AI" width={450} height={450}  /> */}
        </div>
    </div>
}
export default HeroSection