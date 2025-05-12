import { Metadata } from "next";
import SubSolution from "@/sections/subSolution/page";

// ✅ Correct metadata function
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const name = params.slug
//     .replace(/-/g, " ")
//     .replace(/%26/g, " & ")
//     .toLowerCase();

//   return {
//     title: `${name} | Solutions | KODEKS`,
//     description: `Explore digital solutions and insights for the ${name} sub-solution with KODEKS.`,
//   };
// }

// ✅ Correct page function
export default function SubPages({ params }: { params: { slug: string } }) {
  const name = params.slug.replace(/%26/g, "&").toLowerCase();
  return <SubSolution name={name} slug={params.slug} />;
}