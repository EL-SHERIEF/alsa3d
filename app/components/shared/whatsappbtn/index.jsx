"use client"; // Ensures client-side rendering in Next.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

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
      className="fixed right-2 sm:right-4 bottom-4 flex items-center z-10"
    >
      {/* WhatsApp Icon */}
      <div
        className="rounded-full bg-[#00FF1E] p-4 text-black flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
      >
        <svg width="30" height="30" viewBox="0 0 473 490" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M107.872 151.014C110.328 131.587 135.565 105.182 155.594 108.112L155.562 108.08C175.054 111.786 190.484 145.349 199.185 160.441C205.349 171.391 201.346 182.485 195.596 187.167C187.839 193.422 175.709 202.052 178.254 210.717C182.779 226.122 236.498 279.865 262.919 295.143C272.92 300.926 280.172 285.674 286.365 277.86C290.864 271.849 301.963 268.257 312.883 274.19C329.192 283.692 344.556 294.735 358.763 307.167C365.859 313.1 367.524 321.868 362.608 331.136C353.948 347.459 328.902 368.984 310.721 364.609C278.967 356.971 150.547 307.167 109.298 162.878C106.978 156.052 107.562 153.471 107.872 151.014Z" fill="#0F0F0F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M236.498 473.339C210.206 473.339 195.658 470.517 172.035 462.591L126.791 485.223C98.2163 499.517 64.5961 478.729 64.5961 446.767V398.099C18.3233 354.933 0.132812 305.161 0.132812 236.871C0.132812 106.273 105.957 0.402344 236.498 0.402344C367.038 0.402344 472.863 106.273 472.863 236.871C472.863 367.468 367.038 473.339 236.498 473.339ZM107.572 379.403L93.9043 366.653C57.9536 333.118 43.1083 295.625 43.1083 236.871C43.1083 130.018 129.692 43.3966 236.498 43.3966C343.305 43.3966 429.888 130.018 429.888 236.871C429.888 343.725 343.305 430.345 236.498 430.345C215.318 430.345 205.384 428.432 185.7 421.828L168.779 416.151L107.572 446.767V379.403Z" fill="#0F0F0F"/>
</svg>
      </div>

      {/* Message Input and Send Arrow (Appears on Hover or if Message has Text) */}
      <div
        className={`flex items-center gap-3 transition-opacity duration-150 ps-4 ${
          isHovered || message ? 'block' : 'hidden'
          
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <textarea
          className="bg-[#2A3942] text-white placeholder-[#7E8F98] p-[10px] sm:px-[20px] px-[10px] overflow-hidden resize-none max-h-[45px] rounded-xl outline-none ring-8 ring-[#202C33] text-right w-64 transition-all duration-500"
          placeholder="ارسل رسالة"
          value={message}
          onChange={handleInputChange}
        />
        <Link
          className="rounded-2xl bg-[#202C33] p-[17px] flex items-center justify-center hover:bg-[#2A3942] "
          href={whatsAppLink}
          target="_blank"
        >
       <svg width="28" height="28" viewBox="0 0 254 234" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M133.256 117.036H219.381ZM221.822 128.314L236.051 170.774C243.844 194.028 247.741 205.655 244.945 212.815C242.516 219.034 237.301 223.747 230.865 225.543C223.454 227.608 212.261 222.576 189.874 212.514L46.354 147.997C24.5026 138.174 13.5769 133.264 10.2007 126.441C7.26643 120.513 7.26643 113.557 10.2007 107.63C13.5769 100.808 24.5026 95.8966 46.354 86.0738L190.121 21.4471C212.441 11.4142 223.6 6.3976 231.004 8.45552C237.433 10.2427 242.649 14.9443 245.085 21.1509C247.891 28.2977 244.036 39.8998 236.326 63.1041L221.794 106.84C220.47 110.826 219.808 112.819 219.547 114.856C219.315 116.665 219.317 118.496 219.554 120.304C219.82 122.341 220.488 124.331 221.822 128.314Z" fill="#7C8B95"/>
<path d="M133.256 117.036H219.381M221.822 128.314L236.051 170.774C243.844 194.028 247.741 205.655 244.945 212.815C242.516 219.034 237.301 223.747 230.865 225.543C223.454 227.608 212.261 222.576 189.874 212.514L46.354 147.997C24.5026 138.174 13.5769 133.264 10.2007 126.441C7.26643 120.513 7.26643 113.557 10.2007 107.63C13.5769 100.808 24.5026 95.8966 46.354 86.0738L190.121 21.4471C212.441 11.4142 223.6 6.3976 231.004 8.45552C237.433 10.2427 242.649 14.9443 245.085 21.1509C247.891 28.2977 244.036 39.8998 236.326 63.1041L221.794 106.84C220.47 110.826 219.808 112.819 219.547 114.856C219.315 116.665 219.317 118.496 219.554 120.304C219.82 122.341 220.488 124.331 221.822 128.314Z" stroke="#202C33" strokeWidth="15" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </Link>
      </div>
    </div>
  );
}
