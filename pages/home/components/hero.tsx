"use client"
import Style from "../page.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';

const HeroSection = ()=>{
    const info = [{
        id: 1,
        title : "Industry-Specific Expertise ",
        description : "We understand your sector’s unique challenges and deliver tailored solutions.",
        cta :"Learn More",
        className : "containerHero"
    },{
        id: 2,
        title : "Advanced Digital Technologies",
        description : "Cloud, AI, IoT, Cybersecurity, Intelligent Automation, and more.",
        cta :"Learn More",
         className : "containerHero1"
    },{
        id: 3,
        title : "Scalable & Future-Proof Solutions ",
        description : "Designed to grow with your business.",
        cta :"Learn More",
        className : "containerHero2"
    },{
        id: 4,
        title : "Proven Track Record",
        description : "Helping businesses worldwide accelerate transformation and maximize ROI.",
        cta :"Learn More",
        className : "containerHero3"
    }]
    return  <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={false}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[EffectFade,Navigation,  Autoplay]}
    className="mySwiper"
>
    {info.map((e,idx)=><SwiperSlide key={`PROMPTS_${e.title}_${idx}`}>
        <div >
            <div className={`${Style[e.className]} pt-20`}>
                <div className="grid grid-cols-2 ">
                    <div >
                        <div  className="flex flex-col justify-center pt-20 px-16">
                            <h1>{e.title}</h1>
                            <h2>{e.description}</h2>
                            <div className={`${Style.cta} py-5 `}>
                                {e.cta}
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.07996" stroke="#171717" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </SwiperSlide>)}
    
  
</Swiper> 
    
    
    
   
}
export default HeroSection