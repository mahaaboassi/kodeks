import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industry | Kodeks",
    description: "At KODEKS, we deliver globally recognized, technology-driven solutions that help businesses maximize their IT investments and business performance. Our expertise spans multiple industries, where we leverage cutting-edge digital solutions to drive innovation, optimize operations, and improve overall outcomes.",
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
