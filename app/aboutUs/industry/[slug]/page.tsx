

// // ✅ Correctly typed dynamic metadata function
// export function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Metadata {
//   const name = decodeURIComponent(params.slug.replace(/-/g, " ").replace(/%26/g, " & ").toLowerCase());
//   return {
//     title: `${name} | Industry | INTELLECTRA`,
//     description: `Explore digital solutions and insights for the ${name} sub-industry with INTELLECTRA.`,
//   };
// }


import SubIndustry from "@/sections/subIndustry/page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const name = slug.replace(/%26/g, "&").toLowerCase()
  return <SubIndustry name={name} slug={slug} />
}