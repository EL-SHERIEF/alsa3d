import React from 'react'
import Link from 'next/link'

export default function Button({ link, Icon, text }) {
  return (
    <Link
      className="group rounded-xl bg-custom-gradient py-[6px] px-5 text-white w-fit flex flex-row gap-1 items-center font-[700] hover:scale-105 duration-150"
      href={link}
    >
      {text}
      {Icon && <Icon className="w-3 h-3 inline-block group-hover:rotate-12 duration-150" />}
    </Link>
  )
}
