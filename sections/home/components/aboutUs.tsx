"use client"
import Header from "@/components/headers/page"
import Style from "../page.module.css"
import { useState } from "react";
const AboutUS = () => {
    const [isPlaying, setIsPlaying] = useState(false);
   
    const handleClick = ()=>{
        setIsPlaying(true)
    }
    return<div className={`${Style.containerAboutUs} py-12 `}>
        <Header title="Empowering Businesses with Technology"  />
       
         <div className={`${Style.videoWrapper} flex justify-center`}>
            {!isPlaying ? (
                <div className={Style.thumbnail} onClick={handleClick}>
                <img src="/video.png" alt="Video Cover" className={Style.coverImage} />
                <button className={Style.playButton}>▶</button>
                </div>
            ) : (
                <div className={`${Style.videoPopup}`}>
                    <iframe id="video-frame" width="660" height="415" src="https://www.youtube.com/embed/rdIkAgsAtO8?si=vwiygo0CcJvQ12m7"
                     title="YouTube video player"
                     allow="autoplay; encrypted-media"
                     allowFullScreen ></iframe>
                </div> 
            )}
            </div>
    </div>
}

export default AboutUS