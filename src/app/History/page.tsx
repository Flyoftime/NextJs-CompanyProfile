'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
const History = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className='w-screen h-screen bg-[#535353]'>
        <div className='bg-cover bg-no-repeat w-full h-full'>
          <img className='bg-cover bg-local h-[30vh]' src='assets/Go Younjung.jpg'>
          </img>
          <h1> History</h1>
        </div>
      </div>
      <Navbar scrollTop={scrollTop} />

    </div>
  )
}

export default History