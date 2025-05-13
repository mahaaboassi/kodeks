import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | Kodeks",
    description: "At KODEKS, we empower businesses to adapt, accelerate, and achieve their goals with cutting-edge ICT solutions. As your trusted technology partner, we provide tailored digital strategies, technical expertise, and scalable solutions to optimize business performance. Our approach ensures that complex systems, architectures, and mission-critical transformations are seamlessly integrated to maximize efficiency and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div>
    {children}
    </div>
        
  );
}

