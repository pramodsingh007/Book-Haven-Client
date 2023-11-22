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
    <section className="mt-32 mb-32 lg:mr-10 lg:ml-10 mr-5 ml-5">
    <h1 className="text-center font-bold text-3xl text-blue-700 lg:text-5xl">Best Seller Books</h1>
    <div className="mt-12 grid lg:grid-cols-4 max-sm:grid-cols-1 place-items-center sm:grid-cols-2 gap-12 md:grid-cols-3">
    </div>
    <div id="swipper">
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
      return <SwiperSlide key={book._id}><Link to={`/book/${book._id}`}><BookCard  title={book.title} imageURL={book.imageURL} price={book.price}/></Link></SwiperSlide>
    })}  
      </Swiper>
    </div>

    </section>
  )
}
