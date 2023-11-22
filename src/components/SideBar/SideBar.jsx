import { useContext } from 'react';
import { AiFillBook, AiFillLock,AiOutlineCloudUpload,AiOutlineShopping, AiOutlineUser, AiTwotonePieChart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

export default function SideBar() {
  const ctx = useContext(AuthContext)
  const navigate = useNavigate()
  const logOutHandler = ()=>{
    ctx.logOut()
    .then(()=>{
      alert('logout successfully')
      navigate('/')
    })
    .catch(err=>console.log(err))
  }
  return ( 
    <nav className=' bg-slate-300 h-screen min-w-[15rem] p-8'>
      <ul className=' flex  flex-col  space-y-7'>
        <li>
        <Link to={'/admin/dashboard'} className='flex items-center space-x-2'>
        <AiTwotonePieChart size={20} />
          <p>Dashboard</p>
        </Link>
        </li>
        
        <li>
        <Link to={'/admin/dashboard/upload'} className='flex items-center space-x-2'>
        <AiOutlineCloudUpload size={20} />
          <p>Upload Book</p>
        </Link>
        </li>
        <li>
        <Link to={'/admin/dashboard/manage'} className='flex items-center space-x-2'>
        <AiFillBook size={20} />
          <p>Manage Books</p>
        </Link>
        </li>
        <li className='flex items-center space-x-2'>
        <AiOutlineUser size={20} />
          <p>Users</p>
        </li>
        <li className='flex items-center space-x-2'>
        <Link className='flex items-center space-x-2' to={'/admin/dashboard/orders'}><AiOutlineShopping size={20} />
          <p>Orders</p></Link>
        </li>
        <li>
        <Link onClick={logOutHandler} className='flex items-center space-x-2'>
        <AiFillLock size={20} />
          <p>Log Out</p>
        </Link>
        </li>
       
      </ul>
    </nav>
  )
}
