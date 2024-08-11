import React from 'react'
import { useTranslation } from 'react-i18next';
import img1 from "../img/9.jpg"
import img2 from "../img/10.jpg"

export default function aboutSection2() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();

  return (
<section class="bg-white mt-20 mb-10">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"> {t('about2title')}</h2>
            <p class="mt-10 text-2xl">{t('about2describtion')}</p>
             <div className='my-[40px] flex flex-row gap-3 flex-wrap items-start justify-start'>
             <a href="#" className="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" >
                  {t('heroButton')}
                </a>
                <a dir="ltr" href="#" className="rounded-md border border-transparent px-8 py-3 text-center font-medium text-gray-600 hover:text-indigo-700" >
                  {t('heroButton2')}
                </a>
             </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full h-[370px] rounded-lg object-cover	" src={img1} alt="office content 1" />
            <img class="mt-4 w-full h-[370px] lg:mt-10 rounded-lg object-cover	" src={img2} alt="office content 2"/>
        </div>
    </div>
</section>
  )
}
