import React from 'react'

const Section1 = () => {
  return (
    <div>
        <section className="flex flex-col text-center justify-items-center items-center px-16 py-20 text-white bg-black">
        <h4 className="uppercase text-sm text-hulu-green font-bold">
          Included in all plans
        </h4>
        <div className="font-bold text-5xl md:text-7xl mt-6">
          All The TV You Love
        </div>
        <div className="text-xl md:text-2xl max-w-3xl mt-6">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
          <div className="h-500 w-300 relative bg-cover1-img bg-cover bg-no-repeat bg-center">
            <div className="cover-grad absolute h-full w-full top-0 left-0"></div>
            <div className="absolute top-5 left-5 text-left">
              <div className="sub-title">Past & Current Seasons</div>
              <h3 className="font-light text-2xl">TV Shows</h3>
            </div>
          </div>
          <div className="h-500 w-300 relative bg-cover2-img bg-cover bg-no-repeat bg-center">
            <div className="cover-grad absolute h-full w-full top-0 left-0"></div>
            <div className="absolute top-5 left-5 text-left">
              <div className="sub-title">New & Classics</div>
              <h3 className="font-light text-2xl">Movies</h3>
            </div>
          </div>
          <div className="h-500 w-300 relative bg-cover3-img bg-cover bg-no-repeat bg-center">
            <div className="cover-grad absolute h-full w-full top-0 left-0"></div>
            <div className="absolute top-5 left-5 text-left">
              <div className="sub-title">Groundbreaking</div>
              <h3 className="font-light text-2xl">Hulu Originals</h3>
            </div>
          </div>
          <div className="h-500 w-300 relative bg-cover4-img bg-cover bg-no-repeat bg-center">
            <div className="cover-grad absolute h-full w-full top-0 left-0"></div>
            <div className="absolute top-5 left-5 text-left">
              <div className="sub-title">Add-On</div>
              <h3 className="font-light text-2xl">Premiums</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section1