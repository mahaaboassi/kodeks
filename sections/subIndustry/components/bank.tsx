import Style from "../page.module.css"

const Bank = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. KODEKS provides.',
        children : [{
                        title : "Built-In Security",
                        value: "In an era of increasing digital threats, security is non-negotiable. KODEKS offers robust cybersecurity strategies tailored for the banking sector.",
                        icon: ""
                    },{
                        title : "Trusted Cloud Infrastructure",
                        value: "We provide end-to-end encryption and host your data on secure, enterprise-grade cloud infrastructure built for privacy, reliability, and scalability.",
                        icon: ""
                    }, {
                        title : "Real-Time Threat Detection",
                        value: "Our advanced monitoring tools detect anomalies and threats in real-time, helping prevent potential breaches before they occur.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : "We combine global insights with deep regional knowledge. Our consultants understand the unique challenges faced by banks in MENA and beyond. From Sharia-compliant banking solutions to cross-border regulatory challenges, KODEKS helps institutions stay agile, relevant, and competitive.",
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
                    data.children.map((ele,idx)=>(<div className={`${Style.firstSectionCard} w-full p-5 flex flex-col`}  key={`Security_And_Compliance_${idx}`}>
                        <h4 className="mb-2">{ele.title}</h4>
                        <p>{ele.value}</p>
                    </div>))
                }
            </div>
            
        </div>
    </div>)
}


export default Bank