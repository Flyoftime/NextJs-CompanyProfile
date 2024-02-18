
import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = ({scrollTop}:{scrollTop:any})  => {
  return (
    <nav className={scrollTop < 50 ? `navbar bg-transparent max-w-screen w-full flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-12 py-2 transition-colors duration-200` : 'navbar bg-[#181C28] max-w-screen w-full flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-12 py-2'}>
  <div className="flex-1">
    <img src='/assets/logo.png' alt="" className='h-12'/>
  </div>
  <div className="flex gap-4">
  <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-white border-none">Profile</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#e0dede] text-gray-900 rounded-box w-52">
    <li><a href='/History'>History</a></li>
    <li><a href='/visi-misi'>Visi Misi</a></li>
    <li><a>Identity</a></li>
    <li><a>Bussiness Process</a></li>
    <li><a>Rubbers Type</a></li>
  </ul>
</div>
    <a href="/pelanggan" className='text text-white font-bold hover:underline transition-all duration-100'>Pelanggan</a>
    <a href="/" className='text text-white font-bold hover:underline transition-all duration-100'>Products</a>
    <a href="/" className='text text-white font-bold hover:underline transition-all duration-100'>Gallery</a>
    <a href='/about' className='text text-white font-bold hover:underline transition-all duration-100'>Customer Support</a>
    <ThemeSwitch/>
  </div>
 
</nav>
  )
}

export default Navbar