import Style from "./page.module.css"

type InfoProps = {
    icon : React.ReactNode,
    title : string,
    description : string ,
    keywords : string[],
    link : string
}

const CardServices =({icon,title,description,keywords,link}:InfoProps)=>{
  return <div className={`${Style.container} p-8`}>
        <div className="flex justify-center">
            <div className={`${Style.containerSvg} `}>
                {icon}
            </div> 
        </div>
        
        <h3>{title}</h3>
        <p className="py-3">{description}</p>
        <ul className="gap-2">
            {keywords.map((e,idx)=><li key={`Service_${e}_${idx}`}>{e}</li>)}
        </ul>
  </div>

}
export default CardServices 