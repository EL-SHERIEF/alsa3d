import img8 from "../img/8.png"
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation();

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-auto py-16 sm:px-6 sm:py-32 lg:px-0 lg:max-w-[90%]">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-[500px] text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-start">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[36px]/[55px]">
              {t('bannerTitle')}
                <br />
                {t('bannerSubtitle')}
              </h2>
              <p className="mt-8 text-lg leading-8 text-gray-300">
              {t('bannerDescription')}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                 {t('bannerCtaButton')}
                </a>
                <a href="#" dir="ltr" className="text-sm font-semibold leading-6 text-white flex flex-row justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
{t('bannerContactNumber')}
               

                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={img8}
                width={1824}
                height={1080}
                className="absolute start-0 top-0 w-[57rem] max-w-none rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  