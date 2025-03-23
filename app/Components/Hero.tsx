import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-20 w-full min-h-[800px]'>
        <div className='flex-1 max-w-[50%]'>
            <h1 className='md:text-[70px] text-[50px] md:leading-[90px] font-semibold text-zinc-800'>
                Navigating the digital landscape for success
            </h1>
            <p className='text-[20px] py-9'>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Link href="/" className='bg-green-300 px-[100px] py-4 rounded-md hover:bg-green-400 transition duration-300 font-bold text-white'>
                General test
            </Link>
        </div>


        <div className="flex-1 max-w-[50%] flex justify-end">
            <Image 
                src="/hero_image.png" 
                alt="hero_image" 
                width={700} 
                height={700} 
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default Hero
