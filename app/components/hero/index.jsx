'use client'
import Link from "next/link"
import { useRef } from 'react';
import Image from "next/image"
import frame1 from "../../frame1.webp"
import frame2 from "../../frame2.webp"
import frame3 from "../../frame3.webp"
import frame4 from "../../frame4.webp"
import { PhoneIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slides = [
  {
    image: frame2,
    title: "حضورك مهمتنا, نحن نحرص على حضورك الدوام بكل راحة وامان",
    tag: "توصيل طالبات كلية التقنية",
    linkText: "احجزي سيارتك",
    linkHref: "https://wa.me/966594740105?text=اشتراك",
    alt: "خدمات توصيل الطالبات من الكلية الرقمية الى اي مكان"
  },
  {
    image: frame4,
    title: " ادعمي مجتمع المرأة السعودية القوية نسعى جاهدين في ابو حسن لخدمات نقل افضل",
    tag: "توصيل طالبات الكلية الرقمية",
    linkText: "كوني انتي المجتمع",
    linkHref: "https://wa.me/966594740105?text=اضفني_للمجموعة",
    alt: "كوني انتي المجتمع"
  },
  {
    image: frame1,
    title: "خدمات نقل مريحة و امنة, ابو حسن لتوصيل طالبات الكليات والموظفات",
    tag: "توصيل الكلية الرقمية",
    linkText: "انضمي لنا",
    linkHref: "https://wa.me/966594740105?text=اشتراك",
    alt: "توصيل طالبات كلية التقنية والكلية الرقمية"
  },
  {
    image: frame3,
    title: "لان السائق هوا من يجعل الرحلة مناسبة ضممنا مجموعة من امهر سائقين المملكة",
    tag: "توصيل كلية الرقمية",
    linkText: "اشتركي الان بكل بساطة",
    linkHref: "https://wa.me/966594740105?text=اشتراك",
    alt: "سائقين الكلية الرقمية"
  },
];

export default function Hero() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[93vw] md:w-[97vw] mx-auto h-[26rem] md:h-[calc(100vh-106px)] relative mt-14 md:mt-16 overflow-hidden rounded-xl">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
           <div  itemScope itemType="https://schema.org/Service"  key={index} dir="rtl" className=" h-[26rem] md:h-[calc(100vh-106px)]  w-full !flex flex-col !relative justify-end items-start">
           <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-0">
            <Image src={slide.image} className="left-0 w-full h-full object-cover z-0" fill loading="eager"  placeholder="blur"  quality={75}  itemProp="image" alt="انضمي لنا"/>
            </div>
           <div className="mx-1 md:mx-5 w-[90%] md:max-w-4xl ps-5 pb-5 md:ps-10 md:pb-10 z-10 flex flex-col gap-[2px] sm:gap-2 items-start">
                         <h4 itemProp="name"  className="block text-white z-10 text-[12px] md:text-sm rounded-full border-white border-2 px-4 py-[1px] md:px-6 md:py-1">{slide.tag}</h4>
                         <h1 itemProp="description"  className="z-10 block text-white text-3xl md:text-5xl/[1.3] font-bold mb-10">{slide.title}</h1>
                         <div className="z-10 my-4 flex flex-row gap-[10px]">
                         <Link itemProp="url" className='rounded-xl bg-custom-gradient py-4 px-10 shadow-sm text-white w-fit flex flex-row gap-1 items-center font-bold' href={slide.linkHref} target="_blank">{slide.linkText}
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
           </svg>
           
           
           
                         </Link>
                         </div>
                       </div>
           
                   </div>
        ))}
      </Slider>

      <button type="button" className="absolute inset-y-0 start-0 inline-flex justify-center items-center md:w-12 w-8 h-full text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 z-10" onClick={handleNext}>
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </span>
      </button>

      <button type="button" className="z-10 absolute inset-y-0 end-0 inline-flex justify-center items-center md:w-12 w-8 h-full text-white hover:bg-white/20 focus:outline-none focus:bg-white/20" onClick={handlePrev}>
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}