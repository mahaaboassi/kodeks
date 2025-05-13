import DynamicPages from "@/components/supportPagesComponent/page"
import { privacyPolicy } from "@/data/data"


export const metadata = {
    title: "Privacy Policy | INTELLECTRA",
    description: "Learn how INTELLECTRA collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to data security, transparency, and user trust in all our digital solutions and services.",
  };

const PrivacyPage = ()=>{
    return <DynamicPages data={privacyPolicy} />
}
export default PrivacyPage