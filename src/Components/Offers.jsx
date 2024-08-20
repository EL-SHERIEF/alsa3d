import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../img/10.jpg'

export default function Offers() {
    const { t } = useTranslation();
    const Offer = t('offerItems', { returnObjects: true });
  return (
    <div class="bg-gray-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 class="text-3xl font-bold text-gray-900 mb-10">{t('offers')}</h2>

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[90px] lg:space-y-0">
      {Offer.map((item, index) => (
           <div key={index} class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[380px]">
            <img src={`${item.img}`} alt="" class="h-full w-full object-center" />
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              {item.tag}
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">{item.title}</p>
        </div>
    
              ))}
    
      </div>
    </div>
  </div>
</div>
  )
}
