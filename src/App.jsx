import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Sell from './routes/Sell';
import Shop from './routes/Shop';
import Layout from './routes/layout/Layout';
import Details from './routes/Details';
import AdminLayout from './routes/Admin/Layout/AdminLayout';
import Dashboard from './routes/Admin/Dashboard';
import UploadBook from './routes/Admin/UploadBook';
import EditBook from './routes/Admin/EditBook';
import Manage from './routes/Admin/Manage';
import AuthContext, { authInfo } from './store/AuthContext';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import AuthRoute from './routes/authRoute/AuthRoute';
import ForgetPassword from './routes/ForgetPassword';
import Cart from './routes/Cart';
import Orders from './routes/Orders';
import {Provider} from 'react-redux';
import cartStore from './store/cartSlice';

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
    path:'/',
    element:<Home/>,
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'shop',
    element:<Shop/>
  },
  {
    path:'sell',
    element:<Sell/>
  },
  {
    path:'orders',
    element:<Orders/>
  },
  {
    path:'cart',
    element:<Cart/>
  },
  {
    path:'book/:id',
    loader:({params})=>{
      return fetch(`https://book-haven-server-d4wl.onrender.com/find-by-id/${params.id}`)
        .then((res)=>{
            return res.json()
        })
        .catch(err=>console.log(err))
    },
    element:<AuthRoute><Details/></AuthRoute>
  }
]
},
{
  path:'/admin/dashboard',
  element:<AdminLayout/>,
  children:[
    {
    path:'/admin/dashboard',
    element:<AuthRoute><Dashboard/></AuthRoute>
  },
  {
    path:'edit-book',
    loader:({request})=>{
      const id = new URL(request.url).searchParams.get(('id'))
      const uid = new URL(request.url).searchParams.get(('uid'))
      return fetch(`https://book-haven-server-d4wl.onrender.com/admin/find-by-id?id=${id}&uid=${uid}`)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        return data.response
      })
      .catch(err=>{
        console.log('not authorized')
        console.log(err)
      })
    },
    element:<AuthRoute><EditBook/></AuthRoute>
  },
  {
    path:'manage',
    element:<AuthRoute><Manage/></AuthRoute>
  },
  {
    path:'upload',
    element:<AuthRoute><UploadBook/></AuthRoute>
  }
]
},
{
  path:'/signup',
  element:<SignUp/>
},
{
  path:'/signin',
  element:<SignIn/>
},
{
  path:'/forget-password',
  element:<ForgetPassword/>
}
])


function App() {
  return (
    <AuthContext.Provider value={authInfo}>
      <Provider store={cartStore}>
      <RouterProvider router={router}/>
      </Provider>
    </AuthContext.Provider>
  )
}

export default App
