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


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const name = slug.replace(/-/g, " ").replace(/%26/g, " & ").toLowerCase()
  return <SubSolution name={name} slug={slug} />
}