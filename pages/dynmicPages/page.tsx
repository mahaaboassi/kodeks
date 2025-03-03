import Hero from "@/components/hero/page"
import Style from "./page.module.css"


type DataType = {
    title : string,
    lastUpdated : string,
    finalDes : string,
    children :{
        title : string,
        description : string,
        content : string[]
    }[]

}
type PropsType = {
    data : DataType
}
const DynamicPages = ({data}: PropsType) =>{
    return <div className={`${Style.container}`}>
        <Hero link="/" description="" pathFirst="Home" pathSecond={data.title} title={data.title} />
        <h1>{data.title}</h1>
        <div>
            {data.children.map((child,idx)=>(<div key={`children_${data.title}_${child.title}_${idx}`}>
                <h2>{child.title}</h2>
                <p>{child.description}</p>
                {child.content.length > 0 && <ul>
                    {child.content.map((ele,index)=>(<li key={`Content_${data.title}_${ele}_${index}`}>{ele}
                    </li>))}
                </ul>}
            </div>))}
        </div>
    </div>

}
export default DynamicPages