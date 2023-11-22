export default function BookCard({title,imageURL,price}) {
  return (
        <div className=" w-[15rem] space-y-2 h-[20rem] p-4 text-black">
            <img className="rounded-md" src={imageURL} alt="book" />
            <p className=" text-sm font-medium">{title}</p>
            <p>₹{price}</p>
        </div>
  )
}
