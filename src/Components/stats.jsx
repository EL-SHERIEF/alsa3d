import { useTranslation } from 'react-i18next';


  export default function Stats() {
    
    const { t } = useTranslation();
    const statistics = t('stats.items', { returnObjects: true });
    return (
      <div className="bg-white py-3 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {statistics.map((card, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {card.title}
              </dd>
              <dt className="text-base leading-7 text-gray-600">
                {card.description}
              </dt>
            </div>
          ))}
       
          </dl>
        </div>
      </div>
    )
  }
  