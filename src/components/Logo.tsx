import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-center gap-3">
        <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
        <p className="text-4xl">
          <span className=" text-primary-500">SHIB</span>
          <span className=" text-secondary-500">ART</span>
        </p>
      </div>
    </Link>
  )
}
export default Logo
