import CardServices from "@/components/card/page"
import Style from "../page.module.css"

const Services = ()=>{
    const data = [{
        icon: <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 114.1 122.88"><title>bulb</title><path className="cls-1" d="M75.84,27.1a35.68,35.68,0,0,1,8.61,7.09,32.45,32.45,0,0,1,5.76,9.26h0a36.84,36.84,0,0,1,1.85,6,34.64,34.64,0,0,1,.24,14,38.69,38.69,0,0,1-2.15,7.32l-.12.25c-2.06,5-5.59,9.86-9,14.66-1.75,2.42-3.48,4.82-4.94,7.15A4.69,4.69,0,0,1,71.73,95l-27.56,4.1A4.7,4.7,0,0,1,39,95.69a40.19,40.19,0,0,0-2.54-5.82,24.85,24.85,0,0,0-3-4.49c-1.43-1.63-2.88-3.29-4.29-5.2A40.42,40.42,0,0,1,25,73.24h0a41.08,41.08,0,0,1-2.81-8,35.84,35.84,0,0,1-.95-8.45v0A35.39,35.39,0,0,1,22.35,48a41.69,41.69,0,0,1,3.42-8.85l.2-.35a35.55,35.55,0,0,1,7.13-8.63,33.72,33.72,0,0,1,9.46-5.83l.28-.1a35.41,35.41,0,0,1,8-2.14,37.78,37.78,0,0,1,8.77-.2,39.14,39.14,0,0,1,8.4,1.71,38.44,38.44,0,0,1,7.79,3.49Zm-4,87.26a17.37,17.37,0,0,1-6.28,6.29,16.46,16.46,0,0,1-7.2,2.2A14.87,14.87,0,0,1,51,121.4a15.1,15.1,0,0,1-4.39-3.27l25.29-3.77Zm2.41-14.15,0,1.65,0,.58a22,22,0,0,1,0,3.25l-.49,2.39-30.64,4.56-.54-1.23-1.19-4.9,0-1.42,32.79-4.88ZM56.34,3.77A3.84,3.84,0,0,1,60.23,0h0l.27,0A3.84,3.84,0,0,1,64,3.89h0a1.27,1.27,0,0,1,0,.2l-.21,8.21h0a2.11,2.11,0,0,1,0,.26,3.84,3.84,0,0,1-3.87,3.54h0l-.27,0a3.84,3.84,0,0,1-3.53-3.88h0a1.09,1.09,0,0,1,0-.19l.2-8.25ZM14,18.15a3.84,3.84,0,0,1,2.47-6.66,3.83,3.83,0,0,1,2.76,1l6.16,5.73a3.91,3.91,0,0,1,1.22,2.68,3.82,3.82,0,0,1-1,2.76,3.86,3.86,0,0,1-2.67,1.22,3.8,3.8,0,0,1-2.76-1L14,18.15ZM3.92,60.48A3.86,3.86,0,0,1,0,56.75a3.84,3.84,0,0,1,3.73-4l8.41-.28a3.84,3.84,0,0,1,4,3.72v.06h0v.14a3.84,3.84,0,0,1-3.73,3.77h-.15l-8.3.27Zm106-11.92H110a3.84,3.84,0,0,1,2.66.86,3.81,3.81,0,0,1,1.4,2.59v0a.49.49,0,0,1,0,.13,3.84,3.84,0,0,1-3.44,4.06l-8.37.89a3.83,3.83,0,0,1-2.81-.85,3.84,3.84,0,0,1,2-6.8c2.79-.31,5.6-.63,8.4-.9ZM93.33,15.09A3.83,3.83,0,0,1,98.65,14h0a3.73,3.73,0,0,1,1.63,2.44,3.84,3.84,0,0,1-.58,2.88l-4.68,7A3.8,3.8,0,0,1,92.58,28a3.88,3.88,0,0,1-2.88-.57A3.92,3.92,0,0,1,88.06,25a3.84,3.84,0,0,1,.58-2.88l4.69-7ZM38.23,80.87A42.19,42.19,0,0,1,31,70.56,31.2,31.2,0,0,1,27.89,57,31.7,31.7,0,0,1,31.7,42.56a.47.47,0,0,0,.05-.1h0a27.5,27.5,0,0,1,13.4-11.71,29.65,29.65,0,0,1,13.93-2A32.09,32.09,0,0,1,72.39,33,27.43,27.43,0,0,1,84,46.2,28.85,28.85,0,0,1,84,68.45C81.31,75,75.15,82,71.11,88.4a1.67,1.67,0,0,0-.67,0L44.36,92.25a35,35,0,0,0-6.13-11.38Z"/></svg>, 
        title: "Insights",
        description: "At KODEKS, we deliver globally recognized, technology-driven solutions that help businesses maximize their IT investments and business performance. Our expertise spans multiple industries, where we leverage cutting-edge digital solutions to drive innovation, optimize operations, and improve overall outcomes.",
        keywords: [  {
                label: "Banking",
                value: "banking",
                link: "/aboutUs/industry/banking"
                },
                {
                label: "Communications",
                value: "communications",
                link: "/aboutUs/industry/communications"
                },
                {
                label: "Energy",
                value: "energy",
                link: "/aboutUs/industry/energy"
                },
                {
                label: "Government",
                value: "government",
                link: "/aboutUs/industry/government"
                },
                {
                label: "Healthcare",
                value: "healthcare",
                link: "/aboutUs/industry/healthcare"
                },
                {
                label: "Manufacturing",
                value: "manufacturing",
                link: "/aboutUs/industry/manufacturing"
                },
                {
                label: "Retail",
                value: "retail",
                link: "/aboutUs/industry/retail"
                },
                {
                label: "Transportation",
                value: "transportation",
                link: "/aboutUs/industry/transportation-&-logistics"
                }],
        link: "/aboutUs/industry"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 112.43"><g><path className="st0" d="M29.96,111.88c5.94,0,10.77-4.32,10.77-9.64c0-1.9-0.62-3.67-1.69-5.17l0.29,0c-4.73-5.17-4.23-9.4,0.78-10.88 h16.57c1.87,0,3.4-1.53,3.4-3.4V68.08c1.16-10.04,5.45-7.06,10.5-3.95c12.2,7.51,20.31-10.28,10.45-16.37 c-7.74-4.78-11.09,3.44-16.76,2.59c-2.19-0.33-3.71-2.7-4.19-6.3V29.51c0-1.87-1.53-3.4-3.4-3.4l-14.51,0 c-6.87-0.87-8.17-5.49-2.85-11.3h-0.29c1.07-1.5,1.69-3.27,1.69-5.17C40.73,4.32,35.91,0,29.96,0C24.02,0,19.2,4.32,19.2,9.64 c0,1.9,0.62,3.67,1.69,5.17l-0.07,0c5.32,5.81,4.03,10.44-2.85,11.3H3.4c-1.87,0-3.4,1.53-3.4,3.4v15.16 c1.09,6.24,5.59,7.26,11.19,2.13v0.07c1.5-1.07,3.27-1.69,5.17-1.69c5.32,0,9.64,4.82,9.64,10.76c0,5.94-4.32,10.76-9.64,10.76 c-1.9,0-3.67-0.62-5.17-1.69v0.29c-5.6-5.13-10.1-4.1-11.19,2.14V82.8c0,1.87,1.53,3.4,3.4,3.4l16.63,0 c5.01,1.48,5.52,5.71,0.78,10.88h0.07c-1.06,1.5-1.69,3.27-1.69,5.17C19.2,107.57,24.02,111.89,29.96,111.88L29.96,111.88 L29.96,111.88z M92.92,112.43H92.9c-5.94,0-10.77-4.32-10.77-9.64c0-1.9,0.62-3.67,1.69-5.17h-0.07c4.73-5.17,4.23-9.4-0.78-10.88 l-16.63,0c-1.87,0-3.4-1.53-3.4-3.4V68.01c0.8-2.32,1.82-3.14,3.02-3.17c0.55-0.01,1.13,0.14,1.75,0.4c1.74,0.72,3.78,2.23,6,3.09 c8.56,3.3,15.91-5.03,15.42-13.59c-0.11-1.91-0.88-3.79-2.02-5.53c-4.37-6.68-10.84-7.31-17.08-3.5c-3.18,1.95-5.71,3.42-7.16-1.17 l0.08-14.49c0.01-1.87,1.53-3.4,3.4-3.4l14.56,0c6.87-0.87,8.17-5.49,2.85-11.3h0.07c-1.07-1.5-1.69-3.27-1.69-5.17 c0-5.32,4.82-9.64,10.77-9.64l0.02,0c5.94,0,10.77,4.32,10.77,9.64c0,1.9-0.62,3.67-1.69,5.17h0.07 c-5.32,5.81-4.03,10.44,2.85,11.3h14.56c1.87,0,3.4,1.53,3.4,3.4v15.16c-1.09,6.24-5.59,7.26-11.19,2.13v0.07 c-1.5-1.07-3.27-1.69-5.17-1.69c-5.32,0-9.64,4.82-9.64,10.76c0,5.94,4.32,10.77,9.64,10.77c1.9,0,3.67-0.62,5.17-1.69v0.29 c5.61-5.13,10.1-4.1,11.19,2.14v15.33c0,1.87-1.53,3.4-3.4,3.4l-16.63,0c-5.01,1.48-5.51,5.71-0.78,10.88H102 c1.07,1.5,1.69,3.27,1.69,5.17C103.68,108.11,98.86,112.43,92.92,112.43L92.92,112.43L92.92,112.43z"/></g></svg>, 
        title: "Solutions",
        description: "Digital transformation is essential in today’s world. At KODEKS, we help businesses adapt, secure, and scale with AI-driven ICT solutions. Our services enhance agility, strengthen cybersecurity, and optimize workflows. Empower your growth with innovation and efficiency.",
        keywords: [  {
                    label: "AI",
                    value: "ai",
                    link: "/aboutUs/solutions/artificial-intelligence-(ai)"
                },
                {
                    label: "Augmented Reality",
                    value: "augmented-reality",
                    link: "/aboutUs/solutions/augmented-reality-(ar)"
                },
                {
                    label: "Cloud & Hybrid IT",
                    value: "cloud-hybrid-it",
                    link: "/aboutUs/solutions/cloud-&-hybrid-it"
                },
                {
                    label: "Cybersecurity",
                    value: "cybersecurity",
                    link: "/aboutUs/solutions/cybersecurity"
                },
                {
                    label: "Data Center",
                    value: "data-center",
                    link: "/aboutUs/solutions/data-center"
                },
                {
                    label: "Digital Transformation",
                    value: "digital-transformation",
                    link: "/aboutUs/solutions/digital-transformation"
                },
                {
                    label: "IoT",
                    value: "iot",
                    link: "/aboutUs/solutions/internet-of-things-(iot)"
                },
                {
                    label: "Infrastructure",
                    value: "infrastructure",
                    link: "/aboutUs/solutions/infrastructure"
                },
                {
                    label: "Intelligent Automation",
                    value: "intelligent-automation",
                    link: "/aboutUs/solutions/intelligent-automation"
                },
                {
                    label: "Workplace Modernization",
                    value: "workplace-modernization",
                    link: "/aboutUs/solutions/workplace-modernization"
                }],
        link: "/aboutUs/solutions"
    }]
    return <div className={`${Style.containerServices} py-10 `}>
        
        <div className={`${Style.contentServices} grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-5 px-8 md:px-16`}>
          {data.map((e,idx)=>(<div className="flex justify-center" key={`Services_Section_${e.title}_${idx}`}>
            <CardServices link={e.link} icon={e.icon} keywords={e.keywords} title={e.title} description={e.description} />
            </div>))}
        </div>
        
        
    </div>
}
export default Services