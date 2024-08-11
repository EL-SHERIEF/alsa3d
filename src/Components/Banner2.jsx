import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Banner2() {
    const { t } = useTranslation();

  return (
<section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-wLogo-4xl">
    <h1 className='text-center text-4xl/[0] font-extrabold tracking-tighter text-indigo-700 mb-20'>
    {t('logo')}
    </h1>
    <figure class="mt-10">
      <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>" {t('banner2text')} "</p>
      </blockquote>
      <figcaption class="mt-10">
      <div className='my-[80px] flex flex-row gap-3 flex-wrap items-center justify-center'>
             <a href="#" className="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" >
                  {t('heroButton')}
                </a>
                <a dir="ltr" href="#" className="rounded-md border border-transparent px-8 py-3 text-center font-medium text-gray-600 hover:text-indigo-700" >
                  {t('heroButton2')}
                </a>
             </div>
      </figcaption>
    </figure>
  </div>
</section>
  )
}
