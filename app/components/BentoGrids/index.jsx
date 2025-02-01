import Image from 'next/image';
import styles from './styles.module.css';
import h1car from '../../h1car.webp';
import road from '../../road.webp';
import money from '../../money.webp';
import quality from '../../quality.webp';

export default function Bento() {
  return (
    <div className="bg-gray-50 py-2 sm:py-8">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative">
      <h3 className='bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold'>افضل خدمة نقل بالمملكة</h3>
      <h1 className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
      خدمة النقل الآمنة والمريحة للطالبات والموظفات بالرياض
      </h1>
      <div className='blur-[50px] rounded-full w-[200px] h-[140px] rotate-12 bg-custom-gradient absolute right-[calc(75%-120px)] top-[70px] z-0 opacity-60' ></div>

      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 relative" dir='ltr'>
    
        <div className="group relative lg:row-span-2" dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88] lg:rounded-l-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">
              سهولة الحجز والإشتراك
              </h1>
              <h2 className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              احجزي في أي وقت بكل سهولة وبدون تعقيدات، سواء كنتِ موظفة أو طالبة، اشتراكنا سيكون مناسبًا لكِ وفي متناول الجميع.             </h2>
            </div>
            <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-custom-gradient  shadow-2xl">
              <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out  w-full max-lg:max-w-xs h-[100%] object-cover mix-blend-screen"
                src={road}
                width={300} height={300}
                alt="توصيل موظفات"
                loading="lazy"
                 placeholder="blur"
              />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div className="group relative max-lg:row-start-1"  dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88] max-lg:rounded-t-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">سيارات خاصة</h1>
              <h2 className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              جميع سياراتنا مكيفة ومريحة مع إمكانية توفير سيارة خاصة لكل عميلة. بالإضافة إلى توفر خدمات إضافية مثل شبكة واي فاي مجانية لضمان الراحة التامة أثناء التنقل.
                            </h2>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10">
              <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out"
                src={h1car}
                width={270} height={270}
                alt="سيارة خاصة"
                loading="lazy"
                 placeholder="blur"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div className="group relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"  dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">نظام أمان والتزام في المواعيد      </h1>
              <h2 className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              نظام صارم يضمن لكِ الأمان التام والمواعيد الدقيقة، بالإضافة إلى سائقين مدربين على أعلى مستوى لضمان السلامة والراحة.
                            </h2>
            </div>
            <div className="flex flex-1 items-center justify-center w-full [container-type:inline-size] max-lg:py-6 pb-3">
            <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out h-[min(152px,40cqw)] object-contain"
                src={quality}
                width={350} height={350}
                alt="سائق خاص"
                 loading="lazy"
                 placeholder="blur"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div className="group relative lg:row-span-2"  dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center ">
              أسعار مناسبة للجميع بجودة وكفاءة أعلى
              </h1>
              <h2 className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              نقدم أسعارًا تنافسية تراعي احتياجات الموظفات مع الحفاظ على جودة الخدمة وضمان استقرار الأسعار مقارنة بالمميزات              </h2>
            </div>
            <div className="relative w-full grow">
            <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out h-full object-contain"
                src={money}
                width={450} height={450}
                alt="أرخص خدمة توصيل للموظفات"
               loading="lazy"
                 placeholder="blur"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
