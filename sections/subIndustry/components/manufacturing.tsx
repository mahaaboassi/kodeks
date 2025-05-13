 import Style from "../page.module.css"

const Manufacturing = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. INTELLECTRA provides.',
        children : [{
                        title : "Smart Factory Automation",
                        value: "We implement IoT sensors, robotics, and automated systems that reduce downtime, improve precision, and enhance real-time production control.",
                        icon: ""
                    },{
                        title : "Predictive Insights & AI Optimization",
                        value: "Our AI-driven analytics tools help forecast demand, optimize inventory, and streamline production planning for maximum efficiency.",
                        icon: ""
                    }, {
                        title : "Connected Supply Chains",
                        value: "We digitize supply chain processes end-to-end, ensuring transparency, traceability, and agility through cloud-based and real-time technologies.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `With a strong grasp of both regional manufacturing environments and global industrial trends, INTELLECTRA tailors solutions that meet the unique operational and compliance needs of manufacturers across the MENA region and beyond.
        From plant automation to data-driven supply chain visibility, we help organizations become agile, resilient, and future-ready.`,
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


export default Manufacturing