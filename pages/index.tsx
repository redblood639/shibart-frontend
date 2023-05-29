import React, { useState } from 'react'
import Header from '../src/components/Header'
import PayCard from '../src/components/PayCard'
import Footer from '../src/components/Footer'
import RoadMap from '../src/components/RoadMap'
import RefferalSection from '../src/components/RefferalSection'
import Link from 'next/link'
const Home = () => {
  const [day, setDay] = useState(1)
  return (
    <main>
      <Header />
      <div className="flex w-full lg:justify-center lg:items-center">
        <div className="container flex flex-col gap-5 px-6 mx-auto lg:px-0 lg:flex-row lg:gap-10 lg:gap-5 2xl:gap-20 mt-14 lg:justify-between ">
          <p className=" text-[48px] leading-[56px] lg:leading-[96px] tracking-[-2.2px] lg:text-6xl xl:text-[80px] sm:m-0 break-keep text-[#202025] lg:text-primary-500 font-extrabold">
            AI generated <br /> art of shiba
          </p>
          {/* <p className='w-[117px] lg:transform-none transition-transform lg:w-[192px] '>
                        <button className=' relative w-full h-[44px] lg:h-[64px] bg-secondary-500 flex justify-center items-center rounded-full px-4 py-2'>
                            <div className='relative flex items-center justify-center w-full h-full'>
                                <img
                                    src="/arrow.png"
                                    className='object-cover'
                                    alt="arrow"
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </button>
                    </p> */}
          <div className="flex-grow mt-3 lg:mt-5 max-w-[450px] lg:max-w-[350px] flex flex-col lg:items-center justify-center md:justify-between">
            <p className="text-base font-medium text-[#686A6C]">
              We are revolutionizing the world of digital art with the power of
              stable diffusion & blockchain
            </p>
            <div className="flex items-center mt-6 lg:mt-20">
              <div className="flex gap-5 cursor-pointer lg:justify-center lg:items-center">
                <p className="uppercase font-extrabold text-sm text-[#202025] lg:text-primary-500 ">
                  whitepaper
                </p>
                <Link href="https://docs.google.com/document/d/1RbQczVVOjoHFzwivRfQSpK66b3dofENvHcSQF9WW7fQ/edit?usp=sharing">
                  <img
                    src="/placeholder.png"
                    alt="placeholder"
                    className="w-[25px] h-[25px]"
                    width={'25px'}
                    height={'25px'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 lg:flex-row">
        <div className="basis-1/2 relative bg-[#F1F4F4] max-h-[769px] flex justify-center items-center">
          <img
            src="/artwork.png"
            className="w-full max-w-[769px]"
            alt="artwork"
          />
        </div>
        <div className="basis-1/2">
          <PayCard />
        </div>
      </div>
      <div className="container px-6 mx-auto mt-3 lg:mt-20 md:p-0">
        <p className="text-primary-500 text-[48px] leading-[56px] lg:leading-[96px] tracking-[-2.2px] lg:text-6xl xl:text-[80px] font-extrabold">
          Gallery.
        </p>
        <div className="flex flex-col justify-between md:flex-row lg:mt-5">
          <div>
            <p className="text-2xl font-bold text-primary-300">
              Shiba art you'll love
            </p>
          </div>
          <div className="flex justify-between w-full gap-2 mt-8 lg:mt-5 md:mt-0 sm:w-auto">
            <p
              className={day === 1 ? 'date-tab selected' : 'date-tab'}
              onClick={() => setDay(1)}
            >
              {' '}
              1 day
            </p>
            <p
              className={day === 7 ? 'date-tab selected' : 'date-tab'}
              onClick={() => setDay(7)}
            >
              {' '}
              7 days
            </p>
            <p
              className={day === 30 ? 'date-tab selected' : 'date-tab'}
              onClick={() => setDay(30)}
            >
              {' '}
              30 days
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-10 md:flex-row lg:my-16">
          <input
            className="border-2 border-primary-200 font-semibold text-[14px] flex-grow p-3 lg:px-8 placeholder:text-[#686A6C]"
            placeholder="Shiba inu wearing sunglasses"
          />
          <div className="flex justify-between gap-2 lg:justify-center md:justify-start md:gap-5">
            <button className="uppercase w-full bg-primary-500 text-white text-[12px tracking-[0.17em] py-3 px-10 rounded-md hover:bg-primary-700 transition-all duration-300">
              Generate
            </button>
            <button className="border min-w-[48px] bg-white text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-all duration-300">
              <svg
                className="w-full h-full p-4 transition-all duration-300 fill-primary-500 hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="20"
                height="20"
                viewBox="0 0 478.703 478.703"
              >
                <path d="m454.2 189.101-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 0 0-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 0 0-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0 0 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0 0 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z" />
                <path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 md:gap-y-11 lg:gap-y-16 gap-x-2 md:gap-x-6 lg:gap-x-10">
          {Array.from(new Array(8)).map((_, key) => (
            <div className="relative w-full h-full rounded-2xl" key={key}>
              <img
                src="/avatar.png"
                width={'0px'}
                height={'0px'}
                className="object-cover w-full h-auto"
                alt="avatar"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center my-8 lg:y-16">
          <button className="flex flex-row items-center justify-center gap-3 py-5 rounded-md bg-primary-500 px-9">
            <p className="text-base tracking-widest text-white uppercase">
              explorer more
            </p>
            <span className="bg-[#E1E2E2] rounded-full py-1 px-2 items-center font-extrabold font-inter color-primary">
              {' '}
              109{' '}
            </span>
          </button>
        </div>
      </div>
      <RoadMap />
      <RefferalSection />
      <Footer />
    </main>
  )
}

export default Home
