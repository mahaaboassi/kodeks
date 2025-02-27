import Style from "./page.module.css"

type HeaderProps = {
    title : string
} 
const Header = ({title}:HeaderProps)=>{
    return <div className={`${Style.container} py-10`}>
        <h2>{title}</h2>
    </div>

}
export default Header