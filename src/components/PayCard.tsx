import React, { useState } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import parse from "html-react-parser";
import { tokenData } from '../config';
import { useAppContext } from '../context/state';
import WalletModal from './WalletModal';
import ScanModal from './ScanModal';
import SignModal from './SignModal';
const PayCard = () => {
    const [tab, setTab] = useState('eth')
    const [activeTab, setActiveTab] = useState(0)
    const {walletModalContext, scanModalContext, signInModalContext} = useAppContext();
    const [showModal, setShowModal] = walletModalContext
    const [scanModalShow, setScanModalShow] = scanModalContext
    const [signInModal, setSignInModal] = signInModalContext
    const days = 4; const hours = 12; const minutes = 15; const seconds = 34;
    const [crypto, setCrypto] = useState(0);
    const [shibart, setShibart] = useState(0);
    const cryptoValueChange = (e: React.ChangeEvent<any>) => {
        if (e.target.value == Number(e.target.value))
            setCrypto(e.target.value)
    }
    const [dropMenuShow, setDropMenuShow] = useState(false)
    return (
        <>       
            <div className='hidden md:block'>
                <Tabs value="html" >
                    <TabsHeader
                        className='p-0'>
                        {
                            tokenData.map((val, id) => (
                                <Tab
                                    key={id}
                                    value={id}
                                    className={activeTab === id ? "seletedTab p-0 border-b-3 border-solid border-[#000000] bg-brand-500 " : 'p-0 bg-brand-500  border-b-3 border-solid border-[#FFFFFF]'}
                                >
                                    <div
                                        onClick={() => { setActiveTab(id); setCrypto(0); }}
                                        className=
                                        {activeTab === id ?
                                            "h-20 p-2 flex flex-row gap-2 items-center justify-center cursor-pointer" :
                                            "h-20 p-2 flex flex-row gap-2 items-center justify-center cursor-pointer  "}>
                                        {activeTab === id ?
                                            <img src={val.activeIcon} alt={'image'} width={'20px'} height={'20px'} />
                                            : <img src={val.icon} alt={'image'} width={'20px'} height={'20px'} />}
                                        <p className={activeTab === id ?
                                            "uppercase text-sm sm:text-[16px] font-bold leading-none cursor-pointer text-[#202025]"
                                            : " uppercase text-sm sm:text-[16px] font-bold cursor-pointer text-primary-300 leading-none"}>{parse(val.name)}</p>
                                    </div>
                                </Tab>
                            ))
                        }
                    </TabsHeader>
                    <TabsBody>
                        {activeTab === 0 ?

                            <div className="w-full px-10 py-4 bg-brand-500 sm:py-6 lg:py-8 sm:px-20 lg:px-20">
                                <div className="grid grid-cols-2 grid-rows-2 px-2 py-2 bg-white lg:px-4 lg:py-2 sm:grid-cols-4 sm:grid-rows-1">
                                    <div className="flex flex-col">
                                        <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{tokenData[0].coinName} Balance</p>
                                        <p className="text-base font-bold sm:text-lg text-primary-700 text-bold">{tokenData[0].balance}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{tokenData[0].coinName} Balance</p>
                                        <p className="text-base sm:text-lg sm:text-[10px] font-bold text-primary-700 text-bold">${tokenData[0].nextPrice}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{tokenData[0].coinName} $ART price</p>
                                        <p className="text-base sm:text-lg sm:text-[10px] font-bold text-primary-700 text-bold">${tokenData[0].artPrice}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{tokenData[0].coinName} Balance</p>
                                        <p className="text-base sm:text-lg sm:text-[10px] font-bold text-primary-700 text-bold">${tokenData[0].listingPrice}</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-4 mt-12 w-full gap-[16px] sm:gap-[26.67px]'>
                                    <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                        <p className='text-3xl text-white sm:text-5xl'>{days}</p>
                                        <p className="text-sm sm:text-base text-secondary-300">days</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                        <p className='text-3xl text-white sm:text-5xl'>{hours}</p>
                                        <p className="text-sm sm:text-base text-secondary-300">hours</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                        <p className='text-3xl text-white sm:text-5xl'>{minutes}</p>
                                        <p className="text-sm sm:text-base text-secondary-300">minutes</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                        <p className='text-3xl text-white sm:text-5xl'>{seconds}</p>
                                        <p className="text-sm sm:text-base text-secondary-300">seconds</p>
                                    </div>
                                </div>
                                <div className='relative mt-12 bg-brand-300 h-[47px] rounded'>
                                    <div className='absolute flex items-center justify-center w-9/12 h-full rounded bg-primary-500'>
                                        <p className='text-xs text-white'>USDT RAISED $5900241.93/$6500000</p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row mt-[90px] gap-6 sm:gap-4'>
                                    <div className='basis-1/2'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#555555] text-sm font-bold'>You pay</p>
                                            <p className='text-sm font-bold text-primary-500'>MAX</p>
                                        </div>
                                        <div className='flex items-center justify-between p-1 border-2 rounded border-primary-700'>
                                            <input className='inputCrypto w-4/5 text-sm bg-brand-500 [&:has(:focus-visible)]:outline-none border-0 color-[#010101]' value={crypto} onChange={(e) => { cryptoValueChange(e) }} />
                                            <img src={tokenData[0].activeIcon} alt='image' width={'32px'} height={'32px'} />
                                        </div>
                                    </div>
                                    <div className='basis-1/2'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#555555] text-sm font-bold'>You receive</p>
                                        </div>
                                        <div className='flex items-center justify-between p-1 border-2 rounded border-primary-700'>
                                            <p className='text-sm color-[#010101]'>{shibart}</p>
                                            <img src={'/logo.png'} alt={'image'} width={'32px'} height={'32px'} />
                                        </div>
                                    </div>

                                </div>
                                <p className='text-sm text-[#555555] font-medium mt-1'>
                                    0.015 ETH is reserved for gas. The actual amount used will depend on the network.
                                </p>
                                <div className='flex items-center justify-center h-16 my-10 cursor-pointer bg-primary-500'>
                                    <p className='uppercase text-white text-[12px]'>buy now</p>
                                </div>
                            </div> :
                            tokenData.map((val, id) => (
                                <TabPanel key={id} value={id} className="p-0">
                                    <div className="w-full px-10 py-4 bg-brand-500 sm:py-8 md:py-6 sm:px-20 md:px-5 lg:px-20">
                                        <div className="grid grid-cols-2 grid-rows-2 px-6 py-4 bg-white lg:px-4 lg:py-2 sm:grid-cols-4 sm:grid-rows-1">
                                            <div className="flex flex-col">
                                                <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{val.coinName} Balance</p>
                                                <p className="text-base font-bold sm:text-lg text-primary-700 text-bold">{val.balance}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{val.coinName} Balance</p>
                                                <p className="text-base font-bold sm:text-lg text-primary-700 text-bold">${val.nextPrice}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{val.coinName} $ART price</p>
                                                <p className="text-base font-bold sm:text-lg text-primary-700 text-bold">${val.artPrice}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-primary-300 text-[13px] sm:text-[10px] font-bold">{val.coinName} Balance</p>
                                                <p className="text-base font-bold sm:text-lg text-primary-700 text-bold">${val.listingPrice}</p>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-4 mt-8 w-full gap-[16px] sm:gap-[26.67px]'>
                                            <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                                <p className='text-5xl text-white'>{days}</p>
                                                <p className="text-base text-secondary-300">days</p>
                                            </div>
                                            <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                                <p className='text-5xl text-white'>{hours}</p>
                                                <p className="text-base text-secondary-300">hours</p>
                                            </div>
                                            <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                                <p className='text-5xl text-white'>{minutes}</p>
                                                <p className="text-base text-secondary-300">minutes</p>
                                            </div>
                                            <div className='flex flex-col items-center justify-center py-3 bg-primary-500'>
                                                <p className='text-5xl text-white'>{seconds}</p>
                                                <p className="text-base text-secondary-300">seconds</p>
                                            </div>
                                        </div>
                                        <div className='relative mt-8 bg-brand-300 h-[47px] rounded'>
                                            <div className='absolute flex items-center justify-center w-9/12 h-full rounded bg-primary-500'>
                                                <p className='text-xs text-white'>USDT RAISED $5900241.93/$6500000</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row mt-[90px] gap-6 sm:gap-4'>
                                            <div className='basis-1/2'>
                                                <div className='flex justify-between'>
                                                    <p className='text-[#555555] text-sm font-bold'>You pay</p>
                                                    <p className='text-sm font-bold text-primary-500'>MAX</p>
                                                </div>
                                                <div className='relative flex items-center justify-between p-1 border-2 rounded border-primary-700'>
                                                    <input className='inputCrypto text-sm w-4/5 leading-8 bg-brand-500 [&:has(:focus-visible)]:outline-none border-0 color-[#010101]' value={crypto} onChange={(e) => { cryptoValueChange(e) }} />
                                                    <img src={val.activeIcon} className="absolute right-[5px]" alt={'image'} width={'32px'} height={'32px'} />
                                                </div>
                                            </div>
                                            <div className='basis-1/2'>
                                                <div className='flex justify-between'>
                                                    <p className='text-[#555555] text-sm font-bold '>You receive</p>
                                                </div>
                                                <div className='flex items-center justify-between p-1 leading-8 border-2 rounded border-primary-700'>
                                                    <p className='text-sm color-[#010101]'>0</p>
                                                    <img src={'/logo.png'} alt={'image'} width={'32px'} height={'32px'} />
                                                </div>
                                            </div>

                                        </div>
                                        <p className='text-sm text-[#555555] font-medium mt-1'>
                                            0.015 ETH is reserved for gas. The actual amount used will depend on the network.
                                        </p>
                                        <div className='flex items-center justify-center h-16 my-10 cursor-pointer bg-primary-500'>
                                            <p className='uppercase text-white text-[12px]'>buy now</p>
                                        </div>
                                    </div>
                                </TabPanel>

                            ))
                        }
                    </TabsBody>
                </Tabs>
            </div>
            <div className='block md:hidden'>
                <div className='bg-[#F8CAA0] p-6 flex flex-col relative'>
                    <p className='font-bold text-[#555555] text-[14px]'>Network</p>
                    <div className='mt-2 border-2 border-[#202025] w-full px-5 py-4 relative flex flex-row items-center gap-2 rounded'   onClick={()=>{setDropMenuShow(!dropMenuShow)}}>
                        <img src={tokenData[activeTab].activeIcon} alt={'image'} width={'20px'} height={'20px'} />
                        <p className="uppercase text-sm sm:text-[16px] font-bold leading-none cursor-pointer text-[#202025]">{parse(tokenData[activeTab].name)}</p>
                        <div 
                            className={dropMenuShow ? 'rotate-180 duration-200 absolute right-5' : 'duration-200 absolute right-5'}>
                            <img src="/down.png" width={'24px'} alt="down"></img>
                        </div>
                        {dropMenuShow ? 
                            <div className='absolute duration-200 top-[56px] left-[0px] bg-[#F8CAA0] flex flex-col w-full'>
                                {tokenData.map((val,id)=>(
                                    <div key={id} className='flex flex-row items-center gap-2 px-5 py-4' onClick={()=>{setActiveTab(id);setDropMenuShow(false)}}>
                                        <img src={val.activeIcon} alt={'image'} width={'20px'} height={'20px'} />
                                        <p className="uppercase text-sm sm:text-[16px] font-bold leading-none cursor-pointer text-[#202025]">{parse(val.name)}</p>
                                    </div>
                                ))}
                            </div>
                            :
                            null}
                    </div>
                    <div className='grid items-center justify-center grid-cols-2 grid-rows-2 gap-4 px-6 py-4 mt-6 bg-white rounded'>
                        <div className='flex flex-col'>
                            <p className='text-[#686A6C] text-[12px] font-bold'>
                                    {tokenData[activeTab].coinName} Balance
                            </p>
                            <p className='text-[#202025] text-[14px] font-bold'>
                                    {tokenData[activeTab].balance}
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#686A6C] text-[12px] font-bold'>
                                    Until Next Price
                            </p>
                            <p className='text-[#202025] text-[14px] font-bold'>
                                    {tokenData[activeTab].nextPrice}
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#686A6C] text-[12px] font-bold'>
                                    $ART Price
                            </p>
                            <p className='text-[#202025] text-[14px] font-bold'>
                                    {tokenData[activeTab].artPrice}
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#686A6C] text-[12px] font-bold'>
                                    Listing Price
                            </p>
                            <p className='text-[#202025] text-[14px] font-bold'>
                                    {tokenData[activeTab].listingPrice}
                            </p>
                        </div>
                    </div>            
                    <div className='grid grid-cols-4 gap-2 mt-8'>
                        <div className='bg-[#3C2C2D] p-3 justify-center items-center flex flex-col'>
                            <p className='font-extrabold text-white text-[32px]'>04</p>
                            <p className='font-bold text-[#F8CAA0] text-[12px]'>days
                            </p>
                        </div>
                        <div className='bg-[#3C2C2D] p-3 justify-center items-center flex flex-col'>
                            <p className='font-extrabold text-white text-[32px]'>12</p>
                            <p className='font-bold text-[#F8CAA0] text-[12px]'>hours
                            </p>
                        </div>
                        <div className='bg-[#3C2C2D] p-3 justify-center items-center flex flex-col'>
                            <p className='font-extrabold text-white text-[32px]'>15</p>
                            <p className='font-bold text-[#F8CAA0] text-[12px]'>minutes
                            </p>
                        </div>
                        <div className='bg-[#3C2C2D] p-3 justify-center items-center flex flex-col'>
                            <p className='font-extrabold text-white text-[32px]'>34</p>
                            <p className='font-bold text-[#F8CAA0] text-[12px]'>seconds
                            </p>
                        </div>
                    </div> 
                    <div className='bg-[#8C7662] mt-6 relative justify-center flex items-center h-[47px]'>
                        <p className='text-white text-[10px] uppercase relative z-[2]'>
                            usdt raised: $5,900,241.93/$6,500,000
                        </p>
                        <div className='left-0 absolute  z-[1] w-3/4 h-full bg-[#3C2C2D]'>

                        </div>
                    </div>       
                    <div className='mt-12'>
                        <div className='flex justify-between'>
                            <p className='text-[#555555] text-[14px] font-bold'>You pay</p>
                            <p className='text-[#3C2C2D] text-[14px] font-bold'>MAX</p>
                        </div>
                        <div className='mt-1 border-2 border-[#202025] rounded px-4 py-3 flex justify-between'>
                            <input className='inputCrypto w-4/5 font-extrabold bg-brand-500 border-0 text-[12px]' value={crypto} onChange={(e) => { cryptoValueChange(e) }}>

                            </input>
                            <img src={tokenData[activeTab].activeIcon} alt='image' width={'32px'} height={'32px'} />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between'>
                            <p className='text-[#555555] text-[14px] font-bold'>You Receive</p>
                        </div>
                        <div className='mt-1 border-2 border-[#202025] rounded px-4 py-3 flex justify-between items-center'>
                            <p className='font-extrabold text-[12px]'>0</p>
                            <img src={'/logo.png'} alt={'image'} width={'32px'} height={'32px'} />
                        </div>
                    </div>
                    <p className='mt-4 text-[#555555] font-medium text-base leading-[24px]'>
                         0.015 ETH is reserved for gas. The actual amount used will depend on the network.
                    </p>
                    <button
                            onClick={() => {
                                setShowModal(true)
                            }}
                    className='mt-10 bg-[#3C2C2D] px-4 lg:px-8 lg:py-3 border-2 border-[#555555] rounded-md transition-all duration-300 hover:border-primary-200 text-[12px] py-5 tracking-[0.17em] text-white'>CONNECT WALLET</button>
                </div>
            </div>
            {showModal ?
                <WalletModal/>
                : null}
            {scanModalShow ?
               <ScanModal/> : null
            }
            {signInModal ?
                <SignModal></SignModal>
                : null}
        </>

    )
}

export default PayCard
