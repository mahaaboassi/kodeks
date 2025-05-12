import { FAQsData } from "@/data/data"
import Style from "./page.module.css"
import Hero from "@/components/hero/page"


const FAQs = () =>{
    return <div className={`${Style.container}`}>
        <Hero description="" pathFirst="Home" link="/" pathSecond="FAQs" title="FAQs" />
        <div className={`px-8 md:px-16 py-5`}>
            {FAQsData.children.map((child,idx)=>(<div className="pb-5" key={`FAQs_${child.question}_${idx}`}>
                <h2 className="pb-1">{child.question}</h2>
                <p>{child.answer}</p>
            </div>))}
        </div>
    </div>

}
export default FAQs