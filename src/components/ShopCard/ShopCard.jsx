import { useContext, useEffect, useState } from "react"
import AuthContext from "../../store/AuthContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction, postCartItems } from "../../store/cartSlice";


// eslint-disable-next-line react/prop-types
export default function ShopCard(props) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()

  const ctx = useContext(AuthContext);
  useEffect(()=>{
    ctx.getCurrentSignedInUser((user)=>{
      setUser(user)
    })

  },[ctx])
  const onAddItemHandler = (item)=>{
      // fetch('http://localhost:8080/add-item-to-cart',{
      //   method:"POST",
      //   body:JSON.stringify({bookId:id,uid:user.uid}),
      //   headers:{'Content-Type':'application/json'}
      // })
      // .then()
      // .catch(err=>console.log(err))
      const data = {id:item._id.toString(),uid:user.uid}
      dispatch(postCartItems(data))
      dispatch(cartAction.addItem(item))

     
  }
  return (
        <div className="w-[15rem] h-[25rem] rounded-md shadow-2xl p-5 shadow-slate-500 space-y-2">
        <Link  to={`/book/${props.book._id.toString()}`}>
            <img className="w-full " src={props.book.imageURL} alt="bookImg" />
            <h1 className="font-medium text-sm lg:text-base overflow-hidden h-12">{props.book.title}</h1>
            </Link>
            {/* <p className=" text-xs lg:text-sm">{bookDescription.length>8?bookDescription.split(0,1)+".....":bookDescription}</p> */}
            <button onClick={()=>{onAddItemHandler(props.book)}} className="bg-red-700 text-white p-2 w-full">Add to Cart</button>
        </div>
   
  )
}
