import Header from "@/components/Header";
import "../globals.css";

import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
