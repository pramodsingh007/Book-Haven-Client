import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../store/AuthContext";

export default function Manage() {
  const [books,setBooks]  = useState([])
  const [user, setUser] = useState(null);

  const ctx = useContext(AuthContext);
  useEffect(() => {
    ctx.getCurrentSignedInUser((user) => {
      setUser(user);
      fetch(`http://localhost:8080/admin/get-all-books/${user.uid}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setBooks(data.response)
    })
    .catch(err=>console.log(err))
      
    });
  }, [ctx]);

 

  const deleteHandler = (id)=>{
    console.log(id)
    fetch(`http://localhost:8080/admin/delete?id=${id}&uid=${user.uid}`,{
      method:"DELETE",
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      alert('Book Successfully Deleted')
      console.log(data)
    })
    .catch(err=>console.log(err))
  }

  return (
    <main className="mt-12 w-full mr-10 ml-10">
      <h1 className=" font-bold text-3xl mb-12">Manage Books</h1>
      <table className="shadow-lg bg-white w-full">
  <thead>
  <tr>
    <th className="bg-blue-100 border text-left px-8 py-4">No.</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Book Name</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Author Name</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Category</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Edit/Manage</th>
  </tr>
  </thead>
  <tbody>
  {books.map((book)=>{
    return (<tr key={book._id}>
    <td className="border px-8 py-4">{books.indexOf(book)+1}</td>
    <td className="border px-8 py-4">{book.title}</td>
    <td className="border px-8 py-4">{book.authorName}</td>
    <td className="border px-8 py-4">{book.category}</td>
    <td className="border px-8 py-4">{book.price}</td>
    <td className="border px-8 py-4">
      <Link className=" text-blue-800" to={`/admin/dashboard/edit-book?id=${book._id}&uid=${user.uid}`}>edit</Link>
      <button className=" bg-red-600 text-white p-1 ml-2 rounded-md" onClick={()=>{deleteHandler(book._id)}}>delete</button>
      </td>
  </tr>)
  })}
  </tbody>
</table>
    </main>
  )
}
