'use client';
import React from 'react';
import Image from 'next/image';

const Herosection2: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF8ECBF] px-6 md:px-20 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-12">

        {/* Left: Image */}
        <div className="w-full lg:w-[861px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[696px] relative -left-0 lg:-left-[127px] flex justify-center">
          <Image
            src="/home-mockup.png"
            alt="FiPet App on iPhone"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Text (Only visible on desktop) */}
        <div className="w-full lg:w-1/2 text-right hidden lg:block">
          <h2 className="font-poppins font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] text-[#2F2F2F]">
            We’re changing the way teens<br /> learn about finance
          </h2>

          <p className="mt-6 text-[#2F2F2F] font-poppins font-normal text-[18px] sm:text-[20px] leading-[142%]">
            So say hello to <strong>FiPet</strong> — a gamified learning app where teens explore careers,
            learn financial literacy, and develop real-world skills by raising and battling digital pets.
            <br /><br />
            No boring lectures. No pressure. Just 5–10 minute quests designed to build confidence and spark curiosity.
          </p>
        </div>
      </div>

      {/* Learn More Button at Bottom (Always visible) */}
      <div className="flex justify-center lg:justify-end mt-10">
        <button className="h-[41px] w-[180px] text-purple-700  font-medium py-2 px-6 rounded-full text-center glass-button">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Herosection2;
