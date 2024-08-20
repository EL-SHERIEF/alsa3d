import {WifiIcon,BoltIcon,ShieldCheckIcon,ArrowTopRightOnSquareIcon   } from '@heroicons/react/20/solid'
import img1 from '../img/1.jpg'
import { useTranslation } from 'react-i18next';

export default function ContentSection() {
  const { t, i18n } = useTranslation();
  const Car = t('Carfeatures', { returnObjects: true });
  const icons = [
    <ArrowTopRightOnSquareIcon className="h-8 w-10 text-indigo-600"/>,
    <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />,
    <BoltIcon className="h-8 w-8 text-indigo-600" />,
    <WifiIcon className="h-8 w-10 text-indigo-600" />,
  ];
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">{t('sectionCarTagline')}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('sectionCarTitle')}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              {t('sectionCarDescription')}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={i18n.options.resources[i18n.language].images.ContentSectionImgs.img1}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
         <p>
         {t('sectionCarDescription2')}
              </p>
      
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
              {Car.map((card, index) => (
                <li key={index} className="flex gap-x-3">
                {icons[index % icons.length]}
                  <span>
                  <strong className="font-semibold text-gray-900">{card.title} </strong> 
                  {card.description}
                  </span>
                </li>
              ))}
              </ul>
            
              <p className="mt-8">
              {t('sectionCarDescription3')}</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{t('sectionCarTitle2')}</h2>
              <p className="mt-6">
              {t('sectionCarDescription4')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
