import Style from "../page.module.css"

const Energy = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. KODEKS provides.',
        children : [{
                        title : "Intelligent Infrastructure",
                        value: "We enable energy firms to digitize and automate legacy systems, improving reliability, reducing operational costs, and supporting smart energy distribution.",
                        icon: ""
                    },{
                        title : "Data-Driven Efficiency",
                        value: "Using IoT and predictive analytics, we help monitor energy usage in real time, detect anomalies, and optimize resource allocation.",
                        icon: ""
                    }, {
                        title : "Cloud & Sustainability Integration",
                        value: "Our cloud platforms support agile energy solutions that align with ESG goals, improve scalability, and reduce environmental impact.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `Our consultants bring a strong mix of technical expertise and regional insight to energy projects across the MENA region and beyond.
        Whether supporting smart grid implementation, optimizing renewables integration, or navigating regulatory reforms, KODEKS empowers energy companies to lead the future of clean, connected, and compliant operations.`,
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


export default Energy