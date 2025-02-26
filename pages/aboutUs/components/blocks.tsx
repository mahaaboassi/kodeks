import Style  from "../page.module.css"
import Link from "next/link"
const Blocks = ()=>{
    const data =[{
        name : "Innovation at the Core",
        des : <div>Success in today’s fast-changing digital world requires constant reinvention, agility, and bold innovation. At KODEKS, we help organizations stay ahead by transforming ideas into actionable, scalable solutions through our idea-to-solution framework. Whether through AI, automation, cybersecurity, or cloud solutions, we enable businesses to embrace innovation that fuels sustainable growth.</div>,
        image : "",
        link : "/aboutUs/innovation"
    },{
        name : "Our Commitment to ESG",
        des : <div><strong>At KODEKS</strong>, sustainability and ethical responsibility are not just corporate values—they are fundamental to the way we do business. We are deeply committed to environmental stewardship, social impact, and governance excellence. Our ESG initiatives are integrated into our business operations, partnerships, and community-driven projects, ensuring that we contribute to a more sustainable and inclusive world.</div>,
        image : "",
        link : "/aboutUs/esg"
    },{
        name : "Industry Expertise",
        des : <div>With deep experience across multiple industries, our engineers and consultants help businesses navigate complexity with precision and confidence. We map your industry’s architecture to tailored technology solutions, ensuring that every implementation is purpose-built to meet your unique operational challenges. As industries continue to evolve and boundaries blur, we leverage insights from cross-industry collaborations to introduce breakthrough solutions that redefine business potential.</div>,
        image : "",
        link : "/aboutUs/industry"
    },{
        name : "Solutions",
        des : <div>In today’s fast-evolving digital landscape, transformation is no longer optional—it’s essential. At KODEKS, we empower businesses to adapt, accelerate, and thrive with secure, flexible, and future-ready ICT solutions. Our end-to-end services enable organizations to enhance digital agility, strengthen cybersecurity resilience, scale seamlessly with cloud and AI-driven technologies, and optimize workflows through intelligent automation—all designed to drive efficiency, innovation, and long-term success.</div>,
        image : "",
        link : "/aboutUs/solutions"
    }]
    return <div className={`${Style.containerBlocks} py-16 px-8 md:px-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  ">
            {data.map((e,idx)=><div className={`${Style.card} p-5`} key={`About_Us_services_${e.name}_${idx}`}>
                <h3>{e.name}</h3>
                <div className={`${Style.description} py-3`}>{e.des}</div>
                
                <div> <Link href={e.link}><span >See More</span> </Link> </div>
                
            </div>)}
            
            

        </div>

    </div>
}
export default Blocks