import { useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";
import {Link} from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';




export default function BestSeller() {
  const [books,setBooks] = useState([])

  

  useEffect(()=>{
    fetch('https://book-haven-server-d4wl.onrender.com/all-books')
    .then((response)=>response.json())
    .then((books)=>{setBooks(books.response.slice(0,6))}
      )
    
  },[])

  return (
   
    <div id="otherSwipper">
    <Swiper
       
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {books.map((book)=>{
      return <SwiperSlide key={book._id}><Link to={`book/${book._id}`}><BookCard  title={book.title} imageURL={book.imageURL} price={book.price}/></Link></SwiperSlide>
    })}  
      </Swiper>
    </div>
  )
}
