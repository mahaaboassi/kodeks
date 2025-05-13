import Style from "../page.module.css"

const Healthcare = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. INTELLECTRA provides.',
        children : [{
                        title : "Smart Patient Management",
                        value: "We automate patient data systems and appointment workflows, reducing manual errors and freeing up medical staff to focus on care delivery.",
                        icon: ""
                    },{
                        title : "AI-Driven Diagnostics & Insights",
                        value: "Our AI tools assist in faster, more accurate diagnostics and predictive analytics, supporting proactive treatment and clinical decision-making.",
                        icon: ""
                    }, {
                        title : "Secure Cloud Health Infrastructure",
                        value: "We provide HIPAA-compliant, cloud-based platforms that ensure data privacy, system scalability, and high availability for mission-critical healthcare operations.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `With experience supporting healthcare systems in the MENA region and internationally, INTELLECTRA understands the balance between innovation, compliance, and patient trust.
        We help institutions modernize securely and responsibly—whether implementing telehealth, managing electronic health records, or aligning with local data privacy laws—to support equitable and accessible care.`,
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


export default Healthcare