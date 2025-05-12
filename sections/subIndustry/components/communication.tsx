import Style from "../page.module.css"

const Communication = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. KODEKS provides.',
        children : [{
                        title : "Smart Network Transformation",
                        value: "We deliver AI-driven network optimization, predictive maintenance, and intelligent traffic management to improve reliability and reduce downtime.",
                        icon: ""
                    },{
                        title : "Cloud-Powered Agility",
                        value: "Our scalable cloud solutions support rapid deployment, seamless integration, and high-performance delivery across communication services.",
                        icon: ""
                    }, {
                        title : "Customer-Centric Innovation",
                        value: "From personalized digital platforms to advanced analytics, we help telecom companies enhance user experience and increase customer retention.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `With a deep understanding of the MENA region and global communications trends, our experts help providers navigate market shifts, customer demands, and regulatory frameworks.
From optimizing service delivery to managing cross-border data requirements, KODEKS ensures your operations are agile, compliant, and competitive.`,
        // subTitle : "Our experience",
        // children : [{
        //     value : "",
        //     number : "15"
        // }]
    }
    return (<div className={`${Style.bankContainer} `}>
        <div className={`${Style.secondSection} text-center px-8 md:px-16 py-16`}>
            <p>{data_2.title}</p>
        </div>
        {/* Case Study */}
        <div className="px-8 md:px-16 py-16">
            <div className={`${Style.firstSection} justify-center flex gap-5 `}>
                {
                    data.children.map((ele,idx)=>(<div className={`${Style.firstSectionCard} w-full p-5 flex flex-col `}  key={`Security_And_Compliance_${idx}`}>
                        <h4 className="mb-2">{ele.title}</h4>
                        <p>{ele.value}</p>
                    </div>))
                }
            </div>
            
        </div>
    </div>)
}


export default Communication