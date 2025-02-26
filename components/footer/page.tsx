'use client'
import { useEffect, useState } from "react"
import Style from "./page.module.css"
const svg =<svg xmlns="http://www.w3.org/2000/svg" width="159" height="56" viewBox="0 0 329 56" fill="none">
<path d="M327.004 14.5625C323.879 8.1875 317.193 6.375 310.757 6.375C303.133 6.4375 294.759 9.9375 294.759 18.4375C294.759 27.6875 302.571 29.9375 311.007 30.9375C316.506 31.5 320.568 33.125 320.568 37C320.568 41.5 315.943 43.1875 311.069 43.1875C306.07 43.1875 301.258 41.1875 299.446 36.625L292.947 40C296.009 47.5625 302.508 50.1875 310.944 50.1875C320.13 50.1875 328.316 46.25 328.316 37C328.316 27.125 320.255 24.875 311.632 23.8125C306.695 23.25 302.446 22.1875 302.446 18.625C302.446 15.5625 305.195 13.125 311.007 13.125C315.506 13.125 319.38 15.375 320.817 17.75L327.004 14.5625ZM290.385 7.75H280.699L265.014 25.25V7.75H257.203V49.125H265.014V30.8125L282.324 49.125H291.947V48.625L272.013 27.75L290.385 7.9375V7.75ZM250.017 41.4375H226.771V32.125H249.142V24.875H226.771V15.375H250.017V7.8125H219.085V49.1875H250.017V41.4375ZM183.653 15.125H192.152C201.15 15.125 204.899 21.5625 205.087 28C205.274 34.75 201.525 41.5625 192.152 41.5625H183.653V15.125ZM192.152 7.75H175.904V49.125H192.152C206.649 49.125 213.023 38.5625 212.836 28.0625C212.648 17.875 206.337 7.75 192.152 7.75ZM148.346 14C158.095 14 161.969 21.8125 161.844 28.75C161.719 35.5625 158.095 42.875 148.346 42.875C138.598 42.875 134.911 35.625 134.786 28.8125C134.536 21.875 138.598 14 148.346 14ZM148.346 6.9375C134.036 6.9375 127.1 17.875 127.1 28.75C127.1 39.625 133.849 50.0625 148.346 50.0625C162.906 50.0625 169.405 39.375 169.53 28.6875C169.655 17.875 162.532 6.9375 148.346 6.9375ZM125.85 7.75H116.164L100.479 25.25V7.75H92.6683V49.125H100.479V30.8125L117.789 49.125H127.412V48.625L107.478 27.75L125.85 7.9375V7.75Z" fill="#0071CE"/>
<path d="M64.1106 55.5625H4.99548C2.55839 55.5625 0.621216 53.625 0.621216 51.1875C0.621216 48.75 2.55839 46.8125 4.99548 46.8125H64.1106C66.5476 46.8125 68.4848 48.75 68.4848 51.1875C68.4848 53.625 66.5476 55.5625 64.1106 55.5625Z" fill="#9EB4D7"/>
<path d="M50.2379 32.5H18.9307C16.4936 32.5 14.5564 30.5625 14.5564 28.125C14.5564 25.6875 16.4936 23.75 18.9307 23.75H50.2379C52.675 23.75 54.6122 25.6875 54.6122 28.125C54.5497 30.5625 52.6125 32.5 50.2379 32.5Z" fill="#5E8DC2"/>
<path d="M37.9899 9.5H31.1161C28.679 9.5 26.7418 7.5625 26.7418 5.125C26.7418 2.6875 28.679 0.75 31.1161 0.75H37.9899C40.427 0.75 42.3642 2.6875 42.3642 5.125C42.3642 7.5 40.427 9.5 37.9899 9.5Z" fill="#0071B1"/>
</svg>
const Footer = ()=>{
    const pages = [{
        name : "About Us",
        link : ""
    },{
        name : "Insights",
        link : ""
    },{
        name : "Solution",
        link : ""
    },{
        name : "Conatct Us",
        link : ""
    }]
    const solutions = [{
        name : "Augmented Reality (AR)",
        link : ""
    },{
        name : "Cybersecurity",
        link : ""
    },{
        name : "Data Center",
        link : ""
    },{
        name : "See More",
        link : ""
    }]
    const support = [{
        name : "Cookie Management Center",
        link : ""
    },{
        name : "FAQs",
        link : ""
    },{
        name : "Privacy Policy",
        link : ""
    },{
        name : "Terms & Conditions",
        link : ""
    }]
    const  icons = [{
        name : "linkedin",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" viewBox="0 0 151 149" fill="none">
        <path d="M5.72955 29.9378C2.20568 26.6651 0.44751 22.6161 0.44751 17.7983C0.44751 12.9806 2.20568 8.74898 5.72955 5.47628C9.25341 2.20357 13.7894 0.567261 19.353 0.567261C24.9166 0.567261 29.2701 2.20357 32.7864 5.47628C36.3102 8.74898 38.0684 12.8588 38.0684 17.7983C38.0684 22.7378 36.3102 26.6651 32.7864 29.9378C29.2625 33.2105 24.7872 34.8468 19.353 34.8468C13.9188 34.8468 9.25341 33.2105 5.72955 29.9378ZM35.1001 48.7064V148.996H3.41579V48.7064H35.1001Z" fill="#3C3C3B"/>
        <path d="M140.595 58.6082C147.498 66.1049 150.954 76.4026 150.954 89.5086V147.23H120.852V93.5805C120.852 86.9742 119.14 81.8368 115.715 78.1759C112.29 74.5151 107.686 72.6884 101.901 72.6884C96.117 72.6884 91.5123 74.5227 88.0874 78.1759C84.6625 81.8368 82.95 86.9742 82.95 93.5805V147.23H52.6737V48.4323H82.95V61.5384C86.0172 57.1698 90.15 53.722 95.3483 51.18C100.539 48.6455 106.384 47.3745 112.876 47.3745C124.445 47.3745 133.684 51.1266 140.588 58.6158L140.595 58.6082Z" fill="#3C3C3B"/>
        </svg>,
        link : ""
    },{
        name : "youtube",
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="" viewBox="0 0 172 121" fill="none">
        <path d="M170.244 32.9406C169.201 22.8029 166.941 11.6072 158.629 5.71632C152.183 1.14976 143.72 0.982351 135.819 0.989962C119.113 1.00518 102.408 1.02036 85.7015 1.03558C69.6348 1.0508 53.5681 1.06607 37.5015 1.08129C30.7886 1.08129 24.2661 0.56375 18.0327 3.46352C12.6746 5.9599 8.4886 10.7015 5.97699 15.9758C2.47596 23.3204 1.73771 31.6315 1.3191 39.7524C0.542789 54.5328 0.626515 69.359 1.56266 84.1242C2.24003 94.9089 3.9677 106.82 12.3017 113.693C19.6919 119.781 30.1189 120.078 39.6934 120.086C70.1067 120.109 100.52 120.131 130.933 120.162C134.83 120.162 138.902 120.093 142.875 119.66C150.699 118.815 158.15 116.577 163.173 110.785C168.242 104.948 169.544 96.8116 170.32 89.117C172.192 70.455 172.169 51.595 170.244 32.9406ZM68.1127 86.7499V34.402L113.451 60.576L68.1127 86.7499Z" fill="#3C3C3B"/>
        </svg>,
        link : ""
    }]
     const [windowWidth, setWindowWidth] = useState(0);
    
        useEffect(() => {
            if (typeof window !== "undefined") {
                setWindowWidth(window.innerWidth);
            }
        }, []);
    return <div className={`${Style.container} px-8 md:px-16 py-5`}>
        {windowWidth<1024?<div className={`${Style.containerContent}`}>
            <div className={`${Style.containerFirst}`}>
                <div className="mb-1">{svg}</div>
                <p className="pr-2"><strong>At KODEKS</strong>,we empower businesses with innovative ICT solutions, combining expertise and technology to drive efficiency, innovation, and maximize ROI</p>
                <div className={`py-3`}>Learn more about <strong>At KODEKS</strong></div>
                <div>© 2025 by Ariz Global</div>
            </div>
            
            <div className={`${Style.containerThird} `}>
                <div>
                    <p>Keeping you informed</p>
                    <button className="btn-dark">Subscriber</button>
                </div>
                <div>
                    <p>Follow us</p>
                    <div className={`flex gap-8 ${Style.icons}`}>{icons.map((e,idx)=><div key={`Support_Footer_${e.name}_${idx}`} className="flex items-center justify-center">{e.icon}</div>)}</div>
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-2 ${Style.containerSecond}`}>
                <div className={`${Style.first}`}>
                    <h4 className="mb-5">Our Company</h4>
                    <ul>{pages.map((e,idx)=><li key={`Pages_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>

                </div>
                <div className={`${Style.second}`}>
                    <h4 className="mb-5">Our Solution</h4>
                    <ul>{solutions.map((e,idx)=><li key={`Solutions_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>

                </div>
                <div className={`${Style.third}`}>
                    <h4 className="mb-5">Support</h4>
                    <ul>{support.map((e,idx)=><li key={`Support_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>
                </div>
            </div>
        </div>:<div className={`${Style.containerContent}`}>
            <div className={`${Style.containerFirst}`}>
                <div className="mb-1">{svg}</div>
                <p className="pr-2"><strong>At KODEKS</strong>,we empower businesses with innovative ICT solutions, combining expertise and technology to drive efficiency, innovation, and maximize ROI</p>
                <div className={`py-3`}>Learn more about <strong>At KODEKS</strong></div>
                <div>© 2025 by Ariz Global</div>
            </div>
            <div className={`grid-cols-1 md:grid grid-cols-3 gap-2 ${Style.containerSecond}`}>
                <div className={`${Style.first}`}>
                    <h4 className="mb-5">Our Company</h4>
                    <ul>{pages.map((e,idx)=><li key={`Pages_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>

                </div>
                <div className={`${Style.second}`}>
                    <h4 className="mb-5">Our Solution</h4>
                    <ul>{solutions.map((e,idx)=><li key={`Solutions_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>

                </div>
                <div className={`${Style.third}`}>
                    <h4 className="mb-5">Support</h4>
                    <ul>{support.map((e,idx)=><li key={`Support_Footer_${e.name}_${idx}`} className="mb-2">{e.name}</li>)}</ul>
                </div>
            </div>
            <div className={`${Style.containerThird} md:pb-5 `}>
                <div>
                    <p className="pb-3">Keeping you informed</p>
                    <button className="btn-dark">Subscriber</button>
                </div>
                <div>
                    <p className="pb-3">Follow us</p>
                    <div className={`flex gap-8 ${Style.icons}`}>{icons.map((e,idx)=><div key={`Support_Footer_${e.name}_${idx}`} className="flex items-center justify-center">{e.icon}</div>)}</div>
                </div>
            </div>

        </div>}
        
    </div>
}
export default Footer