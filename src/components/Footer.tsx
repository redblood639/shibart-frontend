import React from 'react'
import Link from 'next/link'
const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  const [showCookieButton, setShowCookieButton] = React.useState(true)
  return (
    <footer className="w-full pt-20 bg-white border-t-2 lg:border-0 border-primary-200">
      <div className="container px-6 py-10 sm:mx-auto lg:p-0">
        <div className="flex flex-col justify-between w-full mb-5 md:flex-row">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row items-center gap-3">
              <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
              <p className="text-4xl font-black font">
                <span className=" text-primary-500">SHIB</span>
                <span className=" text-secondary-500">ART</span>
              </p>
            </div>
            <p className="text-primary-300 text-[20px] text-bold md:text-2xl font-bold">
              AI generated art of Shiba
            </p>
          </div>
          <div className="flex flex-row justify-between w-full gap-5 mt-10 md:w-auto md:justify-end md:gap-20 lg:gap-40 md:mt-0">
            <ul>
              <span className="uppercase text-[12px] leading-6 tracking-[0.17em] text-primary font-extrabold mb-2">
                shibart
              </span>
              <li className="text-[#686A6C] sm:text-base text-sm font-medium mt-[16px] lg:mt-6">
                How to buy
              </li>
              <li className="text-[#686A6C] sm:text-base text-sm font-medium mt-[16px] lg:mt-6">
                <Link href="https://docs.google.com/document/d/1RbQczVVOjoHFzwivRfQSpK66b3dofENvHcSQF9WW7fQ/edit?usp=sharing">
                  Whitepaper
                </Link>
              </li>
            </ul>
            <ul>
              <span className="uppercase  text-[12px] leading-6 tracking-[0.17em] text-primary font-extrabold mb-2">
                Info
              </span>
              <li className="text-[#686A6C] sm:text-base text-sm font-medium mt-[16px] lg:mt-6">
                <Link href="/FAQ">FAQ</Link>
              </li>
              <li className="text-[#686A6C] sm:text-base text-sm font-medium mt-[16px] lg:mt-6">
                <Link href="#roadmap-part" onClick={handleScroll}>
                  Roadmap
                </Link>
              </li>
              <li className="text-[#686A6C] sm:text-base text-sm font-medium mt-[16px] lg:mt-6">
                <Link href="#referral-part" onClick={handleScroll}>
                  Referral
                </Link>
              </li>
            </ul>
            <ul>
              <span className="uppercase invisible sm:visible text-[12px] leading-6 tracking-[0.17em] text-primary font-extrabold mb-2">
                Social
              </span>
              <li className="flex sm:justify-start justify-end gap-[10px]  items-center mt-[16px] lg:mt-6">
                <img src="/twitter.png" width={'20px'} height={'18px'} />
                <p className="text-[#686A6C] sm:text-[14px] text-sm  hidden sm:block font-medium ">
                  <Link href="https://twitter.com/shibartAI">Twitter</Link>
                </p>
              </li>
              <li className="flex sm:justify-start justify-end gap-[10px]  items-center mt-[16px] lg:mt-6">
                <img src="/discord.png" width={'18px'} height={'18px'} />
                <p className="text-[#686A6C] sm:text-[14px] text-sm  hidden sm:block font-medium ">
                  <Link href="https://discord.gg/QSrHBRgr7h%7C">Discord</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-[1px] border-[#E1E2E2]">
        <div className="container px-6 py-10 lg:mx-auto lg:p-0">
          <div className="flex flex-col justify-between w-full px-6 py-10 lg:flex-row lg:px-0">
            <p className="text-primary-200 text-[14px]">
              Copyright @ 2023 ShibArt
            </p>
            <div className="flex  mt-[26px] lg:mt-0 flex-row float-right justify-between gap-x-2 items-center lg:gap-x-10">
              <p className="text-primary-200 text-[14px]">
                {' '}
                We use cookies for better service.
              </p>
              <button
                className={
                  showCookieButton
                    ? 'border-2 border-primary-500 px-5 py-2 text-primary-500 font-bold cursor-pointer rounded'
                    : 'hidden'
                }
                onClick={() => setShowCookieButton(false)}
              >
                ACCEPT
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
