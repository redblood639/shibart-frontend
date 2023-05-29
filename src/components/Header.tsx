import React, { useContext, useState } from 'react'
import { walletList } from '../config'
import Logo from './Logo'
import WalletModal from './WalletModal'
import ScanModal from './ScanModal'
import SignModal from './SignModal'
import Link from 'next/link'
import { useAppContext } from '../../src/context/state'
const Header = () => {
  const { walletModalContext, scanModalContext, signInModalContext } =
    useAppContext()
  const [showModal, setShowModal] = walletModalContext
  const [scanModalShow, setScanModalShow] = scanModalContext
  const [signInModal, setSignInModal] = signInModalContext
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 md:px-10 py-6 border-b-2 border-[#E1E2E2] tracking-[2.72px]">
        <Logo />
        <div>
          <ul className="hidden lg:flex flex-row text-xs  gap-2 sm:gap-5 md:gap-[20px] lg:gap-[60px] font-extrabold items-center">
            <li className="cursor-pointer">
              <Link href="https://uniswap.io">BUY $ART</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="https://docs.google.com/document/d/1RbQczVVOjoHFzwivRfQSpK66b3dofENvHcSQF9WW7fQ/edit?usp=sharing">
                WHITEPAPER
              </Link>
            </li>
            <li className="cursor-pointer">
              {' '}
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowModal(true)
                }}
                className="px-4 py-2 lg:px-8 lg:py-3 border-2 border-[#555555] rounded-md transition-all duration-300 hover:border-primary-200 hover:text-primary-200"
              >
                CONNECT WALLET
              </button>
            </li>
          </ul>
          <div
            className={
              menuOpen
                ? 'flex relative lg:hidden flex-col gap-[0px] cursor-pointer'
                : 'flex lg:hidden flex-col gap-[6px] cursor-pointer'
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={
                menuOpen
                  ? ' duration-200 rotate-45 w-6 h-[3px] rounded-lg bg-primary-500'
                  : 'w-6 h-[3px] rounded-lg bg-primary-500'
              }
            ></div>
            <div
              className={
                menuOpen
                  ? ' duration-200 -rotate-45 w-6 h-[3px] rounded-lg bg-primary-500'
                  : 'w-[18px] h-[3px] rounded-lg bg-primary-500'
              }
            ></div>
            {menuOpen ? (
              <ul className="right-2 top-5 lg:flex duration-200 transition flex-col text-xs gap-[60px] bg-[#FFFFFF] border-[#E1E2E2] p-2 font-extrabold items-center absolute">
                <li className="p-2 cursor-pointer">BUY $ART</li>
                <li className="p-2 cursor-pointer">WHITEPAPER</li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      {showModal ? <WalletModal /> : null}
      {scanModalShow ? <ScanModal /> : null}
      {signInModal ? <SignModal></SignModal> : null}
    </>
  )
}

export default Header
