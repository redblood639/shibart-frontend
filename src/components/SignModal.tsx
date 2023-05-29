import { Dispatch, SetStateAction } from 'react'
import { useAppContext } from '../../src/context/state'
const SignModal = () => {
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
            <div className="border-0 rounded-lg w-[350px] sm:w-[600px] md:w-[800px] h-[250px] sm:h-[500px] shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
              <div className="relative hidden sm:block basis-1/2 bg-[#F8CAA0] p-2 sm:p-5">
                <div className="flex">
                  <img src="/logo.png" width={20} height={20} alt="logo" />
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
              <div className="relative flex flex-col items-center justify-center w-full p-5 bg-black sm:basis-1/2 sm:p-5">
                <div className="w-full">
                  <p className="text-2xl font-extrabold text-white">
                    Sign the message
                    <span>
                      {' '}
                      <br></br>in your wallet to continue
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-primary-300">
                    ShibArt uses this signature to verify that you are the owner
                    of this Ethereum address.
                  </p>
                  <div className="flex justify-between gap-3 mt-5">
                    <button className="border-2 py-2 min-w-[160px] border-[#F7FBFA] rounded uppercase text-white">
                      disconnect
                    </button>
                    <button className="border-2 py-2 min-w-[160px] bg-[#F7FBFA] rounded uppercase text-primary-500">
                      continue
                    </button>
                  </div>
                  <div className="flex justify-between mt-5">
                    <p className="text-sm text-primary-300">New to Ethereum?</p>
                    <div className="flex gap-1">
                      <p className="text-sm text-white">Learn about wallet?</p>
                      <img
                        src="/arrow right.png"
                        width={'12px'}
                        height={'12px'}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </div>
      <div className="block md:hidden">
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-[375px] mt-10">
            <div className="border-0 rounded-lg w-[375px] shadow-lg relative flex flex-col outline-none focus:outline-none">
              <div className="bg-[#F8CAA0] py-10 px-6 relative">
                <img
                  src="/black_close.png"
                  className="absolute right-4 top-4"
                  width={'48px'}
                  height={'48px'}
                  alt="close"
                  onClick={() => setSignInModal(false)}
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
                <p className="text-[32px] text-white font-extrabold tracking-[-0.02em] leading-[40px]">
                  Sign the message in your wallet to continue
                </p>
                <p className="mt-6 text-sm text-primary-300">
                  ShibArt uses this signature to verify that you are the owner
                  of this Ethereum address.
                </p>
                <div className="flex flex-col justify-between gap-3 mt-6">
                  <button className="border-2 py-3 min-w-[160px] font-extrabold border-[#F7FBFA] tracking-[0.17em] text-[12px] rounded uppercase text-white">
                    disconnect
                  </button>
                  <button className="border-2 py-3 min-w-[160px] font-extrabold bg-[#F7FBFA] rounded uppercase text-primary-500 tracking-[0.17em] text-[12px] ">
                    continue
                  </button>
                </div>
                <div className="mt-[42px] flex justify-between">
                  <p className="text-[14px] text-primary-300 font-bold cursor-pointer">
                    New to Ethereum?
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm text-white ">Learn about wallet?</p>
                    <img
                      src="/arrow right.png"
                      className="cursor-pointer"
                      width={'12px'}
                      height={'12px'}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignModal
