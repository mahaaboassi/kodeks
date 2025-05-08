import DynamicPages from "@/components/supportPagesComponent/page"
import { termsAndConsitionData } from "@/data/data"

export const metadata = {
    title: "Terms & Conditions | Kodeks",
    description: "Review the terms and conditions governing the use of KODEKS services and website. Understand your rights, responsibilities, and our commitment to delivering reliable and secure digital solutions.",
  };

const TermsPage = ()=>{
    return <DynamicPages data={termsAndConsitionData} />
}
export default TermsPage