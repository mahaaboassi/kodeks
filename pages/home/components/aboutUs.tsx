
import Header from "@/components/headers/page"
import Style from "../page.module.css"
const AboutUS = () => {
    return<div className={`${Style.containerAboutUs} py-12 `}>
        <Header title="Empowering Businesses with Technology" subTitle="Who We are" />
        <div className={`${Style.video} px-8 md:px-16 py`}>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/oV74Najm6Nc?si=jPDqgtVVri6MwUiA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>  */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rdIkAgsAtO8?si=vwiygo0CcJvQ12m7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe> 
        </div>
        {/* <div className={`${Style.left}`}>

        </div>
        */}
    </div>
}

export default AboutUS