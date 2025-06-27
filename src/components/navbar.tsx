import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-6 px-4 font-poppins">
      <div
        className="flex items-center justify-between w-full max-w-[1340px] h-[76px]
        rounded-[49px] px-4 md:px-[15px] py-[12px]
        bg-[#FFF8EC] shadow-[0px_4px_18.2px_7px_#00000040] flex-wrap md:flex-nowrap"
      >
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FiPet Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-[#674AD1] leading-[100%]">
              FiPet
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-8 md:gap-16 lg:gap-32 justify-center mb-3 md:mb-0">
          <Link href="/" className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-[#674AD1] transition">
            Home
          </Link>
          <Link href="/about" className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-[#674AD1] transition">
            About
          </Link>
          <Link href="/services" className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-[#674AD1] transition">
            Services
          </Link>
          <Link href="/contact" className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-[#674AD1] transition">
            Contact
          </Link>
        </div>

        {/* Join the Waitlist Button */}
        <div className="w-full md:w-auto">
          <Link href="/" className="block ">
            <div
              className="bg-[#FFA500] hover:bg-[#e59500] w-full md:w-[295px] h-[44px] sm:h-[48px] md:h-[52px] 
              rounded-[28px] flex items-center justify-center transition"
            >
              <span className="text-sm sm:text-[20px] md:text-[24px] font-bold text-[#FFF8EC] leading-[100%] text-center">
                Join the waitlist!
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
