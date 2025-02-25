import Style from "./page.module.css"

type HeaderProps = {
    title : string,
    subTitle : string
} 
const Header = ({title,subTitle}:HeaderProps)=>{
    return <div className={`${Style.container} py-10`}>
        <h3>{subTitle}</h3>
        <h2>{title}</h2>
    </div>

}
export default Header