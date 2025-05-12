import { Metadata } from "next";
import SubIndustry from "@/sections/subIndustry/page"  
import { FC } from "react";

interface SubPagesProps {
  params: { slug: string };
}

// ✅ Dynamic metadata function
export const generateMetadata = ({ params }: SubPagesProps): Metadata => {
  const name = params.slug.replace(/-/g, " ")     
    .replace(/%26/g, " & ") 
    .toLowerCase();
  return {
    title: `${name} | Industry | Kodeks`,
    description: `Explore digital solutions and insights for the ${name} sub-industry with KODEKS.`,
  };
};

// ✅ Page component
const SubPages: FC<SubPagesProps> = ({ params }) => {
  const name = params.slug.replace(/%26/g, "&") 
  .toLowerCase();
  return (<SubIndustry name={name} slug={params.slug} />);
};

export default SubPages;