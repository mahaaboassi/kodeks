import Style from "../page.module.css"

const ContactUs = ()=>{
    return <div className={`${Style.containerContactUs} py-20 flex flex-col justify-center items-center gap-5`}>
        <h5>How can we help?</h5>
        <div>
            <button className="btn-dark"> Conatct Us</button>
        </div>
    </div>
}

export default ContactUs