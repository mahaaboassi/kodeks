import Image from "next/image"
import Style  from "../page.module.css"
const Introduction = ()=>{
    return <div className={`${Style.containerIntro} py-16 px-8 md:px-16`}>
        <div className=" flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-1">
                <div className="mb-3">
                 <Image src="/team.jpg" width={500} height={500} alt="team" />
                </div>
                <p>
                    For over 30 years, we have built a reputation for excellence, reliability, and trust. The continued confidence of our clients is a testament to our technical expertise, forward-thinking strategies, and unwavering commitment to delivering transformative solutions. 
                    At INTELLECTRA, technology is not just an enabler—it’s a catalyst for progress.

                </p>
                
            </div>
            <div className={`md:col-span-2`}>
                <ul>
                    <li className="p-3">At INTELLECTRA, we empower businesses with cutting-edge Information & Communication Technologies (ICT) solutions, blending human expertise with the limitless possibilities of technology. Our focus is on delivering results-driven digital transformation that enhances operational efficiency, drives innovation, and maximizes return on investment (ROI).</li>
                    <li className="p-3">With a presence across multiple industries and global markets, we provide scalable, sustainable, and future-ready ICT services that combine global best practices with localized expertise. Our approach is insights-driven and outcome-focused, ensuring that every solution we implement contributes to long-term business success.</li>
                    <li className="p-3">As your trusted technology partner, we collaborate closely with clients to ensure that technology serves as a driving force behind business growth, efficiency, and societal impact. By embedding ourselves within local markets, we foster lasting relationships built on trust, expertise, and shared success.</li>
                    <li className="p-3">Our global network of skilled professionals brings together the right talent, innovation, and strategic insights to every engagement, ensuring that businesses thrive in an ever-evolving digital landscape. Using a consultative and collaborative approach, we help organizations achieve measurable business outcomes, enhance mission-critical operations, and drive meaningful impact.</li>
                </ul>
            </div>
           

        </div>

    </div>
}
export default Introduction