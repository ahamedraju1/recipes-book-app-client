import React from 'react';
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide_1 from '../assets/slider_1.jpg'
import slide_2 from '../assets/slider_2.jpg'
import slide_3 from '../assets/slider_3.jpg'

const Slider = () => {


    return (
        <div className='mt-20'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPreview={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                
                className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
            >
                <SwiperSlide>
                    <img src={slide_1} alt="slider_1" className='w-full h-auto object-cover rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_2} alt="slide_2" className='w-full h-auto object-cover rounded-2xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_3} alt="slide_3" className='w-full h-auto object-cover rounded-2xl'/>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;