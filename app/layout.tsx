import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InfoHeader from "./Components/InfoHader/InfoHeader";
import Header from "./Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InfoHeader />
        <Header />
        {children}
      </body>
    </html>
  );
}
