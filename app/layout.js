import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";
import Head from 'next/head';
import Footer from "./components/Footer";
import WaBtn from "./components/shared/whatsappbtn";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
const almarai = localFont({
  src: [
    { path: "./fonts/Almarai-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Almarai-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Almarai-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Almarai-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-almarai",
});

export default function RootLayout({ children }) {
  

  return (
    <html lang="ar" dir="rtl">
     <head>
            <link rel="alternate" hrefLang="ar" href="https://abohassan.vercel.app/" />
            <link rel="alternate" hrefLang="en" href="https://abohassan.vercel.app/" />
          </head>
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        <GoogleTagManager gtmId="AW-16770249218" />
        {children}
        <WaBtn link={'https://wa.me/966594740105'}/>
        <Footer />
        <PrelineScript />
        <Analytics />
      </body>
    </html>
  );
}
