"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Herosection1: React.FC = () => {
  const RotatingText = () => {
    const texts = ["Gamified.", "For Teens.", "Made Easy."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <span className="text-[#FFF8EC] inline-block whitespace-nowrap transition-opacity duration-500 ease-in-out">
        {texts[index]}
      </span>
    );
  };

  return (
    <div className="w-full bg-[#FFF8ECBF] px-4 sm:px-10 lg:px-20 py-8 sm:py-20">
      <div className="relative">
        {/* Section 1: Purple Gradient */}
        <section className="relative min-h-screen sm:min-h-[622px] px-6 sm:px-8 lg:px-20 py-12 sm:py-10 bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] rounded-[20px] sm:rounded-[30px] shadow-inner">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-0 lg:pt-5">
            {/* Text Content */}
            <div className="text-white text-center lg:text-left z-10 w-full lg:w-auto">
              <h1 className="text-[54px] sm:text-[60px] lg:text-[100px] font-poppins font-bold sm:font-semibold leading-tight text-shadow-purple">
                <span className="text-[#FF8F33]">Finance.</span>
                <br />
                <RotatingText />
              </h1>
              <p className="hidden sm:block text-lg md:text-2xl mt-4 max-w-md mx-auto lg:mx-0">
                The fun, effective way teens learn about finance.
              </p>

              {/* Mobile Phone Image */}
              <div className="flex justify-center mt-8 mb-8 sm:hidden">
                <div className="relative w-[250px] h-[400px]">
                  <Image
                    src="/phone.png"
                    alt="FiPet Phone App"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                <button className="w-[148px] h-[45px] sm:w-[189px] sm:h-auto md:w-[255px] text-white font-medium py-2 px-6 rounded-[20px] sm:rounded-full glass-button flex items-center justify-center">
                  Explore
                </button>
                <button className="w-[148px] h-[45px] sm:w-[189px] sm:h-auto md:w-[255px] text-white font-medium py-2 px-6 rounded-[20px] sm:rounded-full glass-button flex items-center justify-center ">
                  Join the Waitlist
                </button>
              </div>

              {/* Mobile Arrow */}
              <div className="flex justify-center mt-6 sm:hidden">
                <div className="relative w-15 h-10">
                  <Image
                    src="/arrow.png"
                    alt="Arrow down"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Light Background */}
        <section className="w-full bg-[#FFF8ECBF] px-6 sm:px-6 md:px-20 py-16 sm:pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between mx-auto gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-left z-10">
              <h2 className="font-poppins font-medium text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] text-[#2F2F2F]">
                We&apos;re changing the way teens
                <br /> learn about finance
              </h2>

              <p className="mt-6 text-[#2F2F2F] font-poppins font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[142%]">
                So say hello to <strong>FiPet</strong> — a gamified learning app
                where teens explore careers, learn financial literacy, and
                develop real-world skills by raising and battling digital pets.
              </p>

              <p className="mt-4 text-[#2F2F2F] font-poppins font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[142%]">
                No boring lectures. No pressure. Just 5–10 minute quests
                designed to build confidence and spark curiosity.
              </p>

              <div className="flex justify-start mt-8">
                {/* Mobile Button */}
                <button
                  className="block sm:hidden h-[45px] w-[168px] text-white font-medium py-2 px-6 rounded-[20px] text-center border border-white/20"
                  style={{
                    background: "linear-gradient(90deg, #8F48FD 0%, #8FA9FD 100%)",
                    boxShadow: "0px 3px 4px 0px #FFFFFF4D inset, 1.22px -2px 10px 0px #FFFFFF40 inset",
                  }}
                >
                  Learn More
                </button>
                
                {/* Desktop Button */}
                <button
                  className="hidden sm:block h-[41px] w-[180px] text-white font-medium py-2 px-6 rounded-full text-center"
                  style={{
                    background: "linear-gradient(180deg, rgba(143, 72, 253, 0.6) 0%, rgba(143, 72, 253, 0.9) 100%)",
                    borderImage: "linear-gradient(359.84deg, rgba(56, 34, 91, 0.5) 4.89%, #A76DFF 95.11%) 1",
                    boxShadow: "0px 2px 24px 0px #FFFFFF66 inset, 0px -2px 10px 0px #FFFFFF99 inset",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Phone Image - Hidden on Mobile */}
        <div className="hidden sm:block absolute top-75 xl:top-30 z-0 sm:right-1/2 sm:translate-x-1/2 lg:right-[20px] lg:translate-x-0">
          <div className="relative sm:w-[280px] sm:h-[460px] md:w-[350px] md:h-[575px] lg:w-[600px] lg:h-[985px] xl:w-[800px] xl:h-[1100px]">
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