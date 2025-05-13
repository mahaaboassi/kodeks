import Style from "../page.module.css"

const Transportation = ()=>{
    const data = {
        title : 'In an era of increasing digital threats, security is non-negotiable. INTELLECTRA provides.',
        children : [{
                        title : "Real-Time Fleet & Cargo Tracking",
                        value: "We provide IoT-enabled tracking systems that deliver up-to-the-minute insights into vehicle locations, cargo status, and delivery timelines.",
                        icon: ""
                    },{
                        title : "AI-Optimized Route Planning",
                        value: "Our intelligent routing engines use traffic, weather, and historical data to cut delivery times, reduce fuel consumption, and improve customer satisfaction.",
                        icon: ""
                    }, {
                        title : "Cloud-Based Logistics Platforms",
                        value: "From warehouse coordination to shipment scheduling, our secure, scalable platforms centralize operations and boost logistics team productivity.",
                        icon: ""
                    }, ]
        }
    const data_2 = {
        title : `Understanding the unique challenges of MENA logistics—from regulatory hurdles to infrastructure gaps—INTELLECTRA delivers tailored digital solutions that combine local know-how with global best practices.
            We help transportation providers modernize efficiently, reduce emissions, and ensure compliance with both international and regional transportation standards.`,
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


export default Transportation