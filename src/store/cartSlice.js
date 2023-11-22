import { configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total:0
};

const cartReducer = {
  addItem(state, action) {
    //checking if cart is empty
    if (state.items.length === 0) {
      state.items = [{ item: action.payload, quantity: 1 }];
      state.total = action.payload.price
      return;
    }

    // checking if cart already has some items
    //if has then checking that similar item exist or not
    let alreadyHas = false;
    state.items.forEach((item) => {
      if (item.item._id.toString() === action.payload._id.toString()) {
        alreadyHas = true; //if found then true
      }
    });

    //if item already has
    if (alreadyHas) {
      const foundedItemIndex = state.items.findIndex(
        (item) => item.item._id.toString() === action.payload._id.toString()
      );
      state.items[foundedItemIndex].quantity += 1;
      state.items = [...state.items];
      state.total += action.payload.price
      return;
    } else {
      //if new item

      state.items = [...state.items, { item: action.payload, quantity: 1 }];
      state.total += action.payload.price
      
      return
    }
  },
  removeItem(state, action) {
    const indexOfItemToRemove = state.items.findIndex(
      (item) => item.item._id.toString() === action.payload._id.toString()
    );
    const itemToRemove = state.items[indexOfItemToRemove];
    //checking if the quantity if 0 then remove item
    if (itemToRemove.quantity === 1) {
      state.items = state.items.filter(
        (item) => item.item._id.toString() !== action.payload._id.toString()
      );
      state.total = state.total - action.payload.price
      return;
    }
    //checking if the quantity is greater then 1 then only decrease the quantity
    if (itemToRemove.quantity > 1) {
      state.items[indexOfItemToRemove].quantity -= 1;
      state.items = [...state.items];
      state.total = state.total - action.payload.price
      return;
    }
  },
  deleteItem(state,action){
    const indexOfItemToDelete = state.items.findIndex(
        (item) => item.item._id.toString() === action.payload._id.toString()
      );
      const itemToDelete = state.items[indexOfItemToDelete];
      state.total -= itemToDelete.item.price * itemToDelete.quantity
    state.items = state.items.filter(
        (item) => item.item._id.toString() !== action.payload._id.toString()
      );
      return
  },
  addDeliveryCharges(state,action){
    state.total += +action.payload
    return
  }
};


export const fetchCartItems = createAsyncThunk('fetchCartItems',async(user)=>{
    console.log('feching cart items')
  
    const res = await fetch(`https://book-haven-server-d4wl.onrender.com/get-cart-items/${user.uid}`)
    const data  = await res.json()
    return data.response

})
export const postCartItems = createAsyncThunk('postCartItems',async(data)=>{
    console.log('posting cart items')
    console.log(data)
     await fetch('https://book-haven-server-d4wl.onrender.com/add-item-to-cart',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({bookId:data.id,uid:data.uid})
      })
})

export const deleteCartItem = createAsyncThunk('deleteCartItem',async({uid,bookId})=>{
  console.log("delete item handler")
  console.log(uid,bookId)
  await fetch('https://book-haven-server-d4wl.onrender.com/delete-item-from-cart',{
        method:"DELETE",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({uid,bookId})
      })
})


const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: cartReducer,
  extraReducers:(builder)=>{
    builder.addCase(fetchCartItems.fulfilled,(state,action)=>{
        state.items = action.payload
        let count = 0
        action.payload.forEach((i)=>{
          count+=i.quantity*i.item.price
        })
        state.total = count
    });
   

    
  }
});

export const cartAction = cartSlice.actions;

const cartStore = configureStore({ reducer: cartSlice.reducer });

export default cartStore;
