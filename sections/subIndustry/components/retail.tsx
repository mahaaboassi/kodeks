import Style from "../page.module.css"

const Retail = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. INTELLECTRA provides.',
        children : [{
                        title : "Omnichannel Retail Platforms",
                        value: "We build integrated systems that unify physical and digital storefronts, enabling smooth, consistent interactions across web, mobile, and in-store touchpoints.",
                        icon: ""
                    },{
                        title : "Smart Inventory & Demand Forecasting",
                        value: "Our AI-driven tools analyze real-time data to optimize stock levels, predict demand shifts, and reduce overstock or stockouts.",
                        icon: ""
                    }, {
                        title : "Personalized Customer Engagement",
                        value: "From targeted promotions to intelligent product recommendations, we help retailers craft tailored experiences that increase conversion and loyalty.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `With insights into evolving MENA retail trends and consumer behavior, INTELLECTRA supports retailers in building adaptive, scalable digital ecosystems.
        Whether deploying localized e-commerce platforms, managing real-time customer data, or enabling digital in-store enhancements, we help retailers deliver standout experiences across channels.`,
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


export default Retail