"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6] text-[#323231] p-4 sm:p-8">
      {/* Main Title */}
      <h1
        className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] mb-2 text-center max-w-[95%] sm:max-w-[1115px] md:max-w-[1400px] lg:max-w-[1650px]"
        style={{ fontFamily: 'GeorgiaBold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)', letterSpacing: '0.1em' }}
      >
        AN ACCOUNT OF ATTEMPTED MURDER
      </h1>

      {/* Second Title */}
      <h2
        className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[50px] mb-2 text-center max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1115px]"
        style={{ fontFamily: 'Georgia' }}
      >
        And
      </h2>

      {/* Third Title */}
      <h3
        className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[50px] mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-center max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1115px]"
        style={{ fontFamily: 'Georgia' }}
      >
        Political Abuse of Psychiatry in Yatala Labour Prison in South Australia
      </h3>

      {/* Button */}
      <button
        className="w-[150px] h-[50px] sm:w-[180px] sm:h-[60px] md:w-[200px] md:h-[70px] lg:w-[227px] lg:h-[80px] bg-[#323231] text-white rounded-[300px] flex items-center justify-center hover:bg-[#FAF9F6] hover:text-[#323231] border border-solid border-[#323231] transition-colors"
        onClick={() => router.push("/home")}
      >
        <span className="font-bold mr-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Explore</span>
        <div className="flex items-center justify-center w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px] rounded-full border border-current transition-colors">
          →
        </div>
      </button>
    </div>
  );
}
