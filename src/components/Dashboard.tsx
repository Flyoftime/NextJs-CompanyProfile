import React from 'react'
import Slider from './Swiper'
import Client from './Client'
import Service from './Service'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div className='bg-gray-600 relative'>
        <Slider/>
        <div className='container'>
            <div className='bg-slate-900 flex w-full px-20 py-10 justify-between items-center'>
                <div className='flex'>
                    <div className='max-w-max h-auto block items-center'>
                       <img src='/assets/logo.png'></img>
                    </div>
                    <div className='flex-warp leading-1 items-center justify-center text-white '>
                        <h3 className='pt-3 pl-4'> Lets Talk About Business</h3>
                        <p className='pl-4'> It is a long established fact that a reader</p>
                    </div>
                </div>
                <div className='flex items-center text-lg'>||</div>
                <div className='flex flex-warp items-center justify-between text-lg-right text-center break-words'>  
                    <div className='relative z-0'>
                        <div className='flex items-center'>
                            <div className='inline-block text-left'>
                                <h6 className='font-m'>Help Desk 24/7</h6>
                                <p>(+62)123456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Service/>
        <Client/>
        <Footer/>
    </div>
  )
}

export default Dashboard