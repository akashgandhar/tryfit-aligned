import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { navigation, Pagination } from 'swiper/modules'

export default function SliderGallery() {
  return (
    <div className='w-full md:w-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png"  /> 
            <h2 className='text-white md:text-2xl lg:text-3xl xl:text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover xl:text-2xl pb-6'>Branch Manager</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

{/* <div className=' flex flex-col font-aventa items-center bg-white/15 rounded-2xl backdrop-blur-sm'>
            <img src="/images/Branch_Manager.png" /> 
            <h2 className='text-white text-4xl mt-6'>Mr Grish</h2>
            <h2 className='text-btn_hover text-3xl pb-6'>Branch Manager</h2>
          </div> */}