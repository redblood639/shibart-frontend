import { Dispatch, SetStateAction } from 'react'
import { useAppContext } from '../../src/context/state'

const ScanModal = () => {
  const { walletModalContext, scanModalContext, signInModalContext } =
    useAppContext()
  const [showModal, setShowModal] = walletModalContext
  const [scanModalShow, setScanModalShow] = scanModalContext
  const [signInModal, setSignInModal] = signInModalContext
  return (
    <>
      <div className="hidden md:block">
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            {/*content*/}
            <div className="border-0 rounded-lg w-[350px] sm:w-[600px] md:w-[800px] h-[250px] sm:h-[500px] shadow-lg relative flex flex-row bg-white outline-none focus:outline-none">
              <div className="relative hidden sm:block basis-1/2 bg-[#F8CAA0] p-2 sm:p-5">
                <div className="flex">
                  <img src="/logo.png" height={20} width={20} alt="logo" />
                  <p className="ml-2 text-sm font-black uppercase text-primary-500 sm:text-base">
                    shibart
                  </p>
                </div>
                <div className="absolute pr-2 bottom-4 sm:pr-5">
                  <div className="flex flex-row justify-between">
                    <p className="text-sm font-extrabold  sm:text-4xl text-primary-500">
                      Connect wallet.
                    </p>
                    <p className="m-auto w-[64px] sm:min-w-[60px] md:min-w-[48px] lg:min-w-[48px] xl:min-w-[64px] ">
                      <button className=" relative w-full h-[36px] sm:h-[32px] md:h-[32px] lg:h-[36px] bg-white flex justify-center items-center rounded-full px-2 sm:px-4 py-1 sm:py-2">
                        <div className="relative flex items-center justify-center w-full h-full">
                          <img
                            src="/arrow.png"
                            alt="arrow"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 83vw"
                          />
                        </div>
                      </button>
                    </p>
                  </div>
                  <p className="mt-2 text-[8px] sm:text-sm font-bold text-brand-300">
                    Choose how you want to connect. There are several wallet
                    providers.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center w-full p-2 bg-black sm:basis-1/2 sm:p-2">
                <div className="w-full px-7">
                  <p className="mt-10 text-lg font-bold text-left text-white">
                    Scan to connect
                  </p>
                </div>
                <img src="QR_code.png" className="w-9/12 mt-2" alt="qrcode" />
                <img
                  src="/back.png"
                  alt="back"
                  width={30}
                  className="absolute cursor-pointer top-2 right-2"
                  onClick={() => {
                    setScanModalShow(false)
                    setShowModal(true)
                  }}
                />
                <p className="mt-5 text-white">Don't you have a wallet app?</p>
                <div className="absolute w-full p-2 bottom-2 sm:p-5">
                  <div className="py-1 cursor-pointer bg-primary-700 rounded-xl sm:py-2">
                    <p className="text-center text-white">
                      I dont have a wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </div>
      <div className="block md:hidden">
        <div className="fixed inset-0 z-50 flex justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-[375px] mt-10">
            <div className="border-0 rounded-lg w-[375px] shadow-lg relative flex flex-col outline-none focus:outline-none">
              <div className="bg-[#F8CAA0] py-10 px-6 relative">
                <img
                  src="/black_close.png"
                  className="absolute right-4 top-4"
                  width={'48px'}
                  height={'48px'}
                  alt="close"
                  onClick={() => setScanModalShow(false)}
                />
                <div className="flex flex-row items-center gap-3">
                  <img
                    src="/logo.png"
                    className=""
                    width={'52px'}
                    height={'52px'}
                    alt="logo"
                  />
                  <p className="text-[#3C2C2D] text-[31.2px] font-black uppercase">
                    shibart
                  </p>
                </div>
                <p className="mt-10 text-[48px] text-[#322c2d] font-extrabold tracking-[-0.02em] leading-[48px]">
                  Connect wallet.
                </p>
                <div className="w-[148px] mt-6">
                  <button className=" relative w-full h-[52px] bg-white flex justify-center items-center rounded-full px-2 sm:px-4 py-1 sm:py-2">
                    <div className="relative flex items-center justify-center w-full h-full">
                      <img src="/arrow.png" alt="arrow" width={'98px'} />
                    </div>
                  </button>
                </div>
                <p className="mt-6 text-[#8C7662] font-bold text-[16px]">
                  Choose how you want to connect. There are several wallet
                  providers.
                </p>
              </div>
              <div className="bg-[#010101] py-10 px-6">
                <p className="text-[32px] text-white font-extrabold">
                  Scan to connect
                </p>
                <div className="mt-10 flex justify-center gap-[16px] items-center">
                  <img src="/placeholder.png" />
                  <p className="text-white text-[15px] tracking-[-0.01em] font-bold">
                    Scan to Connect
                  </p>
                </div>
                <img
                  src="QR_code.png"
                  className="mt-6"
                  width={'327px'}
                  alt="qrcode"
                />
                <p className="mt-10 text-center text-white">
                  Don't you have a wallet app?
                </p>
                <div className="rounded-[12px] mt-10 bg-[#202025] flex justify-center items-center py-4 px-6">
                  <p className="text-[#E1E2E2] font-medium leading-[20px]">
                    I don't have a wallet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ScanModal
