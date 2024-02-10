import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className='bg-cover bg-no-repeat p-12 text-center relative w-full'>
            <img src='/assets/Go Younjung.jpg' width={1000} ></img>
                <div className=' absolute bg-fixed bottom-0 left-0 right-0 top-0 h-full w-full'> 
                    <div className='flex h-full items-center justify-center'>
                       <h1 className=' mb-4 text-4xl font-semibold'>Go Youn Jung  No Opacity</h1>
                    </div>
                </div>
            
        </SwiperSlide>
        <SwiperSlide className='bg-cover bg-no-repeat p-12 text-center relative w-full'>
            <img src='/assets/Go Younjung.jpg' width={1000} className='opacity-50' ></img>
                <div className=' absolute bg-fixed bottom-0 left-0 right-0 top-0 h-full w-full'> 
                    <div className='flex h-full items-center justify-center'>
                       <h1 className='mb-4 text-4xl font-semibold'>Go Youn Jung V2 Opacity 0.5</h1>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide className='bg-cover bg-no-repeat p-12 text-center relative w-full'>
            <img src='/assets/Go Younjung.jpg' width={1000} className='opacity-70' ></img>
                <div className=' absolute bg-fixed bottom-0 left-0 right-0 top-0 h-full w-full'> 
                    <div className='flex h-full items-center justify-center'>
                       <h1 className='mb-4 text-4xl font-semibold'>Go Youn Jung V3 Opacity 0.7</h1>
                    </div>
                </div>
            
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
