import React from 'react'

export default function Unavailable() {
  return (
    <div className='fixed left-0 top-0 w-screen h-screen backdrop:blur-2xl text-2xl text-center text-white bg-black z-50 pointer-events-none flex justify-center items-center'>
 <h1>الرجاء دفع إلإشتراك السنوي
  300 USD</h1>  
  <h2>تم إنهاء التعاقد يرجى السنوي يرجى الدفع خلال (7) أيام</h2>
  <p>لا يمكنك استخدام التطبيق حتى يتم دفع الإشتراك السنوي</p>
  <p>Vercel.app</p></div>
  )
}
