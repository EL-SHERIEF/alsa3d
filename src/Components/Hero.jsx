import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpeg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    return (
      <div className="relative overflow-hidden bg-white mt-[80px] ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-[540px]">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-[50px]/[69px] font-sans">
              {t('welcome')}
              </h1>
              <p className="mt-4 text-[18px] text-gray-500">
              {t('description')}
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:start-1/2 sm:top-0 sm:translate-x-8  lg:start-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 mx-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={img1}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img2}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 mx-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img3}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img4}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img5}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 mx-3">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img6}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img7}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  <div className='flex flex-col w-full flex-wrap justify-start items-start sm:flex-row gap-2'>
    
  <a href="#" className="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" >
                  {t('heroButton')}
                </a>
                <a dir="ltr" href="#" className="rounded-md border border-transparent px-8 py-3 text-center font-medium text-gray-600 hover:text-indigo-700" >
                  {t('heroButton2')}
                </a>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }