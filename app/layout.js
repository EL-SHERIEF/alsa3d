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
  referrer: 'origin-when-cross-origin',
  keywords: [
    'خدمة توصيل طالبات بالرياض',
    'توصيل طالبات في حي طويق',
    'توصيل طالبات حي العوالي بالرياض',
    'توصيل طالبات كلية التقنية في حي الموسى',
    'توصيل طالبات الكلية الرقمية في الرياض',
    'توصيل الطالبات غرب الرياض',
    'توصيل الطالبات في حي الغروب',
    'خدمة توصيل طالبات حي نجم الدين',
    'توصيل موظفات غرب الرياض',
    'توصيل موظفات حي الموسى بالرياض',
    'توصيل الطالبات إلى كلية التقنية',
    'توصيل الطالبات والموظفات في الرياض',
    'خدمة توصيل في حي طويق بالرياض',
    'توصيل آمن لطالبات الرياض',
    'توصيل حي العوالي لطالبات الكلية',
    'توصيل طالبات وموظفات حي الغروب',
    'توصيل مريح لطالبات حي نجم الدين',
    'توصيل حي العوالي للموظفات',
    'توصيل حي الموسى لطالبات الكلية التقنية',
    'توصيل حي الدخل المحدود للطالبات',
    'توصيل طالبات حي الموسى',
    'توصيل طالبات التقنية غرب الرياض',
    'خدمة توصيل الطالبات إلى كلية المملكة',
    'توصيل حي العوالي بالرياض',
    'توصيل حي الدخل المحدود غرب الرياض',
    'توصيل آمن لطالبات حي نجم الدين',
    'توصيل مريح لطالبات المملكة',
    'توصيل للطالبات في حي الموسى',
    'توصيل الطالبات بالرياض للكلية',
    'خدمة توصيل الطالبات والموظفات غرب الرياض',
    'توصيل حي طويق للطالبات والموظفات',
    'توصيل كلية التقنية غرب الرياض',
    'توصيل الطالبات في حي الموسى للكلية التقنية',
    'خدمة توصيل للطالبات والموظفات في الرياض',
    'توصيل الطالبات إلى كلية التقنية غرب الرياض',
    'توصيل موظفات حي العوالي',
    'توصيل طالبات حي الدخل المحدود',
    'خدمة توصيل حي الغروب',
    'توصيل حي الموسى بالرياض',
    'توصيل طالبات حي الغروب',
    'توصيل موظفات الرياض حي الغروب',
    'توصيل آمن لطالبات التقنية',
    'توصيل طالبات المملكة بالرياض',
    'توصيل حي الدخل المحدود لطالبات الكلية',
    'توصيل حي نجم الدين بالرياض',
    'توصيل سريع لطالبات الرياض',
    'توصيل موظفات الرياض حي الموسى',
    'توصيل حي العوالي لطالبات الكلية',
    'خدمة توصيل لطالبات حي طويق',
    'توصيل الطالبات إلى الكلية التقنية',
    'توصيل سريع لطالبات كلية التقنية بالرياض',
    'توصيل الطالبات حي الغروب',
    'توصيل الطالبات حي الموسى في الرياض',
    'خدمة توصيل مضمونة للطالبات في الرياض',
    'توصيل الطالبات في حي الدخل المحدود',
    'توصيل الطالبات غرب الرياض بكل أمان',
    'توصيل خاص للطالبات في حي طويق',
    'خدمة توصيل طالبات وموظفات حي نجم الدين',
    'توصيل طالبات الكلية التقنية بحي العوالي',
    'توصيل طالبات المملكة في الرياض',
    'توصيل آمن وسريع لطالبات الرياض',
    'توصيل خاص لطالبات حي الغروب',
    'توصيل طالبات كلية المملكة غرب الرياض',
    'توصيل حي الموسى بالرياض للطالبات',
    'توصيل سريع ومريح لطالبات الرياض',
    'توصيل طالبات إلى حي الغروب',
    'توصيل موظفات في حي طويق',
    'توصيل الطالبات بحي نجم الدين',
    'توصيل آمن لطالبات حي الغروب',
    'توصيل لطالبات الكلية التقنية بالرياض',
    'توصيل طالبات حي طويق',
    'خدمة توصيل للطالبات في الرياض',
    'توصيل آمن لطالبات الكلية التقنية في الرياض',
    'توصيل سريع لطالبات الكليات بالرياض',
    'توصيل خاص لطالبات حي الغروب',
    'توصيل موظفات بحي الغروب',
    'توصيل الطالبات بكل أمان في الرياض',
    'توصيل مريح للطالبات بحي طويق',
    'توصيل سريع لطالبات حي نجم الدين',
    'خدمة توصيل الطالبات غرب الرياض',
    'توصيل لطالبات الكليات بالرياض',
    'خدمة توصيل لطالبات حي الدخل المحدود',
    'توصيل الطالبات في حي طويق بالرياض',
    'توصيل طالبات حي الغروب في الرياض',
    'توصيل آمن لطالبات حي العوالي',
    'توصيل طالبات الكلية التقنية بحي الموسى',
    'توصيل حي طويق لطالبات الكلية',
    'توصيل مريح وسريع لطالبات حي الغروب',
    'توصيل طالبات حي الموسى بالرياض',
    'توصيل لطالبات كلية التقنية حي نجم الدين',
    'خدمة توصيل لطالبات كلية التقنية',
    'توصيل الطالبات في حي العوالي بالرياض',
    'توصيل سريع لطالبات حي الموسى',
    'توصيل لطالبات التقنية بالرياض',
    'توصيل خاص للطالبات بحي الغروب',
    'توصيل آمن للطالبات في حي طويق',
    'خدمة توصيل سريعة للطالبات غرب الرياض',
    'توصيل لطالبات حي الغروب بالرياض',
    'توصيل خاص وسريع لطالبات الرياض',
    'توصيل لطالبات حي نجم الدين',
    'توصيل حي طويق للطالبات',
    'توصيل سريع لطالبات الرياض',
    'خدمة توصيل غرب الرياض',
    'توصيل طالبات الكلية بالرياض',
    'توصيل موظفات حي طويق',
    'توصيل آمن لطالبات الرياض',
    'توصيل حي الغروب لطالبات',
    'توصيل سريع حي نجم الدين',
    'توصيل طالبات الكلية التقنية',
    'توصيل مريح للطالبات',
    'توصيل حي الموسى بالرياض',
    'توصيل موظفات الرياض',
    'خدمة توصيل حي العوالي',
    'توصيل حي الغروب للطالبات',
    'توصيل آمن حي الدخل المحدود',
    'توصيل طالبات حي طويق',
    'توصيل سريع لطالبات التقنية',
    'توصيل موظفات كلية المملكة',
    'توصيل الطالبات غرب الرياض',
    'خدمة توصيل بحي نجم الدين',
    'توصيل لطالبات المملكة',
    'توصيل حي العوالي بالرياض',
    'توصيل مريح لطالبات الكلية',
    'توصيل سريع لطالبات الحي',
    'توصيل حي الدخل المحدود',
    'توصيل لطالبات الكلية',
    'توصيل طالبات الكلية غرب الرياض',
    'توصيل آمن بحي طويق',
    'توصيل طالبات الموسى',
    'خدمة توصيل بالرياض',
    'توصيل سريع حي الغروب',
    'توصيل طالبات التقنية',
    'توصيل آمن حي الموسى',
    'توصيل طالبات المملكة',
    'توصيل لطالبات كلية التقنية',
    'توصيل الطالبات بالرياض',
    'خدمة توصيل سريعة',
    'توصيل سريع حي طويق',
    'توصيل حي الغروب',
    'توصيل موظفات غرب الرياض',
    'توصيل لطالبات حي الغروب',
    'توصيل حي نجم الدين للطالبات',
    'خدمة توصيل آمنة بالرياض',
    'توصيل مريح حي الغروب',
    'توصيل طالبات حي الموسى',
    'توصيل حي الغروب لطالبات التقنية',
    'توصيل موظفات كلية التقنية',
    'توصيل لطالبات حي الدخل المحدود',
    'خدمة توصيل مريحة',
    'توصيل طالبات حي العوالي',
    'توصيل آمن وسريع لطالبات حي طويق',
    'توصيل خاص لطالبات حي الغروب',
    'توصيل حي الموسى للطالبات',
    'خدمة توصيل طالبات كلية التقنية',
    'توصيل حي الغروب للطالبات والموظفات',
    'توصيل سريع لطالبات الكلية في الرياض',
    'توصيل حي العوالي لطالبات الكلية',
    'توصيل مريح لطالبات حي طويق',
    'توصيل خاص للطالبات في الرياض',
    'توصيل موظفات بحي الدخل المحدود',
    'خدمة توصيل لطالبات كلية التقنية',
    'توصيل لطالبات وموظفات غرب الرياض',
    'توصيل طالبات التقنية بحي الغروب',
    'توصيل حي طويق للطالبات',
    'توصيل آمن للطالبات في حي الموسى',
    'توصيل الطالبات بحي الغروب'
  ]
,  
  
  openGraph: {
    title: 'ابو حســن | احسن طريقة تداومي بيها',
    description: "خدمة التوصيل الموسمي الأعلى أمانًا في المملكة#حضورك_مهمتنا",
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
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
