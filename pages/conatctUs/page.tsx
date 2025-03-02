import Hero from "@/components/hero/page"
import Style from "./page.module.css"

const ContactUs = ()=>{
    return<div className={`${Style.container} pb-16`}>
        <Hero title="Contact Us" description="How can we help?" link="/" pathFirst="Home" pathSecond="Contact Us" />
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            To submit a question or request, please fill out the form. We will respond as soon as possible.
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerContent} px-8 md:px-16`}>
            <form className="p-5 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label> Name :</label>
                        <input placeholder="Name" />
                    </div>
                    <div>
                        <label> Email :</label>
                        <input placeholder="Email" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label> Company :</label>
                        <input placeholder="Company" />
                    </div>
                    <div>
                        <label> Job Title :</label>
                        <input placeholder="Job Title" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    
                    <div>
                        <label> Country :</label>
                        <input placeholder="Country" />
                    </div>
                    <div>
                        <label> Phone :</label>
                        <input placeholder="Phone" />
                    </div>
                </div>
                <div>
                    <label> Message :</label>
                    <textarea placeholder="Message" />
                </div>
                <div>
                    <button className="btn-dark">Submit</button>
                </div>
            </form>
        </div>
    </div>
}
export default ContactUs