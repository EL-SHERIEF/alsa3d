  import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import h1car from '../../h1car.webp'
import road from '../../road.webp'
import money from '../../money.webp'
import location from '../../location.webp'
import quality from '../../quality.webp'
export default function Bento() {
  return (
    <div className="bg-gray-50 py-2 sm:py-8">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative">
      <h2 className='bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold'>افضل خدمة نقل بالمملكة</h2>
      <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
      خدمة النقل الآمنة والمريحة للطالبات والموظفات بالرياض
      </p>
      <div className='blur-[50px] rounded-full w-[200px] h-[140px] rotate-12 bg-custom-gradient absolute right-[calc(75%-120px)] top-[70px] z-0 opacity-60' ></div>

      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 relative" dir='ltr'>
    
        <div className="group relative lg:row-span-2" dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88] lg:rounded-l-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">
              سهولة الحجز والإشتراك
              </p>
              <p className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
             احجزي في اي وقت بكل سهولة وبدون تعقيدات, سواء اذا كنتي طالبة او موظفة اشتراكنا بيكون مناسب لكي         </p>
            </div>
            <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-custom-gradient  shadow-2xl">
              <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out  w-full max-lg:max-w-xs h-[100%] object-cover mix-blend-screen"
                src={road}
                width={300} height={300}
                alt="توصيل طالبات جامعة"
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
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">سيارات مكيفة ومريحة</p>
              <p className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              أسطولنا يضم سيارات هيونداي اتش وان المكيفة والمزودة بخدمات الواي فاي وأنظمة حديثة، لتوفير راحة كاملة خلال الرحلة وجعل التنقل تجربة ممتعة وآمنة.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10">
              <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out"
                src={h1car}
                width={270} height={270}
                alt="سيارة هيونداي اتش 1"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div className="group relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"  dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">نظام امان والتزام بالمواعيد</p>
              <p className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              نظام صارم يضمن لكي امان تام ومواعيد حادة لا يمكن التأخر عنها في اي حال من الاحوال, بالأضافة الى التزام سائقينا المؤهلين بكل بنود الأمان والسلامة
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center w-full [container-type:inline-size] max-lg:py-6 pb-3">
            <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out h-[min(152px,40cqw)] object-contain mix-blend-hard-light"
                src={quality}
                width={350} height={350}
                alt="سائق خاص للجامعة"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div className="group relative lg:row-span-2"  dir='rtl'>
          <div className="absolute inset-px rounded-lg bg-[#ffffff88] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center ">
              اسعار مناسبة للكل بجودة افضل وكفاءة اعلى
</p>
              <p className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">
              أسعار تنافسية تراعي احتياجات الطالبات والموظفات، مع الحفاظ على جودة الخدمة وثبات السعر مقارنة بالمميزات
              </p>
            </div>
            <div className="relative w-full grow">
            <Image
                className="group-hover:scale-110 transition duration-300 ease-in-out h-full object-contain"
                src={money}
                width={450} height={450}
                alt="ارخص خدمة توصيل"
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
