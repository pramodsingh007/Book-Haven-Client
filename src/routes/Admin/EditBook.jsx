import { useLoaderData, useNavigate} from "react-router"
import { useSearchParams } from "react-router-dom"


export default function EditBook() {
  const bookCategories = ['Action','Fiction','Adventure','Finance','Bussiness','Horror','Biography'] 
  const [query] = useSearchParams()
  const navigate = useNavigate()
  const data = useLoaderData()
  const editHandler = (e)=>{
      e.preventDefault()
      const form = e.target.form
      const title = form.title.value
      const authorName = form.authorName.value
      const imageURL = form.imageURL.value
      const category = form.category.value
      const bookDescription = form.bookDescription.value
      const bookPDFURL = form.bookPDFURL.value
      const price = form.price.value
      const id = query.get('id')
      const uid = query.get('uid')
      fetch(`http://localhost:8080/edit-book?id=${id}&uid=${uid}`,{
        method:"PATCH",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,authorName,imageURL,category,bookDescription,bookPDFURL,price})
      })
      .then((res)=>{
        console.log(res)
        navigate('/admin/dashboard/manage')
      })
      .catch(err=>console.log(err))
  }
  
  return (
    <main className="mt-12 mr-10 ml-10 w-full">
        <h1 className="font-bold text-3xl mb-12">Edit Book</h1>
        <form action="" className=" space-y-4">
        <div className="grid gap-6 grid-cols-2">
        <div>
          <label htmlFor="title">Book Title</label>
          <input defaultValue={data.title} className="text-base w-full h-10 p-2 bg-gray-300"  type="text" name="title" placeholder="Book Name"/>
        </div>
        <div>
          <label htmlFor="authorName">Author Name</label>
          <input defaultValue={data.authorName} className="text-base w-full h-10  p-2 bg-gray-300" type="text" name="authorName" placeholder="Author Name"/>
        </div>
        </div>

        <div className="grid gap-6 grid-cols-3">
        <div>
          <label htmlFor="imageURL">Book Image URL</label>
          <input defaultValue={data.imageURL} className="text-base w-full h-10  p-2 bg-gray-300" type="text" name="imageURL" placeholder="Book Image URL"/>
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input
              defaultValue={data.price}
              className="text-base w-full h-10  p-2 bg-gray-300"
              type="number"
              name="price"
              placeholder="Enter Book Price"
            />
          </div>
        <div>
          <label htmlFor="category">Book Category</label>
          <select defaultValue={data.category} className="text-base w-full rounded-md h-10 bg-gray-300 p-2" name="category" >
            {
            bookCategories.map((category)=><option key={category} value={category}>{category}</option>)
            
            }
          </select>
        </div>
        
        </div>
        <div>
          <label htmlFor="bookDescription">Book Description</label>
          <textarea defaultValue={data.bookDescription} name="bookDescription" placeholder="Write your book description" className="text-base  w-full h-full p-2 bg-slate-300"  cols="100" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="bookPDFURL">Book PDF URL</label>
          <input defaultValue={data.bookPDFURL} type="text" className="text-base w-full h-full p-2 bg-slate-300" placeholder="Book Pdf Url" name="bookPDFURL" />
        </div>
        <button onClick={editHandler} type="submit" className=" bg-blue-600 p-2 rounded-md text-white">Update Book</button>
      </form>
    </main>
  )
}
