import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import PrelineScript from "./components/PrelineScript";

const almarai = localFont({
  src: [
    {
      path: "./fonts/Almarai-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Almarai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Almarai-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Almarai-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-almarai",
});

export const metadata = {
  title: "ابو حســن | احسن طريقة تداومي بيها",
  description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
  openGraph: {
    title: 'ابو حســن | احسن طريقة تداومي بيها',
    description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
    url: 'https://nextjs.org',
    siteName: 'ابو حســن',
    images: [
      {
        url: './opengraph-image.jpg',
        width: 800,
        height: 600,
      },
      {
        url: './opengraph-image.jpg',
        width: 1800,
        height: 1600,
        alt: '"خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
