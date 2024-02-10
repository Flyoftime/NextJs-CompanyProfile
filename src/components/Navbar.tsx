
import React from 'react'

const Navbar = ({scrollTop}:{scrollTop:any})  => {
  return (
    <nav className={scrollTop < 50 ? `navbar bg-transparent max-w-screen w-full flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-12 py-2 transition-colors duration-200` : 'navbar bg-[#181C28] max-w-screen w-full flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-12 py-2'}>
  <div className="flex-1">
    <img src='/assets/logo.png' alt="" className='h-12'/>
  </div>
  <div className="flex gap-4">
    <a href="/" className='text text-white font-bold hover:underline transition-all duration-100'>Opening Hours</a>
    <a href='/about' className='text text-white font-bold hover:underline transition-all duration-100'>Customer Support dong</a>
  </div>
</nav>
  )
}

export default Navbar