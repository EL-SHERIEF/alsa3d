'use client'

import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import people from "../../people.jpg"
import purpose from "../../purpose.jpg"
import preformance from "../../preformance.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Values() {
    const settings = {
        dots: false,
        pauseOnHover: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

          {
            breakpoint: 800,
            settings: {
              infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
              slidesToShow: 1,
              slidesToScroll: 1,
    
            },
          },

        ],
      };
  return (
    <section className="py-16 mx-auto sm:py-20" >

<div className="mb-16">

<h2 className='bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold'>قيمنا</h2>
      <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
      القيم التي تضيء طريقنا
      </p>
</div>
        <Slider {...settings} className="mx-auto  max-w-2xl px-6 lg:max-w-7xl lg:px-6 relative">
    
    
    
        <div className="px-6 group relative w-full  h-[500px]"  dir="rtl">
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-0 group-hover:opacity-0 z-10 duration-300 scale-x-100 ease-in-out px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl overflow-hidden">
<div className="flex flex-col justify-start items-start gap-3 z-1">
<Image src={people} width={500} height={500} className="absolute z-0 left-0 top-0 w-full h-full object-cover" alt="abo hassan"/>

<p className="text-white text-4xl font-bold z-10">الناس</p>


</div>     

  
<button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-custom-gradient rounded-full text-base/[0] gap-1 z-10">المزيد 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-100 group-hover:opacity-100 duration-300 scale-x-0 bg-custom-gradient bg-opacity-10 px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl">
<div className="flex flex-col justify-start items-start gap-3 ">
<p className="text-neutral-900 text-4xl font-bold">الناس</p>
<p className=" text-neutral-800 text-lg font-bold">نحن نُوجِد مساحة للجميع، نبني ثقة ودعم متبادل.
نسعى باستمرار لتطوير أنفسنا ومجتمعاتنا والعالم من حولنا، مُبرزين نقاط القوة ومُحتفلين بالإنجازات.
نتبادل الاراء الراجعة بعناية واحترام وصراحة.</p>
</div>     

<button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-neutral-900 text-green-300 rounded-full text-base/[0] gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-45">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
       </div>






      
       <div className="px-6 group relative w-full  h-[500px]"  dir="rtl">
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-0 group-hover:opacity-0 z-10 duration-300 scale-x-100 ease-in-out px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl overflow-hidden">
<div className="flex flex-col justify-start items-start gap-3 z-1">
<Image src={purpose} width={500} height={500} className="absolute z-0 left-0 top-0 w-full h-full object-cover" alt="abo hassan"/>

<p className="text-white text-4xl font-bold z-10">الغاية</p>


</div>     

 
<button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-custom-gradient rounded-full text-base/[0] gap-1 z-10">المزيد 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-100 group-hover:opacity-100 duration-300 scale-x-0 bg-custom-gradient bg-opacity-10 px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl">
<div className="flex flex-col justify-start items-start gap-3 ">
<p className="text-neutral-900 text-4xl font-bold">الغاية</p>
<p className=" text-neutral-800 text-lg font-bold">
نحن ملتزمون تمامًا برؤيتنا ورسالتنا، حيث نربط بين عملنا اليومي وأهدافنا الملهمة.
نعزز التغيير الإيجابي ونلهم من حولنا من خلال مثالنا.
نزيد من التأثير الإيجابي لتحقيق النمو التجاري، ونستخدم النمو التجاري لتوسيع نطاق التأثير الإيجابي.
</p>
</div>     

<button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-neutral-900 text-green-300 rounded-full text-base/[0] gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-45">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
       </div>
   

       <div className="px-6 group relative w-full  h-[500px]"  dir="rtl">
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-0 group-hover:opacity-0 z-10 duration-300 scale-x-100 ease-in-out px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl overflow-hidden">
<div className="flex flex-col justify-start items-start gap-3 z-1">
<Image src={preformance} width={500} height={500} className="absolute z-0 left-0 top-0 w-full h-full object-cover" alt="abo hassan"/>

<p className="text-white text-4xl font-bold z-10">الاداء</p>


</div>     

   <button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-custom-gradient rounded-full text-base/[0] gap-1 z-10">المزيد 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
        <div className="w-[96%] h-full absolute left-0 top-0 group-hover:scale-x-100 group-hover:opacity-100 duration-300 scale-x-0 bg-custom-gradient bg-opacity-10 px-10 py-10 rounded-2xl flex flex-col justify-between items-start shadow-xl">
<div className="flex flex-col justify-start items-start gap-3 ">
<p className="text-neutral-900 text-4xl font-bold">الاداء</p>
<p className=" text-neutral-800 text-lg font-bold">
نطمح للأفضل، ونسعى لإيجاد أذكى الطرق لتحقيق أهدافنا.
نتحرك بسرعة وابتكار، مع الالتزام بالانضباط في عملياتنا.
إما أن ننجح أو نتعلم، معتمدين على البيانات لتعزيز قراراتنا.
</p>
</div>     

   <button className="flex flex-row-reverse items-center justify-center px-5 py-1 bg-neutral-900 text-green-300 rounded-full text-base/[0] gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-45">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

        </button>
        </div>
       </div>
        </Slider>

  </section>
  )
}
