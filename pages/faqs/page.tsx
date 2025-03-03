import Hero from "@/components/hero/page"
import Style from "./page.module.css"


type DataType = {
    title : string,
    children :{
        question : string,
        answer : string,
    }[]

}
type PropsType = {
    data : DataType
}
const FAQs = ({data}: PropsType) =>{
    return <div className={`${Style.container}`}>
        <Hero link="/" description="" pathFirst="Home" pathSecond={data.title} title={data.title} />
        <h1>{data.title}</h1>
        <div>
            {data.children.map((child,idx)=>(<div key={`FAQs_${data.title}_${child.question}_${idx}`}>
                <h2>{child.question}</h2>
                <p>{child.answer}</p>
            </div>))}
        </div>
    </div>

}
export default FAQs