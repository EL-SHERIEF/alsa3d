import { WifiIcon,SparklesIcon,CheckBadgeIcon,ClockIcon,ShieldCheckIcon,CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';



export default function AboutSection() {
  const { t } = useTranslation();
  const icons = [
    <CurrencyDollarIcon className="h-6 w-6 text-white" />,
    <SparklesIcon className="h-6 w-6 text-white" />,
    <ShieldCheckIcon className="h-6 w-6 text-white" />,
    <WifiIcon className="h-6 w-6 text-white" />,
    <ClockIcon className="h-6 w-6 text-white" />,
    <CheckBadgeIcon className="h-6 w-6 text-white" />,
  ];

  const serviceCards = t('serviceCards', { returnObjects: true });

  return (
    <div className="bg-white py-24 sm:py-20 mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{t('serviceSectionTag')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('serviceSectionHeader')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('serviceSectionSubHeader')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {serviceCards.map((card, index) => (
              <div key={index} className="relative ps-16 flex flex-row justify-start items-start gap-4">
                <div className="flex h-10 w-10 min-w-10 min-h-10 items-center justify-center rounded-lg bg-indigo-600">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {card.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {card.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
