"use client"
import { useEffect, useState } from "react"
import Style from "./page.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link"

const svg =<svg xmlns="http://www.w3.org/2000/svg" width="159" height="56" viewBox="0 0 329 56" fill="none">
<path d="M327.004 14.5625C323.879 8.1875 317.193 6.375 310.757 6.375C303.133 6.4375 294.759 9.9375 294.759 18.4375C294.759 27.6875 302.571 29.9375 311.007 30.9375C316.506 31.5 320.568 33.125 320.568 37C320.568 41.5 315.943 43.1875 311.069 43.1875C306.07 43.1875 301.258 41.1875 299.446 36.625L292.947 40C296.009 47.5625 302.508 50.1875 310.944 50.1875C320.13 50.1875 328.316 46.25 328.316 37C328.316 27.125 320.255 24.875 311.632 23.8125C306.695 23.25 302.446 22.1875 302.446 18.625C302.446 15.5625 305.195 13.125 311.007 13.125C315.506 13.125 319.38 15.375 320.817 17.75L327.004 14.5625ZM290.385 7.75H280.699L265.014 25.25V7.75H257.203V49.125H265.014V30.8125L282.324 49.125H291.947V48.625L272.013 27.75L290.385 7.9375V7.75ZM250.017 41.4375H226.771V32.125H249.142V24.875H226.771V15.375H250.017V7.8125H219.085V49.1875H250.017V41.4375ZM183.653 15.125H192.152C201.15 15.125 204.899 21.5625 205.087 28C205.274 34.75 201.525 41.5625 192.152 41.5625H183.653V15.125ZM192.152 7.75H175.904V49.125H192.152C206.649 49.125 213.023 38.5625 212.836 28.0625C212.648 17.875 206.337 7.75 192.152 7.75ZM148.346 14C158.095 14 161.969 21.8125 161.844 28.75C161.719 35.5625 158.095 42.875 148.346 42.875C138.598 42.875 134.911 35.625 134.786 28.8125C134.536 21.875 138.598 14 148.346 14ZM148.346 6.9375C134.036 6.9375 127.1 17.875 127.1 28.75C127.1 39.625 133.849 50.0625 148.346 50.0625C162.906 50.0625 169.405 39.375 169.53 28.6875C169.655 17.875 162.532 6.9375 148.346 6.9375ZM125.85 7.75H116.164L100.479 25.25V7.75H92.6683V49.125H100.479V30.8125L117.789 49.125H127.412V48.625L107.478 27.75L125.85 7.9375V7.75Z" fill="#0071CE"/>
<path d="M64.1106 55.5625H4.99548C2.55839 55.5625 0.621216 53.625 0.621216 51.1875C0.621216 48.75 2.55839 46.8125 4.99548 46.8125H64.1106C66.5476 46.8125 68.4848 48.75 68.4848 51.1875C68.4848 53.625 66.5476 55.5625 64.1106 55.5625Z" fill="#9EB4D7"/>
<path d="M50.2379 32.5H18.9307C16.4936 32.5 14.5564 30.5625 14.5564 28.125C14.5564 25.6875 16.4936 23.75 18.9307 23.75H50.2379C52.675 23.75 54.6122 25.6875 54.6122 28.125C54.5497 30.5625 52.6125 32.5 50.2379 32.5Z" fill="#5E8DC2"/>
<path d="M37.9899 9.5H31.1161C28.679 9.5 26.7418 7.5625 26.7418 5.125C26.7418 2.6875 28.679 0.75 31.1161 0.75H37.9899C40.427 0.75 42.3642 2.6875 42.3642 5.125C42.3642 7.5 40.427 9.5 37.9899 9.5Z" fill="#0071B1"/>
</svg>

const Navbar = ()=>{
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname = usePathname();
    const handleScroll = () => {
        if (window.scrollY > 100) { // Change 50 to the scroll position threshold
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const [isOpen , setIsOpen] = useState<boolean>(false)
      const data = [{
        name : "About Us ",
        link : "/aboutUs"
      },{
        name : "Solutions",
        link : "/aboutUs/solutions"
      },{
        name : "Insights",
        link : "/aboutUs/industry"
      },{
        name : "Contact Us",
        link : "/contactUs"
      }]
    return <div className={` ${scrolled?Style.containerScrolled:Style.container} px-8 md:px-16 `}>
        <div>
          <Link href="/">{svg}</Link>
            
        </div>
        <div className="flex items-center">
           <div onClick={()=>setIsOpen(!isOpen)} className={`${Style.menuIconDiv} ${isOpen&& Style.open} md:hidden`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${isOpen&& Style.openMenu} `}>
                {data.map((e,idx)=><Link key={`Navbar_${e.name}_${idx}`} href={e.link}>
                <li onClick={()=>setIsOpen(false)} className={pathname === e.link ? Style.activeLink : ""} >
                  {e.name}
                </li></Link>)}
            </ul>
        </div>
    </div>
}
export default Navbar