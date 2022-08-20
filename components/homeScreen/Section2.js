import React from 'react'

const Section2 = () => {
  return (
    <div>
        <section className="px-10 py-10 bg-live-section text-white">
        <div className="flex flex-col items-center justify-center text-center border-4 border-hulu-green rounded-2xl px-10 py-8 md:p-28 space-y-7">
          <h4 className="uppercase text-sm text-hulu-green font-bold">
            Hulu + Live TV
          </h4>
          <div className="font-bold text-4xl md:text-7xl">
            Live TV Makes It Better
          </div>
          <div className="text-xl md:text-2xl max-w-3xl">
            Make the switch from cable. Get 75+ top channels with your favorite
            live sports, news, and events - plus the entire Hulu streaming
            library.
          </div>
          <div className="text-gray-300 text-xs">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </div>
          <a href="#" className="uppercase underline">
            View Channels in Your Area
          </a>
        </div>
      </section>

      <section className="h-800 relative bg-livesport-small md:bg-livesport-img bg-cover bg-no-repeat bg-center text-white">
        <div className="absolute max-w-550 top-28 left-6 md:top-160 md:left-100 space-y-7">
          <div className="font-bold text-5xl md:text-7xl">Live Sports</div>
          <div className="text-2xl max-w-2xl">
            Catch your games at home or on the go. Stream live games from major
            college and pro leagues including the NCAA®, NBA, NHL, NFL, and
            more.
          </div>

          <div className="flex items-center justify-between w-300 space-x-5">
            <div className="flex justify-center items-center h-16 w-16 relative bg-network-logo bg-cover bg-no-repeat bg-center">
              <img src="/live-sports-logo-1.png" alt="" className="w-10" />
            </div>
            <div className="flex justify-center items-center h-16 w-16 relative bg-network-logo bg-cover bg-no-repeat bg-center">
              <img src="/live-sports-logo-2.png" alt="" className="w-10" />
            </div>
            <div className="flex justify-center items-center h-16 w-16 relative bg-network-logo bg-cover bg-no-repeat bg-center">
              <img src="/live-sports-logo-3.svg" alt="" className="w-10" />
            </div>
            <div className="flex justify-center items-center h-16 w-16 relative bg-network-logo bg-cover bg-no-repeat bg-center">
              <img src="/live-sports-logo-4.png" alt="" className="w-10" />
            </div>
          </div>

          <div className="text-gray-300 text-xs">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2