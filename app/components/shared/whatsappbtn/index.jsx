"use client"; // Ensures client-side rendering in Next.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import whatsapp from '../../../whatsapp.svg';
import sendArrow from '../../../waSend.svg';

export default function WaBtn({ link }) {
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState(link);

  useEffect(() => {
    const encodedMessage = encodeURIComponent(message);
    setWhatsAppLink(`${link}?text=${encodedMessage}`);
  }, [message, link]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div
      className="fixed right-4 bottom-4 flex items-center space-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* WhatsApp Icon */}
      <Link
        className="rounded-full bg-[#00FF1E] p-4 text-black flex items-center justify-center mx-4"
        href={whatsAppLink}
        target="_blank"
      >
        <Image
          className="duration-150"
          src={whatsapp}
          width={30}
          height={30}
          alt="WhatsApp"
        />
      </Link>

      {/* Message Input and Send Arrow (Appears on Hover or if Message has Text) */}
      <div
        className={`flex items-center gap-3 transition-opacity duration-150 ${
          isHovered || message ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <textarea
          className="bg-[#2A3942] text-white placeholder-[#7E8F98] p-[10px] px-[20px] overflow-hidden resize-none max-h-[45px] rounded-xl outline-none ring-8 ring-[#202C33] text-right w-64 transition-all duration-500"
          placeholder="ارسل رسالة"
          value={message}
          onChange={handleInputChange}
        />
        <Link
          className="rounded-2xl bg-[#202C33] p-[17px] flex items-center justify-center hover:bg-[#2A3942] "
          href={whatsAppLink}
          target="_blank"
        >
          <Image
            className="duration-150"
            src={sendArrow}
            width={28}
            height={28}
            alt="Send"
          />
        </Link>
      </div>
    </div>
  );
}
