import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ setShowModal }) => {
  
  return (
    <div>
        <header className="header h-[650px] bg-header-img bg-cover w-full  bg-no-repeat bg-center">
        <nav className="relative flex justify-between items-center z-20 px-8 py-6">
          <Image src="/logo.png" width="80px" height="80px" objectFit="contain" />
          <ul className='space-x-5 flex items-center'>
            <li>
              <button onClick={() => setShowModal(true)} className="text-white font-bold border-0 bg-none uppercase tracking-widest cursor-pointer">
                Log In
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-start items-center mt-10 text-white space-y-6">
          <h4 className="uppercase text-sm text-hulu-green font-bold">
            BUNDLE WITH ANY HULU PLAN AND SAVE
          </h4>
          <img
            src="/bannerlogo.png"
            objectFit="contain"
            alt="Hulu"
            className="md:w-[40rem] w-[20rem] m-2"
          />
          <div className="font-bold text-xl lg:text-3xl lg:w-[50rem] text-clip text-center">
          Get endless entertainment, live sports, and the shows and movies you love.
          </div>
          <button className="bg-hulu-green hover:text-black hover:bg-hulu-green/20 w-[40rem] text-gray-800 px-8 py-5 text-md font-semibold border-0 rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80">
            GET THE DISNEY BUNDLE
          </button>
          <div className="flex cursor-pointer text-gray-200 space-x-2 items-center text-xs">
            <span className='border-b border-gray-300'>What's included</span>
            <span>see</span>
            <span className='border-b border-gray-300'>bundle terms</span>
          </div>
          <div className="text-lg cursor-pointer border-b border-gray-300 text-gray-200">
            Sign up for Hulu only
          </div>
        </div>
      </header>

      
    </div>
  )
}

export default Header