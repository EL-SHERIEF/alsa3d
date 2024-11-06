import Image from "next/image"
import customers from "../../customers.png"
const stats = [
    { id: 1, name: 'سيارة مجهزة بالكامل', value: '٣٠' },
    { id: 2, name: 'طالبة توصل بالوقت المناسب', value: '٢٣٠' },
    { id: 3, name: 'موظفة ما تشيل هم دوامها', value: '٧٠' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white pt-10 pb-6 sm:pt-32 flex flex-col justify-center items-center relative">
      <p className="!z-10 mx-auto mt-2 max-w-2xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
      بحثنا عن كل المميز وجمعناه بمكان واحد فقط لانكي تستحقين الافضل
      <Image src={customers} width={100} height={100} className="absolute left-[calc(50%-50px)] bottom-[-40px] md:bottom-1 md:-left-[100px]" alt="امرأة سعودية ملهمة"/>
      </p>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 mx:py-24">
          <dl className="grid grid-cols-3 gap-x-8 gap-y-16 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-sm/5 text-gray-600 md:text-base/7">{stat.name}</dt>
                <dd className="order-first text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }