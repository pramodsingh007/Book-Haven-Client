import {useEffect, useState } from "react";
import ShopCard from "../components/ShopCard/ShopCard";



export default function Shop() {

  const [books,setBooks] = useState([])
  useEffect(()=>{
    fetch('https://book-haven-server-d4wl.onrender.com/all-books')
    .then((response)=>{
      if(!response.ok){
        throw new Error('something is wrong')
      }
      return response.json()
    })
    .then((books)=>{
      setBooks(books.response)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <main className="mt-12 lg:mr-10 lg:ml-10 mr-5 ml-5">
      <h1 className=" mb-12 text-center font-bold text-blue-700 text-3xl lg:text-5xl">All Books Are Here</h1>
      <div className=" grid lg:gap-3 gap-2 grid-cols-1 max-sm:grid-cols-2 md:grid-cols-4 max-md:grid-cols-3 lg:grid-cols-6 ">
      {books.map((book)=><ShopCard key={book._id.toString()} book={book}/>)}

      </div>
    </main>
  )
}
