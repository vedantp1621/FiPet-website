'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Herosection1: React.FC = () => {
  const RotatingText = () => {
    const texts = ['Gamified.', 'For Teens.', 'Made Easy.'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <span className="text-[#FF8F33] sm:text-[#FFF8EC] inline-block whitespace-nowrap transition-opacity duration-500 ease-in-out">
        {texts[index]}
      </span>
    );  
  };

  return (
    <div className="w-full bg-black sm:bg-[#FFF8ECBF] px-10 sm:px-20 py-20">
      
      {/* --- Mobile View Only --- */}
      <section className="sm:hidden px-6 py-12 bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] rounded-[20px] shadow-inner text-center text-white">
        <h1 className="text-[50px] font-poppins font-semibold leading-tight">
          <span className="text-[#FFF8EC]">Finance.</span><br />
          <RotatingText />
        </h1>

        <div className="relative w-[240px] h-[240px] mx-auto my-6 ">
          <Image
            src="/3dicon.png"
            alt="FiPet 3D-Icon"
            fill
            className="object-contain"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <button className="h-[41px] w-[180px] mx-auto text-white font-medium py-2 px-6 rounded-full glass-button">
          Explore
        </button>
      </section>

      {/* --- Desktop/Tablet View --- */}
      <section className="hidden sm:block relative min-h-[622px] px-8 sm:px-20 py-16 bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] rounded-[30px] shadow-inner">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-10">
          
          {/* Left Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-[48px] lg:text-[100px] font-poppins font-semibold leading-tight text-shadow-purple">
              <span className="text-[#FF8F33]">Finance.</span><br />
              <RotatingText />
            </h1>
            <p className="text-lg md:text-2xl mt-4 max-w-md mx-auto lg:mx-0">
              The fun, effective way teens learn about finance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
              <button className="h-[41px] w-full sm:w-[180px] text-white font-medium py-2 px-6 rounded-full glass-button">
                Join the Waitlist
              </button>
              <button className="h-[41px] w-full sm:w-[180px] text-white font-medium py-2 px-6 rounded-full glass-button">
                Explore
              </button>
            </div>
          </div>

          {/* Right 3D-Icon Image */}
          <div className="relative w-[350px] md:w-[420px] lg:w-[528px] h-[320px] md:h-[380px] lg:h-[406px] ">
            <Image
              src="/3dicon.png"
              alt="FiPet 3D-Icon"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Herosection1;
