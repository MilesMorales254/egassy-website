// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-gray-300 py-10 mt-20">
      {/* Main Title (Clickable and Left-Aligned) */}
      <div className="flex justify-center md:justify-start max-w-[1200px] mx-auto px-8 mb-6">
        <Link href="/" passHref>
          <h2
            className="font-bold cursor-pointer"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '36px',
              color: '#323231',
              textDecoration: 'none', // No underline for clickable link
            }}
          >
            ERIC GASSY
          </h2>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-8 border-t border-gray-400 pt-6">
        {/* Left Column: Phone and Email */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="mb-2"
            style={{ fontFamily: 'Georgia, serif', color: '#323231', fontSize: '16px' }}
          >
            Phone: xxx xxx xxx
          </p>
          <p
            style={{ fontFamily: 'Georgia, serif', color: '#323231', fontSize: '16px' }}
          >
            Email: xxxxx@xxxx.com
          </p>
        </div>

        {/* Center Column: Address */}
        <div className="flex-1 text-center border-t md:border-t-0 md:border-l md:border-r border-gray-400 py-4 md:py-0 px-4 md:px-8">
          <p
            style={{ fontFamily: 'Georgia, serif', color: '#323231', fontSize: '16px' }}
          >
            1 Peter Brown Drive,<br />
            North Field, S.A. 5085, Australia
          </p>
        </div>

        {/* Right Column: Empty for now */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
