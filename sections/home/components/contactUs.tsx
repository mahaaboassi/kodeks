"use client"
import { useRouter } from "next/navigation"
import Style from "../page.module.css"

const ContactUs = ()=>{
    const router = useRouter()
    return <div className={`${Style.containerContactUs} py-20 flex flex-col justify-center items-center gap-5`}>
        <h5>How can we help?</h5>
        <div>
            <button onClick={()=>router.push("/contactUs")} className="btn-light"> Conatct Us</button>
        </div>
    </div>
}

export default ContactUs