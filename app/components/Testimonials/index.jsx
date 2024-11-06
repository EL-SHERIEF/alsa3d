'use client'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import female from "../../female-avatar.svg";
import logo from "../../fulllogo-light.svg";
import styles from './styles.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "احترام مواعيد و راحة بال ماشاء الله كنت متخوفه الصراحه بس الخدمة مرره حلوة",
            name: "صفاء المشيخي",
            title: "طالبة بكلية التقنية للبنات",
        },
        {
            quote: "صدق انا فخورة فيكم",
            name: "نهال محمد",
            title: "موظفة",
        },
        {
            quote: "تحياتي لاجمل خدمة توصيل بالمملكة كلها ✨",
            name: "Razan Alyoubi",
            title: "طالبة بكلية التقنية",
        },
        {
            quote: " شكرا لكل من شارك بهي الشركة والله ممتازين❤❤",
            name: "تسنيم احمد العزي",
            title: "طالبة بكلية التقنية بالرياض",
        },
        {
            quote: "تعامل رائع جدا",
            name: "Amina Mohammed",
            title: "موظفة",
        },
        {
            quote: "اسعارهم حلوة + والله راحة بال في كل شي",
            name: "دانية التليدي",
            title: "طالبة في الكليه الرقميه للبنات",
        },
        {
            quote: "اجمل خدمة اسلوب راقي و سائقين ممتازين ما يتأخرون ابدا",
            name: "ام حمد",
            title: "موظفة",
        },
        {
            quote: "اسلوبهم فخم",
            name: "ام حمد",
            title: "موظفة",
        }
    ];

    const settings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1600,
        cssEase: 'linear',
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='my-20'>
            <div className='flex flex-col text-center relative my-14'>
                <h2 className='bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold'>
                  رأيكم بنا
                </h2>
                <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
                   شكراً لكل عملائنا
                </p>
                <div className='blur-[50px] rounded-full w-[200px] h-[140px] rotate-12 bg-custom-gradient absolute right-[calc(60%-120px)] top-[70px] z-0 opacity-60'></div>
            </div>

            <Slider {...settings} className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-3 relative">
                {testimonials.map((testimonial, index) => (
                    <section key={index} className='relative'>
                        <div className="h-[400px] md:h-[450px] mx-2 max-w-2xl lg:max-w-4xl rounded-2xl shadow-lg px-6 py-12 sm:py-12  flex flex-col justify-between lg:px-8 bg-[#ffffffad] backdrop-blur-md border-x-gray-200 border-2 z-10">
                            <figure className="">
                            <Image src={logo} width={100} height={100} className='mx-auto h-12 mb-12' alt='logo' />

                                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                                    <p>“{testimonial.quote}”</p>
                                </blockquote>
                            </figure>
                            <figure>
                            <figcaption className="mt-10">
                                    <Image src={female} className="mx-auto h-12 w-12 rounded-full border-2 border-gray-200 p-3" width={50} height={50} alt='female avatar' />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        <div className="text-gray-600">{testimonial.title}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                ))}
            </Slider>
        </div>
    );
}
