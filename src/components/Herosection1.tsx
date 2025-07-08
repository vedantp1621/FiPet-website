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
    <div className="w-full bg-[#FFF8ECBF] px-10 sm:px-20 py-20">
      
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

      {/* --- Desktop/Tablet View with Overlapping Phone --- */}
      <div className="hidden sm:block relative">
        {/* Section 1: Purple Gradient */}
        <section className="relative min-h-[622px] px-8 sm:px-20 py-1 0  bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] rounded-[30px] shadow-inner">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10  pt-20 ">
            
            {/* Left Text Content */}
            <div className="text-white text-center lg:text-left z-10 ">
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
          </div>
        </section>

        {/* Section 2: Light Background */}
        <section className="w-full bg-[#FFF8ECBF] px-6 md:px-20 py-16 pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between mx-auto gap-12">
            
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 text-left z-10">
              <h2 className="font-poppins font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] text-[#2F2F2F]">
                We re changing the way teens<br /> learn about finance
              </h2>

              <p className="mt-6 text-[#2F2F2F] font-poppins font-normal text-[18px] sm:text-[20px] leading-[142%]">
                So say hello to <strong>FiPet</strong> — a gamified learning app where teens explore careers,
                learn financial literacy, and develop real-world skills by raising and battling digital pets.
              </p>

              <p className="mt-4 text-[#2F2F2F] font-poppins font-normal text-[18px] sm:text-[20px] leading-[142%]">
                No boring lectures. No pressure. Just 5–10 minute quests designed to build confidence and spark curiosity.
              </p>

              <div className="flex justify-start mt-8">
                <button 
                  className="h-[41px] w-[180px] text-white font-medium py-2 px-6 rounded-full text-center "
                  style={{
                    background: 'linear-gradient(180deg, rgba(143, 72, 253, 0.6) 0%, rgba(143, 72, 253, 0.9) 100%)',
                    borderImage: 'linear-gradient(359.84deg, rgba(56, 34, 91, 0.5) 4.89%, #A76DFF 95.11%) 1',
                    boxShadow: '0px 2px 24px 0px #FFFFFF66 inset, 0px -2px 10px 0px #FFFFFF99 inset'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overlapping Phone Image - Behind Text */}
        <div className="absolute top-75 xl:top-30 z-0
                        sm:right-1/2 sm:translate-x-1/2 lg:right-[25px] lg:translate-x-0  ">
          <div className="relative 
                      
                         sm:w-[280px] sm:h-[460px] 
                         md:w-[350px] md:h-[575px] 
                        
                         lg:w-[600px] lg:h-[985px]
                         xl:w-[800px] xl:h-[1100px]">
            <Image
              src="/phone.png"
              alt="FiPet Phone App"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection1;
