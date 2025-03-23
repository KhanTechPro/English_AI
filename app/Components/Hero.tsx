import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-4 sm:px-10 md:px-20 w-full min-h-[600px] md:min-h-[800px]">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[36px] sm:text-[42px] md:text-[60px] leading-[45px] sm:leading-[50px] md:leading-[75px] font-semibold text-zinc-800">
          Navigating the digital <br className="hidden md:block" /> landscape for success
        </h1>
        <p className="text-[16px] sm:text-[18px] py-6 md:py-9 text-gray-600">
          Our digital marketing agency helps businesses grow and succeed online through a range of 
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Link 
          href="/" 
          className="bg-green-500 px-8 sm:px-16 py-3 sm:py-4 rounded-md hover:bg-green-600 transition duration-300 font-bold text-white inline-block"
        >
          Get Started
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image 
          src="/hero_image.png" 
          alt="hero_image" 
          width={500} 
          height={500} 
          className="w-[80%] sm:w-[70%] md:w-[500px] object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
