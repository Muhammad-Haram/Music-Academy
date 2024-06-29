import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy",
  description: "Master the art of music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="./favicon.png" sizes="any" />
      <body className={inter.className}>
        <div className="relative flex items-center justify-center w-full">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}