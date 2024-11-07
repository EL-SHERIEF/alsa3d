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
  title: "ابو حســن | توصيل طالبات, توصيل موظفات بكل امان",
  description: "خدمة توصيل الطالبات وتوصيل الموظفات الأعلى أمانًا في المملكة, توصيل طالبات كلية التقنية وتوصيل الكليات في الرياض وخارج الرياض#حضورك_مهمتنا",
  openGraph: {
    title: 'ابو حســن | احسن طريقة تداومي بيها',
    description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
     keywords: "توصيل كلية التقنية, توصيل كلية التقنية بالرياض, توصيل كلية التقنية والكلية الرقمية بالرياض",
    url: 'https://abohassan.vercel.app/',
    siteName: 'ابو حســن',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 200,
        height: 150,
        alt: "خدمة التوصيل الموسمي الأعلى أمانًا",
      },
      {
        url: '/opengraph-image.jpg',
        width: 800,
        height: 600,
        alt: "خدمة التوصيل الموسمي الأعلى أمانًا",
      },
      {
        url: '/opengraph-image.jpg',
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
