import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function Customer() {
  return (
    <section className='lg:mr-10 lg:ml-10 mr-5 ml-5 mb-32'>
        <h1 className="text-center font-bold text-3xl text-blue-700 lg:text-5xl mb-12">Customer</h1>
         
         <div id="reviewSlider">
    <Swiper
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
      <SwiperSlide>
      <ReviewCard></ReviewCard>
      </SwiperSlide>
 
      </Swiper>
    </div>
    </section>
  )
}
