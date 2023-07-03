import "./globals.css";
import { Inter } from "next/font/google";
import { SideSocials } from "@/components/sidesocials";
import SideEmail from "@/components/sideemail";
import { SliderNav } from "@/components/slidernav";
import PopUp from "@/components/popup";
import { MobileNav } from "@/components/mobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reanna Bakshani",
  description: "Portfolio of Reanna Bakshani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainContainer w-full h-full">
          <SliderNav />
          <SideEmail />
          <SideSocials />
          <MobileNav/>
          
        {children}
        </div>
      {/* <body className={`${inter.className} blurred`}> */}
      </body>
    </html>
  );
}
