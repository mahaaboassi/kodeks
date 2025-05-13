import Image from "next/image"
import Style from "./page.module.css"
import Link from "next/link"

const Footer = ()=>{
    const pages = [{
        name : "About Us",
        link : "/aboutUs"
    },{
        name : "Insights",
        link : "/aboutUs/industry"
    },{
        name : "Solution",
        link : "/aboutUs/solutions"
    },{
        name : "Conatct Us",
        link : "/contactUs"
    }]
    const solutions = [{
        name : "Augmented Reality (AR)",
        link : "/aboutUs/solutions/augmented-reality-(ar)"
    },{
        name : "Cybersecurity",
        link : "/aboutUs/solutions/cybersecurity"
    },{
        name : "Data Center",
        link : "/aboutUs/solutions/data-center"
    },{
        name : "See More",
        link : "/aboutUs/solutions"
    }]
    const support = [{
        name : "Cookie Management Center",
        link : "/cookies"
    },{
        name : "FAQs",
        link : "/FAQs"
    },{
        name : "Privacy Policy",
        link : "/privacyPolicy"
    },{
        name : "Terms & Conditions",
        link : "/termsAndConditions"
    }]
    const  icons = [{
        name : "linkedin",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" viewBox="0 0 151 149" fill="none">
        <path d="M5.72955 29.9378C2.20568 26.6651 0.44751 22.6161 0.44751 17.7983C0.44751 12.9806 2.20568 8.74898 5.72955 5.47628C9.25341 2.20357 13.7894 0.567261 19.353 0.567261C24.9166 0.567261 29.2701 2.20357 32.7864 5.47628C36.3102 8.74898 38.0684 12.8588 38.0684 17.7983C38.0684 22.7378 36.3102 26.6651 32.7864 29.9378C29.2625 33.2105 24.7872 34.8468 19.353 34.8468C13.9188 34.8468 9.25341 33.2105 5.72955 29.9378ZM35.1001 48.7064V148.996H3.41579V48.7064H35.1001Z" fill="#3C3C3B"/>
        <path d="M140.595 58.6082C147.498 66.1049 150.954 76.4026 150.954 89.5086V147.23H120.852V93.5805C120.852 86.9742 119.14 81.8368 115.715 78.1759C112.29 74.5151 107.686 72.6884 101.901 72.6884C96.117 72.6884 91.5123 74.5227 88.0874 78.1759C84.6625 81.8368 82.95 86.9742 82.95 93.5805V147.23H52.6737V48.4323H82.95V61.5384C86.0172 57.1698 90.15 53.722 95.3483 51.18C100.539 48.6455 106.384 47.3745 112.876 47.3745C124.445 47.3745 133.684 51.1266 140.588 58.6158L140.595 58.6082Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.linkedin.com/company/kodeks/"
    },{
        name : "youtube",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="" viewBox="0 0 172 121" fill="none">
        <path d="M170.244 32.9406C169.201 22.8029 166.941 11.6072 158.629 5.71632C152.183 1.14976 143.72 0.982351 135.819 0.989962C119.113 1.00518 102.408 1.02036 85.7015 1.03558C69.6348 1.0508 53.5681 1.06607 37.5015 1.08129C30.7886 1.08129 24.2661 0.56375 18.0327 3.46352C12.6746 5.9599 8.4886 10.7015 5.97699 15.9758C2.47596 23.3204 1.73771 31.6315 1.3191 39.7524C0.542789 54.5328 0.626515 69.359 1.56266 84.1242C2.24003 94.9089 3.9677 106.82 12.3017 113.693C19.6919 119.781 30.1189 120.078 39.6934 120.086C70.1067 120.109 100.52 120.131 130.933 120.162C134.83 120.162 138.902 120.093 142.875 119.66C150.699 118.815 158.15 116.577 163.173 110.785C168.242 104.948 169.544 96.8116 170.32 89.117C172.192 70.455 172.169 51.595 170.244 32.9406ZM68.1127 86.7499V34.402L113.451 60.576L68.1127 86.7499Z" fill="#3C3C3B"/>
        </svg>,
        link : "https://www.youtube.com/watch?v=rdIkAgsAtO8&t=2s"
    }]
   
    return <div className={`${Style.container} px-8 md:px-16 py-5`}>
        {<div className={`${Style.containerContent} `}>
            <div className={`${Style.containerFirst}`}>
                <div className="mb-1 pb-5 pt-2">
                    <Image width={150} height={100} src="/logo.png" alt="logo" />
                </div>
                <p className="pr-2">At INTELLECTRA,we empower businesses with innovative ICT solutions, combining expertise and technology to drive efficiency, innovation, and maximize ROI</p>
                <div className={`py-3`}>Learn more about At INTELLECTRA</div>
                <div>© 2025 by  <Link target="_blank" href={"https://arizglobal.com/"}>Ariz Global</Link></div>
            </div>
            <div className={`grid-cols-1 sm:grid grid-cols-3  ${Style.containerSecond}`}>
                <div className={`${Style.first} mb-3 sm:mb-0`}>
                    <h4 className="sm:mb-5">Our Company</h4>
                    <ul>{pages.map((e,idx)=><li key={`Pages_Footer_${e.name}_${idx}`} className="sm:mb-2"><Link href={e.link}>{e.name}</Link></li>)}</ul>

                </div>
                <div className={`${Style.second} mb-3 sm:mb-0`}>
                    <h4 className="sm:mb-5">Our Solution</h4>
                    <ul>{solutions.map((e,idx)=><li key={`Solutions_Footer_${e.name}_${idx}`} className="sm:mb-2"><Link href={e.link}>{e.name}</Link></li>)}</ul>

                </div>
                <div className={`${Style.third}`}>
                    <h4 className="sm:mb-5">Support</h4>
                    <ul>{support.map((e,idx)=><li key={`Support_Footer_${e.name}_${idx}`} className="sm:mb-2"><Link href={e.link}>{e.name}</Link></li>)}</ul>
                </div>
            </div>
            <div className={`${Style.containerThird} md:pb-5 `}>
                <div className="flex flex-col justify-between">
                    <p className="pb-3">Keeping you informed</p>
                    <button className="btn-dark">Subscribe</button>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="pb-3">Follow us</p>
                    <div className={`flex gap-8 py-2 md:py-0 ${Style.icons}`}>{icons.map((e,idx)=><div key={`Support_Footer_${e.name}_${idx}`} className="flex items-center justify-center">
                        <Link target="_blank" href={e.link}>{e.icon}</Link>
                    </div>)}</div>
                </div>
            </div>

        </div>}
        
    </div>
}
export default Footer