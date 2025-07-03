import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const temp = () => {
  return (
    <div>
    <nav className=" fixed  px-5 py-10  w-full z-50 ">

     <div
        className="  flex items-center justify-between h-[76px]
        rounded-full px-4 md:px-[15px] py-[12px] 
        bg-[#FFF8EC] shadow-[0px_4px_18.2px_7px_#00000040] flex-wrap md:flex-nowrap"
      >
        {/* Logo + Brand */}
        <div className=" flex items-center gap-2 ">
          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src="/logo.png"
              alt="FiPet Logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-[#674AD1] ">
              FiPet
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>          <Link href="/" className="text-sm sm:text-base md:text-lg font-bold text-[#674AD1] transition">

            Home
          </Link>
          </div>
<div>
          <Link href="/about" className="text-sm sm:text-base md:text-lg  font-bold text-[#674AD1] transition">
            About
          </Link>
          </div>
         <div> <Link href="/services" className="text-sm sm:text-base md:text-lg font-bold text-[#674AD1] transition">
            Services
          </Link>
          </div>
          <div>
          <Link href="/contact" className="text-sm sm:text-base md:text-l font-bold text-[#674AD1] transition">
            Contact
          </Link>
</div>

        {/* Join the Waitlist Button */}
        <div>

          <Link href="/" >
            <div
              className="bg-[#FFA500] hover:bg-[#e59500] w-[234px] md:w-[295px] h-[44px] sm:h-[48px] md:h-[52px] 
              rounded-[28px] flex items-center justify-center transition"
            >
              <span className="text-sm sm:text-[20px] md:text-[24px] font-bold text-[#FFF8EC] leading-[100%] text-center">
                Join the waitlist!
              </span>
            </div>

          </Link>
        </div>






        

      </div>

 
    </nav></div>
  )
}

export default temp