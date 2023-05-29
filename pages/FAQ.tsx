import React, { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { faqs } from '../src/config'
const FAQ = () => {
  const [collapse, setCollapse] = useState(new Array(10).fill(true))
  // useEffect(()=>{
  //     const tempArray = Array.from(collapse)
  //     collapse[0] = ;
  //     setCollapse([tempArray])
  // },[])
  return (
    <main>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 bg-[#F8CAA0] relative py-10 px-6 md:py-32 md:px-20 md:min-h-[1592px]">
          <p className="font-extrabold text-[48px] leading-[56px] lg:leading-[96px] tracking-[-2.2px] lg:text-6xl xl:text-[80px] text-[#202025]">
            FAQ
          </p>
          <div className="mt-10 bg-[#FE6768] rounded-[48px] flex w-[192px] h-[72px] justify-center items-center">
            <img src="/arrow.png" alt="arrow" className="object-cover"></img>
          </div>
          <img
            className="absolute bottom-0 left-0"
            src="/FAQ_DOG.png"
            width={'772px'}
            alt=""
          />
        </div>
        <div className="flex-col px-20 basis-1/2">
          <div className="pb-[96px]">
            {faqs.map((val, id) => (
              <ul
                key={id}
                className="text-[32px] relative text-[#3C2C2D] mt-[96px] font-extrabold tracking-[-0.02em]"
              >
                {val.question}
                <li className={collapse[id] ? 'hidden' : 'faq-li-text'}>
                  {val.answer}
                </li>
                <img
                  className="absolute  top-[8px] right-[0] cursor-pointer"
                  onClick={() => {
                    const tempArray = Array.from(collapse)
                    tempArray[id] = !tempArray[id]
                    setCollapse(tempArray)
                  }}
                  alt="minus"
                  src="/minus circle.png"
                  width={'24px'}
                  height={'24px'}
                />
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
export default FAQ
