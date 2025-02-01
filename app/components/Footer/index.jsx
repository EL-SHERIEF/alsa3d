import React from 'react'
import logo from '../../fulllogo-light.svg'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon } from '@heroicons/react/24/solid'
import Button from '../shared/button'

export default function Footer() {
  return (
    <footer className="w-full">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 flex flex-col justify-center items-center sm:justify-start sm:items-start">
                <Link href="/"  className="flex justify-center lg:justify-start">
                <Image src={logo} width={160} height={160} alt='AboHassan'/>
                </Link>
                <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-start">احسن خدمة توصيل منتظم في المملكة</p>
                <Button
      link="tel:+966594740105"
      Icon={PhoneIcon}
      text="اتصل بنا"
    />
            </div>
      
            <div className="lg:mx-auto text-start">
                <p className="text-lg text-gray-900 font-medium mb-7">الصفحات</p>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><Link href="#"  className="text-gray-600 hover:text-gray-900">الرئيسية</Link></li>
                    <li className="mb-6"><Link href="#"  className=" text-gray-600 hover:text-gray-900">من نحن</Link></li>
                    <li className="mb-6"><Link href="#"  className=" text-gray-600 hover:text-gray-900">خدماتنا</Link></li>
                    <li><Link href="#"  className=" text-gray-600 hover:text-gray-900">مميزاتنا</Link></li>
                </ul>
            </div>

            <div className="lg:mx-auto text-start ">
                <p className="text-lg text-gray-900 font-medium mb-7">الاكثر زيارة</p>
                <ul className="text-sm  transition-all duration-500">
                    <li className="mb-6"><Link href="#"  className="text-gray-600 hover:text-gray-900">اسعارنا</Link></li>
                    <li className="mb-6"><Link href="#"  className=" text-gray-600 hover:text-gray-900">المجتمع</Link></li>
                    <li className="mb-6"><Link href="#"  className=" text-gray-600 hover:text-gray-900">من نحن</Link></li>
                </ul>
            </div>
    
           
        </div>

        <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span className="text-sm text-gray-500 tracking-wide ">©<Link href="https://www.linkedin.com/in/elsherief/" className='text-green-500 duration-150'>ابو حسن</Link> جميع الحقوق محفوظة</span>
                <div className="flex mt-4 gap-4 sm:justify-center lg:mt-0 ">
                    <Link href="https://x.com/abohassan_media"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g id="Social Media">
                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446p.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                        </g>
                      </svg>
                    </Link>
                    <Link href=" https://haraj.com.sa/users/apo%20hassan%200105"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600 text-white">
                       حراج
                            
                    </Link>
                    <Link href="https://www.snapchat.com/add/abo_hassan99l?share_id=A3tuYS0QoPs&locale=ar-SA-u-nu-latn"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                        <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 -0.5 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                          
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>snapchat [#136]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -7560.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M334.125531,7419 C332.838531,7419 332.277531,7418.71061 331.183531,7417.92743 C330.193531,7417.21913 329.558531,7416.82957 327.720531,7417.19283 C327.003531,7417.33449 327.017531,7417.26973 326.863531,7416.55333 C326.781531,7416.17591 326.722531,7415.94622 326.582531,7415.92396 C325.089531,7415.69123 324.206531,7415.3472 324.030531,7414.93133 C323.946531,7414.73098 324.046531,7414.57313 324.200531,7414.54682 C326.147531,7414.22303 327.721531,7412.58888 328.404531,7410.97902 C328.406531,7410.97497 328.407531,7410.97092 328.409531,7410.96789 C328.582531,7410.61374 328.616531,7410.30816 328.512531,7410.05924 C328.277531,7409.49867 327.520531,7409.3813 326.977531,7409.16274 C326.603531,7409.01298 325.988531,7408.69728 326.070531,7408.26219 C326.145531,7407.86352 326.784531,7407.61055 327.126531,7407.77245 C327.985531,7408.18023 328.673531,7408.05577 328.879531,7407.86352 C328.869531,7407.66823 328.999531,7407.45675 328.999531,7407.25843 C328.999531,7405.87927 328.651531,7404.16316 329.085531,7403.17963 C330.958531,7398.92984 337.206531,7398.95109 339.069531,7403.17761 C339.503531,7404.16215 339.396531,7405.87927 339.310531,7407.26045 L339.306531,7407.32622 C339.294531,7407.51341 339.283531,7407.69049 339.274531,7407.8625 C339.314531,7407.89994 339.475531,7408.02946 339.804531,7408.04261 C340.083531,7408.03148 340.405531,7407.94042 340.759531,7407.77245 C341.176531,7407.57514 341.927531,7407.87768 341.935531,7408.33099 C341.939531,7408.54247 341.784531,7408.85817 341.021531,7409.16274 C340.480531,7409.37927 339.721531,7409.49867 339.487531,7410.05924 C339.382531,7410.30816 339.416531,7410.61374 339.589531,7410.96688 C339.591531,7410.97092 339.592531,7410.97497 339.594531,7410.97902 C339.647531,7411.1055 340.932531,7414.06923 343.798531,7414.54682 C343.919531,7414.56706 344.006531,7414.67634 343.999531,7414.79979 C343.996531,7414.84431 343.986531,7414.88883 343.967531,7414.93234 C343.792531,7415.34619 342.910531,7415.68921 341.416531,7415.92193 C341.276531,7415.9442 341.217531,7416.17389 341.136531,7416.54929 C341.013531,7417.11997 341.032531,7417.31627 340.278531,7417.16652 C338.460531,7416.80832 337.771531,7417.24139 336.816531,7417.9244 C336.112531,7418.4283 335.316531,7419 334.125531,7419" id="snapchat-[#136]"> </path> </g> </g> </g> </g></svg>
                            
                    </Link>
                    <Link href="#"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-red-400">
                        <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                            </svg>
                            
                    </Link>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
