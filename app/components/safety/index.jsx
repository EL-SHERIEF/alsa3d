import Image from "next/image";
import Link from "next/link";

import safety from "../../safety.svg"
import safetygirl from "../../safetygirl.png"
import safetypin from "../../safetypin.png"

export default function Safety() {
  return (
    <div className="mb-32">
      <div className="mb-8 sm:mb-16">
        <h2 className="bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold">الأمان أولويتنا</h2>
        <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
          تنقل آمن ومريح للموظفات بالرياض
        </p>
        <p className="mx-auto mt-6 max-w-2xl w-2/3 sm:w-3/4 text-pretty text-center text-md font-medium text-gray-500 sm:text-lg/8">
          نقدم خدمات توصيل خاصة للموظفات بأعلى معايير الأمان، لضمان رحلة مريحة وسهلة يوميًا دون قلق.
        </p>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-[93vw] md:max-w-7xl sm:px-6 lg:px- overflow-hidden rounded-2xl">
          <div className="relative isolate overflow-hidden bg-green-100 px-6 pt-16 shadow-sm sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#AAFF00" />
                  <stop offset={1} stopColor=" #00FFAA" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-start">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 sm:text-4xl">
                نحرص على أعلى معايير الأمان في كل رحلة
              </h2>
              <p className="mt-6 text-pretty text-sm sm:text-base/6 text-neutral-700">
                لأن سلامتك تهمنا، نلتزم بأحدث أنظمة الحماية والمتابعة المستمرة لضمان وصولك بأمان. جميع السائقين مدربين وفق أعلى معايير السلامة، لتوفير تجربة توصيل مريحة وآمنة للموظفات يوميًا.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-3 lg:justify-start">
                <Link
                  href="https://wa.me/966594740105?text=الحجز"
                  className="rounded-xl bg-custom-gradient py-3 sm:py-4 px-5 sm:px-10 shadow-sm text-white w-fit flex flex-row gap-1 items-center font-bold sm:my-0 my-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  احجزي الآن
                </Link>
                <Link
                  href="https://wa.me/966594740105?text=ما%20هي%20تدابير%20السلامة"
                  className="rounded-xl py-2 px-0 sm:px-5 text-neutral-900 w-fit flex flex-row gap-1 items-center font-bold hover:underline"
                >
                  اعرفي تدابير السلامة
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="سلامة الموظفات أثناء التنقل"
                src={safetygirl}
                width={500}
                height={500}
                className="absolute start-0 -top-4 md:top-10 max-w-[100%] sm:max-w-none rounded-md pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
