import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  cartAction,
  deleteCartItem,
  fetchCartItems,
  postCartItems,
} from "../store/cartSlice";

export default function Cart() {
  const ctx = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.items);
  const total = useSelector((state) => state.total);
  const totalItems = useSelector((state) => {
    let items = 0;
    state.items.forEach((i) => {
      items += i.quantity;
    });
    return items;
  });

  useEffect(() => {
    ctx.getCurrentSignedInUser((user) => {
      setUser(user);
    });
    console.log(user);
    dispatch(fetchCartItems(user));
  }, [ctx, dispatch, user]);
  const onAddItemHandler = (item) => {
    // fetch('http://localhost:8080/add-item-to-cart',{
    //   method:"POST",
    //   body:JSON.stringify({bookId:id,uid:user.uid}),
    //   headers:{'Content-Type':'application/json'}
    // })
    // .then()
    // .catch(err=>console.log(err))
    const data = { id: item._id.toString(), uid: user.uid };
    dispatch(postCartItems(data));
    dispatch(cartAction.addItem(item));
  };

  // useEffect(()=>{
  //   ctx.getCurrentSignedInUser((user)=>{
  //       console.log(user)
  //       fetch(`http://localhost:8080/get-cart-items/${user.uid}`)
  //       .then((res)=>{
  //         return res.json()
  //       })
  //       .then((data)=>{
  //         setCartItem(data.response)
  //       })
  //       .catch(err=>console.log(err))
  //   })
  // },[ctx])

  // useEffect(()=>{
  //   setCartItem(items)
  // },[items])

  const onRemoveItemHandler = (item) => {
    const info = { uid: user.uid, bookId: item._id.toString() };
    dispatch(deleteCartItem(info));
    dispatch(cartAction.removeItem(item));
  };

  const onCheckout = ()=>{
    const data ={
      name: 'Waleed',
      amount: 1,
      number: '7498608775',
      MUID: "MUID" + Date.now(),
      transactionId: 'T' + Date.now(),
  }
      fetch('https://book-haven-server-d4wl.onrender.com/payment',{
        method:"POST",
        body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
      })
      .then()
      .catch(err=>console.log(err))
     
  }
  

  // const onDeliveryChangeModeHandler = (e)=>{
  //   dispatch(cartAction.addDeliveryCharges(e.target.value))
  // }

  return (
    <>
      {cartItem.length === 0 && <p className=" align-middle text-center mt-32 font-bold">noting to show add some</p>}
      {cartItem.length !== 0 && (
        <main className=" grid lg:grid-cols-3 gap-12 mt-12 mb-12 lg:mr-10 lg:ml-10 mr-5 ml-5 min-h-screen">
          <div className="lg:col-span-2 p-4">
            <div className="flex justify-between items-center mb-7">
              <h1 className=" text-2xl font-bold">Shopping Cart</h1>
              <p>items</p>
            </div>

            <ul className=" space-y-5">
              {cartItem.map((cart) => {
                return (
                  <li
                    key={cart?.item._id.toString()}
                    className="grid lg:grid-cols-5 md:grid-cols-5 max-sm:grid-cols-3 sm:grid-cols-5 gap-4 justify-between items-center border-t border-b p-4"
                  >
                    <img
                      className=" max-w-[5rem] max-sm:col-span-4"
                      src={cart.item.imageURL}
                      alt=""
                    />
                    <div className=" col-span-2">
                      <div>
                        <h2 className=" font-bold">{cart.item.title}</h2>
                      </div>
                    </div>
                    <div className=" flex space-x-2 items-center">
                      <button
                        onClick={() => {
                          onRemoveItemHandler(cart.item);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="M240-440v-80h480v80H240Z" />
                        </svg>
                      </button>
                      <input
                        value={cart.quantity}
                        className=" font-bold w-5"
                        disabled
                        type="text"
                      />
                      <button
                        onClick={() => {
                          onAddItemHandler(cart.item);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <p className=" font-bold">{cart.item.price}</p>
                    </div>

                  </li>
                );
              })}
            </ul>
          </div>

          <div className=" bg-slate-100 p-4 rounded-md space-y-8">
            <h1 className="text-2xl font-bold">Summary</h1>

            <div className="flex justify-between">
              <h1>ITEMS {totalItems}</h1>
              <p>{total}</p>
            </div>

            <select className=" w-full h-8" name="" id="">
              <option value={0}>Select Delivery Mode</option>
              <option value={0}>
                Super Fast Delivery Prime User Only (Free Delivery)
              </option>
              <option value={50}>
                Normal Delivery (₹50 Delivery charges extra)
              </option>
            </select>

            <div className="flex justify-between">
              <h1 className="font-bold text-md">TOTAL PRICE</h1>
              <p className="font-bold text-md">₹{total}</p>
            </div>
            <button onClick={()=>{onCheckout()}} className=" w-full h-12 rounded-md text-white font-medium hover:bg-purple-600 bg-purple-700">
              Checkout
            </button>
          </div>
        </main>
      )}
    </>
  );
}
