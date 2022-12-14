import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-200 text-black">
        <div className="p-10 max-w-1100 m-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <ul>
              <li className="uppercase font-bold mb-3">BROWSE</li>
              <li>
                <a href="#">Streaming Library</a>
              </li>
              <li>
                <a href="#">Live TV</a>
              </li>
              <li>
                <a href="#">Live News</a>
              </li>
              <li>
                <a href="#">Live Sports</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Originals</a>
              </li>
              <li>
                <a href="#">Networks</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">FX on Hulu</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Hulu, Disney+, and ESPN+</a>
              </li>
              <li>
                <a href="#">Disney Bundle</a>
              </li>
              <li>
                <a href="#">HBO Max</a>
              </li>
              <li>
                <a href="#">Cinimax</a>
              </li>
              <li>
                <a href="#">Showtime</a>
              </li>
              <li>
                <a href="#">STARZ</a>
              </li>
            </ul>
            <ul>
              <li className="uppercase font-bold mb-3">HELP</li>
              <li>
                <a href="#">Account & Billing</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#">Supported Devices</a>
              </li>
              <li>
                <a href="#">Accesibility</a>
              </li>
            </ul>
            <ul>
              <li className="uppercase font-bold mb-3">ABOUT US</li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-7 border-gray-400" />
          <div className="flex items-center">
            <a href="#">
              <img src="/facebook.svg" alt="" className="w-6 h-6 mr-6" />
            </a>
            <a href="#">
              <img src="/twitter.svg" alt="" className="w-6 h-6 mr-6" />
            </a>
            <a href="#">
              <img src="/youtube.svg" alt="" className="w-6 h-6 mr-6" />
            </a>
            <a href="#">
              <img src="/instagram.svg" alt="" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer