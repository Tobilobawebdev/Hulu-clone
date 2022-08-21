import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <header className="header h-[650px] bg-header-img bg-cover w-full  bg-no-repeat bg-center">
        <nav className="relative flex justify-end z-20 px-8 py-6">
          <ul className='space-x-5 flex items-center'>
            <li>
              <Link href="/login">
              <button className="text-white font-bold border-0 bg-none uppercase tracking-widest cursor-pointer">
                Log In
              </button>
              </Link>
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-8 py-6 bg-gradient-to-l from-cstart via-cvia to-cend text-white">
        <img
          src="/logos.png"
          alt=""
          className="block w-250 md:w-full m-auto md:m-0"
        />
        <div className="space-y-3 text-center md:text-left">
          <h4 className="uppercase text-sm text-hulu-green font-bold">
            Bundle with any Hulu plan & save
          </h4>
          <h3 className="text-3xl font-light">Get Hulu, Disney+, and ESPN+.</h3>
          <a href="#" className="block text-gray-300 text-xs underline">
            Details
          </a>
        </div>
        <div className="justify-self-center md:justify-self-end space-y-3">
          <a
            href="#"
            className="block bg-transparent text-white px-8 py-5 text-md font-semibold border-2 border-white rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80"
          >
            Get Bundle
          </a>
          <a
            href="#"
            className="block text-center text-gray-300 text-xs underline"
          >
            Terms apply
          </a>
        </div>
      </section>
    </div>
  )
}

export default Header