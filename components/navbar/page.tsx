"use client"
import { useEffect, useState } from "react"
import Style from "./page.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image";



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
    return <div className={` ${scrolled?Style.containerScrolled:Style.container} py-3.5 px-8 md:px-16 `}>
        <div className="flex items-center">
          <Link href="/">
           <Image width={150} height={100} src="/logo.png" alt="logo" />
          </Link>
            
        </div>
        <div className="flex items-center">
           <div onClick={()=>setIsOpen(!isOpen)} className={`${Style.menuIconDiv} ${isOpen&& Style.open} md:hidden`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${isOpen&& Style.openMenu} `}>
                {data.map((e,idx)=><li key={`Navbar_${e.name}_${idx}`} onClick={()=>setIsOpen(false)} className={pathname === e.link ? Style.activeLink : ""} >
                  <Link  href={e.link} >  {e.name}</Link>
                </li>
                )}
            </ul>
        </div>
    </div>
}
export default Navbar