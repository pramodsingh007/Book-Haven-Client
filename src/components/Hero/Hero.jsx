import SwipperCard from '../SwipperCard/SwipperCard'

export default function Hero() {
  return (
    <section className=' bg-emerald-300 pt-28 pr-5 pl-5 lg:pl-10 lg:pr-10 pb-24 '>
      <div className=" grid gap-10 grid-cols-1 lg:grid-cols-2">
      <div className=" space-y-5">
      <h1 className=" leading-snug text-4xl lg:text-6xl font-bold">Buy and sell your books <span className="text-blue-700">for the best price</span></h1>
      <p className=" text-sm font-medium text-gray-500">Find and read more books you will love. and keep track of the 
        books you want to read. Be part of the worlds largest community of book lovers on Goodreads.
      </p>
      <input type="text" placeholder="Search a book here" name="search" className=" bg-gray-200 h-12  w-full md:w-72 lg:w-72 outline-none p-3"/><button className="bg-blue-700 p-3 text-white w-28 lg:w-36">Search</button>
      </div>
      <div className="hidden lg:flex justify-center"><SwipperCard/></div>
      </div>
    </section>
  )
}
