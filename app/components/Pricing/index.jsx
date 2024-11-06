import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'شهري',
    id: 'tier-hobby',
    href: "https://wa.me/966594740105?text=اشتراك%20شهري",
    priceMonthly: '400 ر.س',
    terms: '/الشهر',
    description: "احسن باقة اذا كنتي تبحثين عن المرونة",
    features: [
      'امان تام',
      'التزام مواعيد صارم جداً',
      'يمكن التوصيل في ايام العطل',
      'خدمة متكاملة لكل مميزاتنا بسعر شامل',
      'الراحة والجودة بأفضل تكلفة',
      'سعر شفاف وبدون مفاجآت',
    ],
    featured: false,
  },
  {
    name: 'موسمي',
    id: 'tier-enterprise',
    href: "https://wa.me/966594740105?text=اشتراك%20موسمي",
    priceMonthly: '300 ر.س',
    terms: '/ الشهر',
    description: 'احسن باقة للطلاب, مناسب للتوفير و راحة البال طوال الفصل الدراسي',
    features: [
      'امان تام',
      'حضورك طوال الفصل الدراسي مهمتنا',
      'التزام مواعيد صارم جداً',
      'يمكن التوصيل في ايام العطل',
      'خدمة متكاملة لكل مميزاتنا بسعر شامل',
      'الراحة والجودة بأفضل تكلفة',
      'سعر شفاف وبدون مفاجآت',
      'سعر مناسب يلبي احتياجات الجميع',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-0 sm:py-10 lg:px-8">
     
      <div className="mx-auto max-w-4xl text-center">
      <h2 className='bg-custom-gradient rounded-lg w-fit px-4 py-[2px] my-5 mx-auto text-white text-[.8rem]/[1.75rem] text-center font-bold'>افضل خدمة نقل بالمملكة</h2>
      <p className="!z-10 mx-auto mt-2 max-w-xl text-balance text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-5xl relative">
      اختاري الباقة المناسبة
      </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-md font-medium text-gray-500 sm:text-lg/8">
        اختاري باقة مناسبة من الباقتين سواء كنتي موظفة او طالبة الباقات فيها جميع المميزات الي تبحثين عنها, التزام مواعيد, راحة و جودة بأفضل تكلفة وغيرها من المميزات 
   
      </p>
      </div>
      <div className="mt-12 sm:mt-20 mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-custom-gradient shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-br-3xl lg:rounded-tl-none'
                  : 'sm:rounded-t-none lg:rounded-br-none lg:rounded-tl-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-black' : 'text-green-400', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-black' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-neutral-900' : 'text-gray-500', 'text-base')}>{tier.terms}</span>
            </p>
            <p className={classNames(tier.featured ? 'text-neutral-700' : 'text-gray-600', 'mt-6 text-sm/5')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-neutral-900' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 font-medium text-smm flex flex-row justify-start items-center">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'bg-neutral-900 h-6 w-6 rounded-full p-1 text-white stroke-white' : 'text-green-400 h-6 w-5 ', 'flex-none ')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline-black'
                  : 'text-green-400 ring-1 ring-inset ring-green-300 hover:ring-green-400 focus-visible:outline-green-400 bg-green-50',
                'mt-8 block rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
            انضمي إلينا اليوم
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
