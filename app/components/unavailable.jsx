import React from 'react'

export default function Unavailable() {
  return (
    <div className='fixed left-0 top-0 w-screen h-screen backdrop:blur-2xl text-2xl text-center text-white bg-black z-50 pointer-events-none'>
      هذا الموقع غير متوفر
    </div>
  )
}
