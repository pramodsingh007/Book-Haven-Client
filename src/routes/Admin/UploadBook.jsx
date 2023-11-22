import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../store/AuthContext";

export default function UploadBook() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [hasError, setHasError] = useState(false);
  const ctx = useContext(AuthContext);
  useEffect(() => {
    ctx.getCurrentSignedInUser((user) => {
      setUser(user);
    });
  }, [ctx]);

  const bookCategories = [
    "Action",
    "Fiction",
    "Education",
    "Adventure",
    "Finance",
    "Bussiness",
    "Horror",
    "Biography",
  ];
  const submitClicked = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const price = form.price.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    console.log(form.price.value);
    fetch("http://localhost:8080/post-book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title:title,
        authorName:authorName,
        imageURL:imageURL,
        category:category,
        bookDescription:bookDescription,
        bookPDFURL:bookPDFURL,
        price:price,
        user: user,
        uid:user.uid
      }),
    })
      .then(() => {
        navigate("/admin/dashboard/manage");
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  };
  return (
    <main className=" w-full mr-10 ml-10 mt-12 mb-12">
      <h1 className="font-bold text-3xl mb-12">Upload a book</h1>
      <form action="" className=" space-y-4">
        <div className="grid gap-6 grid-cols-2">
          <div>
            <label htmlFor="title">Book Title</label>
            <input
              className="text-base w-full h-10 p-2 bg-gray-300"
              type="text"
              name="title"
              placeholder="Book Name"
            />
          </div>
          <div>
            <label htmlFor="authorName">Author Name</label>
            <input
              className="text-base w-full h-10  p-2 bg-gray-300"
              type="text"
              name="authorName"
              placeholder="Author Name"
            />
          </div>
        </div>

        <div className="grid gap-6 grid-cols-3">
          <div>
            <label htmlFor="imageURL">Book Image URL</label>
            <input
              className="text-base w-full h-10  p-2 bg-gray-300"
              type="text"
              name="imageURL"
              placeholder="Book Image URL"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              className="text-base w-full h-10  p-2 bg-gray-300"
              type="number"
              name="price"
              placeholder="Enter Book Price"
            />
          </div>
          <div>
            <label htmlFor="category">Book Category</label>
            <select
              className="text-base w-full rounded-md h-10 bg-gray-300 p-2"
              name="category"
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="bookDescription">Book Description</label>
          <textarea
            name="bookDescription"
            placeholder="Write your book description"
            className="text-base  w-full h-full p-2 bg-slate-300"
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="bookPDFURL">Book PDF URL</label>
          <input
            type="text"
            className=" text-base w-full h-full p-2 bg-slate-300"
            placeholder="Book Pdf Url"
            name="bookPDFURL"
          />
        </div>
        <button
          onClick={submitClicked}
          type="submit"
          className=" bg-blue-600 p-2 rounded-md text-white"
        >
          Upload Book
        </button>
      </form>
      {hasError && (
        <p className=" text-red-700 text-center">
          invalid input please check before submitting
        </p>
      )}
    </main>
  );
}
