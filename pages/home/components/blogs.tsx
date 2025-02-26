import Image from "next/image"
import Style from "../page.module.css"
import Header from "@/components/headers/page"
const Blogs = ()=>{
    const data = [ {
        id: 1,
        title: "How AI is Revolutionizing Business Operations",
        description: "Artificial Intelligence is transforming industries by automating tasks, enhancing decision-making, and personalizing customer experiences. Learn how businesses are leveraging AI for growth and efficiency.",
        image: "/ai.jpg",
        date: "2025-02-25",
        author: "Kodeks admin",
        hashtag : "#AI"
    },
    {
        id: 2,
        title: "The Future of Cloud Computing: Trends to Watch",
        description: "Cloud computing is evolving rapidly, with trends like multi-cloud strategies, serverless computing, and AI-driven cloud services shaping the industry. Discover what the future holds for cloud technology.",
        image: "/cloud.jpg",
        date: "2025-02-25",
        author: "Kodeks admin",
        hashtag : "#Cloud Computing"
    },
    {
        id: 3,
        title: "Technology Services: Why Businesses Need Digital Transformation",
        description: "In today's competitive market, technology services play a crucial role in digital transformation. From cybersecurity to IT consulting, explore why businesses must adapt to modern technology solutions.",
        image: "/technologies.jpg",
        date: "2025-02-25",
        author: "Kodeks admin",
        hashtag : "#Technology Services"
    }]

    return <div className={`${Style.containerBlogs} px-8 md:px-16 py-10`}>
        <Header subTitle="Latest News" title="Stay Updated with Industry Trends" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2">
            
            {data.map((e,idx)=><div key={`Blogs_${e.title}_${idx}`} className={`${Style.containerCard}`}>
                <div className={`${Style.containerImage}`}>
                 <Image src={e.image} width={200} height={200} alt={e.title}/>   
                </div>
                
                <div className={`${Style.hashtag} mt-1`}> {e.hashtag}</div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                </div>)}

            
        </div>
    </div>

}

export default Blogs