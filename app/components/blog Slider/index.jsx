'use client'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function BlogSlider({ data, title }) {
    const settings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
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
                    autoplaySpeed: 3600,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='my-24'>
            <div className='flex flex-col text-center relative my-8 sm:my-14'>
                <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
                  {title}
                  </p>
                <div className='blur-[50px] rounded-full w-[200px] h-[140px] rotate-12 bg-custom-gradient absolute right-[calc(60%-120px)] top-[70px] z-0 opacity-60'></div>
            </div>

            <Slider {...settings} className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-3 relative">
                {data.map((post) => (
                    <section key={post._id} className='relative group/active'>
                        <div className=" h-[400px] md:h-[450px] mx-2 max-w-2xl lg:max-w-4xl rounded-2xl shadow-lg px-4 py-4 sm:py-2 sm:px-2 flex flex-col justify-between  bg-[#ffffffad] backdrop-blur-md border-x-gray-200 border-2 z-10">
                            <figure className="text-center">
                                {/* Main Image */}
                                {post.mainImage?.asset && (
                                    <div className='overflow-hidden w-full h-[190px] sm:h-[220px]  rounded-lg relative'>
                                        <Link href={`/blog/${post.slug.current}`}>
                                         <Image
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt || 'Blog Image'}
                                        width={400}
                                        height={200}
                                        className=" w-full h-full sm:rounded-md object-cover group-hover/active:scale-110 duration-200"
                                    /></Link>
                                    </div>
                                )}
                                {/* Blog Title */}
                                
                                <blockquote className="text-center w-[90%] mx-auto">
                                <Link href={`/blog/${post.slug.current}`} className='group'> <h2 className=' text-xl/8 font-semibold text-gray-900 sm:text-1xl/8 mt-3 line-clamp-2 group-hover:underline'>{post.title}</h2></Link>
                                </blockquote>
                                <div className="text-center text-sm text-gray-600 mt-2">
                                        {new Date(post._updatedAt).toLocaleDateString('ar-SA', { dateStyle: 'long' })}
                                    </div>
                                   
                
                            </figure>
                            <Link href={`/blog/${post.slug.current}`} passHref className='my-5 w-fit p-2 mx-7'>
    <span className=" inline-block text-blue-600 font-semibold hover:underline">
        اقرأ المزيد
    </span>
</Link>
                        </div>
                    </section>
                ))}
            </Slider>
        </div>
    );
}
