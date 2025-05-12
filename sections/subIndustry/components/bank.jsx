import Style from "../page.module.css"

const Bank = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. KODEKS provides.',
        children : [{
                        value: "We provide end-to-end encryption and host your data securely on cloud infrastructure built to meet enterprise-grade privacy and reliability standards.",
                        icon: ""
                    }, {
                        value: "Our advanced monitoring tools enable real-time detection of anomalies and threats, helping prevent potential breaches before they impact your operations.",
                        icon: ""
                    }, {
                        value: "We ensure strict compliance with ISO 27001, GDPR, and local banking regulations through proactive security protocols and continuous risk assessments.",
                        icon: ""
                    }]
        }
    const data_2 = "We combine global insights with deep regional knowledge. Our consultants understand the unique challenges faced by banks in MENA and beyond. From Sharia-compliant banking solutions to cross-border regulatory challenges, KODEKS helps institutions stay agile, relevant, and competitive."
    return (<div className={`${Style.bankContainer} `}>
        <div className={``}>
            <p>{data_2}</p>
        </div>
        {/* Case Study */}
        <div className="px-8 md:px-16">
            <h3 className="pb-10">{data.title}</h3>
            <div className={`${Style.firstSection} flex gap-5 `}>
                {
                    data.children.map((ele,idx)=>(<div className={`${Style.firstSectionCard} w-full p-5 flex items-center justify-center`}  key={`Security_And_Compliance_${idx}`}>
                        {ele.value}
                    </div>))
                }
            </div>
            
        </div>
    </div>)
}


export default Bank