import ContactUs from "@/pages/home/components/contactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kodeks",
  description: "At KODEKS, we empower businesses with cutting-edge Information & Communication Technologies (ICT) solutions, blending human expertise with the limitless possibilities of technology. Our focus is on delivering results-driven digital transformation that enhances operational efficiency, drives innovation, and maximizes return on investment (ROI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div>
    {children}
    <ContactUs/>
    </div>
        
  );
}
