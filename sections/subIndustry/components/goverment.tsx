import Style from "../page.module.css"

const Government = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. KODEKS provides.',
        children : [{
                        title : "Smart Public Infrastructure",
                        value: "We enable digital upgrades across government systems—automating workflows, digitizing records, and ensuring service continuity at scale.",
                        icon: ""
                    },{
                        title : "Citizen-Centric Platforms",
                        value: "Our solutions support mobile-first, multilingual public service portals that improve engagement, accessibility, and satisfaction.",
                        icon: ""
                    }, {
                        title : "Secure & Compliant Ecosystems",
                        value: "We implement advanced cybersecurity protocols and compliance frameworks to protect sensitive government data and uphold public trust.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `With a deep understanding of public sector challenges in the MENA region and beyond, KODEKS delivers tailored digital strategies that address operational gaps, security mandates, and policy reforms.
        We help governments achieve transparency, service delivery excellence, and greater digital accessibility—ensuring no citizen is left behind.`,
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


export default Government