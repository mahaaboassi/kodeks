import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import HomePage from "@/pages/home/page";

import Image from "next/image";

export default function Home() {
  return (<div>
    <Navbar/>
      <HomePage/>
    <Footer/>
  </div>
  );
}
