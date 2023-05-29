import React from 'react'
const RoadMap = () => {
  const [collapseFirst, setCollapseFirst] = React.useState(false)
  const [collapseSecond, setCollapseSecond] = React.useState(false)
  const [collapseThird, setCollapseThird] = React.useState(false)
  return (
    <div className="flex flex-col lg:flex-row" id="roadmap-part">
      <div className="basis-1/2 relative xl:min-h-[1400px] min-h-[320px] py-10 px-6 bg-[#F8CAA0] lg:pt-32 pb-0 lg:pl-20 pr-0">
        <p className="font-extrabold text-[48px] leading-[56px] lg:leading-[96px] tracking-[-2.2px] lg:text-6xl xl:text-[80px] text-[#202025]">
          Roadmap
        </p>
        <div className="mt-10 bg-[#FE6768] rounded-[48px] flex w-[192px] h-[72px] justify-center items-center">
          <img src="/arrow.png" alt="arrow" className="object-cover"></img>
        </div>
        <img
          src="/roadmap.png"
          width={'688px'}
          className="absolute bottom-0 right-0 "
        />
      </div>
      <div className="px-6 py-10 bg-white basis-1/2 xl:py-15 2xl:py-20 lg:px-20">
        <ul className="text-[32px] relative transition duration-100 text-[#3C2C2D] font-extrabold tracking-[-0.02em] roadmap-ui-text">
          Already Done
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            AI art generator - operational and connected to external GPUs
          </li>
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Working platform
          </li>
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            User profiles
          </li>
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Gallery
          </li>
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Rating system
          </li>
          <li className={collapseFirst ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Comments, direct messaging, and comments system
          </li>
          <img
            className="absolute  top-[8px] right-[0] cursor-pointer"
            onClick={() => setCollapseFirst(!collapseFirst)}
            alt="minus"
            src="/minus circle.png"
            width={'24px'}
            height={'24px'}
          />
        </ul>
        <ul className="text-[32px] relative text-[#3C2C2D] mt-20 font-extrabold tracking-[-0.02em]">
          Q3, 2023
          <li className={collapseSecond ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            TGE
          </li>
          <li className={collapseSecond ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            CEX listings (Aiming for Binance)
          </li>
          <li className={collapseSecond ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Chatbot Integrations
          </li>
          <li className={collapseSecond ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Staking platform live
          </li>
          <img
            className="absolute  top-[8px] right-[0] cursor-pointer"
            onClick={() => setCollapseSecond(!collapseSecond)}
            alt="minus"
            src="/minus circle.png"
            width={'24px'}
            height={'24px'}
          />
        </ul>
        <ul className="text-[32px] relative text-[#3C2C2D] mt- font-extrabold tracking-[-0.02em] mt-20">
          Q4, 2024
          <li className={collapseThird ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Client-side software to harness distributed GPU power
          </li>
          <li className={collapseThird ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Third party wallet for Miners
          </li>
          <li className={collapseThird ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Mint NFT Collections
          </li>
          <li className={collapseThird ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            Continue to scale infrastructure
          </li>
          <li className={collapseThird ? 'hidden' : 'roadmap-li-text'}>
            <img src="/Ellipse 2.png" width={'24px'} alt="ellipse" />
            New roadmap announced
          </li>
          <img
            className="absolute  top-[8px] right-[0] cursor-pointer"
            onClick={() => setCollapseThird(!collapseThird)}
            alt="minus"
            src="/minus circle.png"
            width={'24px'}
            height={'24px'}
          />
        </ul>
      </div>
    </div>
  )
}
export default RoadMap
