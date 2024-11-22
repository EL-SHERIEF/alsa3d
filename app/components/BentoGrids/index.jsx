import Image from 'next/image';
import styles from './styles.module.css';
import h1car from '../../h1car.webp';
import road from '../../road.webp';
import money from '../../money.webp';
import quality from '../../quality.webp';

const content = [
  {
    title: 'سهولة الحجز والإشتراك',
    description:
      'احجزي في اي وقت بكل سهولة وبدون تعقيدات, سواء اذا كنتي طالبة او موظفة اشتراكنا بيكون مناسب لكي وفي متناول الجميع',
    image: road,
    alt: 'توصيل طالبات جامعة',
    style: 'lg:row-span-2 lg:rounded-l-[2rem]',
  },
  {
    title: 'سيارات مكيفة ومريحة',
    description:
      'أسطولنا يضم سيارات هيونداي اتش وان  وجميع السيارات مكيفة مع امكانية تزويد سيارة لكل رحلة, من مميزات سياراتنا ايضا انها مزودة بخدمات عديدة منها شبكة واي فاي مجانا وأنظمة حديثة، لتوفير راحة كاملة خلال الرحلة وجعل التنقل تجربة ممتعة وآمنة.',
    image: h1car,
    alt: 'سيارة هيونداي اتش 1',
    style: 'max-lg:row-start-1',
  },
  {
    title: 'نظام امان والتزام فى المواعيد',
    description:
      'نظام صارم يضمن لكي امان تام ومواعيد حادة لا يمكن التأخر عنها في اي حال من الاحوال, بالأضافة الى سائقين مدربين على اعلى مستوى و مؤهلين بكل بنود الأمان والسلامة',
    image: quality,
    alt: 'سائق خاص للجامعة',
    style: 'lg:col-start-2 lg:row-start-2',
  },
  {
    title: 'اسعار مناسبة للكل بجودة افضل وكفاءة اعلى',
    description:
      'أسعار تنافسية تراعي احتياجات الطالبات والموظفات، مع الحفاظ على جودة الخدمة وثبات السعر مقارنة بالمميزات',
    image: money,
    alt: 'ارخص خدمة توصيل',
    style: 'lg:row-span-2 lg:rounded-r-[2rem]',
  },
];

export default function Bento() {
  return (
    <div className="bg-gray-50 py-2 sm:py-8">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative">
        <h3 className="bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold">
          افضل خدمة نقل بالمملكة
        </h3>
        <h1 className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
          خدمة النقل الآمنة والمريحة للطالبات والموظفات بالرياض
        </h1>
        <div className="blur-[50px] rounded-full w-[200px] h-[140px] rotate-12 bg-custom-gradient absolute right-[calc(75%-120px)] top-[70px] z-0 opacity-60"></div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 relative" dir="ltr">
          {content.map((item, index) => (
            <div key={index} className={`group relative ${item.style}`} dir="rtl">
              <div className="absolute inset-px rounded-lg bg-[#ffffff88]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">{item.title}</h2>
                  <p className="mt-2 max-w-lg text-[.8rem]/[1.4rem] text-gray-600 max-lg:text-center">{item.description}</p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10">
                  <Image
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                    src={item.image}
                    width={300}
                    height={300}
                    alt={item.alt}
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
