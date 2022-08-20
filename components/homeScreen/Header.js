import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className="header h-530 bg-header-img bg-cover w-full  bg-no-repeat bg-center">
        <nav className="relative flex justify-end z-20 px-8 py-6">
          <ul className='space-x-5 flex items-center'>
            <li>
              <Link href="/login">
              <button className="text-white font-bold border-0 bg-none uppercase tracking-widest cursor-pointer">
                Log In
              </button>
              </Link>
            </li>
            <Link href="/signup">
            <button className="text-white bg-hulu-green px-6 rounded-lg py-2 font-bold border-0 bg-none uppercase tracking-widest cursor-pointer">
                Sign up
              </button>
            </Link>
          </ul>
        </nav>
        <div className="flex flex-col justify-start items-center mt-10 text-white space-y-6">
          <h4 className="uppercase text-sm text-hulu-green font-bold">
            Try up to one month free
          </h4>
          <img
            src="/logo.png"
            alt="Hulu"
            className="w-200 md:w-270 m-2"
          />
          <div className="font-bold text-2xl text-center">
            Watch thousands of TV shows and movies.
          </div>
          <div className="hidden md:block text-lg">
            HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
          </div>
          <button className="bg-white text-gray-800 px-8 py-5 text-md font-semibold border-0 rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80">
            Start Your Free Trial
          </button>
          <div className="text-xs text-gray-200">
            Free trial for new & eligible returning subscribers only.
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