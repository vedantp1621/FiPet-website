'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar : React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#FFF8ECBF] ">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 shadow-[inset_0_-4px_12px_#ffffff8c,_inset_0_8px_13px_#ffffffbf] backdrop-blur-[34px]">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-purple-500 text-2xl"
          >
            {mobileOpen ? '✖' : '☰'}
          </button>

          {/* Logo for Desktop */}
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="FiPet Logo"
                width={122}
                height={57}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 pl-10 justify-start items-center gap-10 text-purple-500 capitalize text-[16px] ">
          <Link href="/">Discover</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Right side: Join Button (always visible) */}
        <div className="text-purple-500 capitalize text-[16px]">
         <Link href="https://tally.so/r/mB5ex4" target="_blank" rel="noopener noreferrer">
            Join the waitlist!
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
{mobileOpen && (
  <div className='md:hidden absolute'>


  <div className="  flex flex-col px-6 py-4 space-y-4 text-purple-500 text-[16px] capitalize  rounded-xl z-40  backdrop-blur-[34px]">
    <Link href="/" onClick={() => setMobileOpen(false)}>Discover</Link>
    <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
    <Link href="/team" onClick={() => setMobileOpen(false)}>Team</Link>
    <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
  </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
