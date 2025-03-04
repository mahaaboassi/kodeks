import Hero from "../hero/page"
import Style from "./page.module.css"
type DataType = {
    title  : string,
    lastUpdated : string,
    finalDes : string,
    children :{
        title? : string,
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
        <div className={`${Style.content} px-8 md:px-16 py-5 `}>
            {data.children.map((child,idx)=>(<div className="pb-5" key={`children_${child.title}_${idx}`}>
                <h2 className="pb-1">{child.title}</h2>
                <p>{child.description}</p>
                {child.content.length > 0 && <ul>
                    {child.content.map((ele,index)=>(<li key={`Content_${ele}_${index}`}>{ele}
                    </li>))}
                </ul>}
            </div>))}
        </div>
    </div>

}
export default DynamicPages