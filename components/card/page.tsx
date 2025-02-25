import Style from "./page.module.css"

type InfoProps = {
    icon : React.ReactNode,
    title : string,
    description : string ,
    keywords : string[],
    // link : string
}

const CardServices =({icon,title,description,keywords}:InfoProps)=>{
  return <div className={`${Style.container} p-5`}>
        <div className="flex gap-2">
            <div  className={`${Style.containerSvg} `}>
                {icon}
            </div> 
            <h3 className="flex items-center">{title}</h3>
        </div>
        
        
        <p className="py-3">{description}</p>
        <ul className="gap-2">
            {keywords.map((e,idx)=><li key={`Service_${e}_${idx}`}>{e}</li>)}
        </ul>
        <div className={` pt-5`}>
            <button  className="btn-dark">learn more</button>
        </div>
  </div>

}
export default CardServices 