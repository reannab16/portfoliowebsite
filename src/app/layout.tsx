import "./globals.css";
import { Inter } from "next/font/google";
import { SideSocials } from "@/components/sidesocials";
import SideEmail from "@/components/sideemail";
import { SliderNav } from "@/components/slidernav";

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
        <SliderNav/>
        <SideEmail />
        <SideSocials />
        {children}
      </body>
    </html>
  );
}
