"use client";
interface ButtonProps {
  className?: string;
}
export default function WaitlistButton({ className }: ButtonProps) {
  const handleJoinWaitlist = () => {
    console.log("Waitlist joined!");
  };
  return (
    <button
      onClick={handleJoinWaitlist}
      disabled={false}
      className={`
        text-base text-white font-semibold 
        py-2 px-8 sm:px-16 
        cursor-pointer
        rounded-full 
        bg-gradient-to-r from-[#AA4AFB] to-[#8450F5]
        hover:bg-gradient-to-l from-[#AA4AFB] to-[#8450F5]
        shadow-md
        hover:shadow-lg
        transition-all 
        duration-300 
        ease-in-out
        ${className}
      `}
    >
      Join the Waitlist
    </button>
  );
}
