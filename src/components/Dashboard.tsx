import React from 'react';
import Slider from './Swiper';
import Client from './Client';
import Service from './Service';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className='bg-gray-600 relative'>
      <Slider />
      <div className='container mx-auto'>
        <div className='bg-slate-900 flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 lg:px-20 py-10'>
          <div className='flex items-center lg:mr-8'>
            <div className='max-w-max h-auto block'>
              <img src='/assets/logo.png' alt='Logo' className='h-12 lg:h-auto' />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:ml-4 text-white'>
              <h3 className='pt-3 lg:pt-0 lg:pl-4 text-center lg:text-left'>Let's Talk About Business</h3>
              <p className='pl-4 text-center lg:text-left'>It is a long established fact that a reader</p>
            </div>
          </div>
          <div className='flex items-center text-lg text-white my-4 lg:my-0'>||</div>
          <div className='flex flex-col items-center lg:flex-row lg:items-center lg:text-lg text-white'>
            <div className='relative z-0 mb-4 lg:mb-0 lg:mr-8'>
              <div className='text-left'>
                <h6 className='font-m'>Help Desk 24/7</h6>
                <p>(+62)123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Client />
      <Footer />
    </div>
  );
};

export default Dashboard;
