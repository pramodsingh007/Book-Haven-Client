import {NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {twMerge} from 'tailwind-merge';
import cross from '../../../src/assets/images/cross.png';
import menu from '../../../src/assets/images/menu.png';
import brand from '../../../src/assets/images/brand.png';
import AuthContext from "../../store/AuthContext";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const ctx = useContext(AuthContext)
      const [user,setUser] = useState(null)
  useEffect(()=>{
    ctx.getCurrentSignedInUser((user)=>{
      setUser(user)
    })
  },[ctx])
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/shop",
      link: "Shop",
    },
    {
      path: "/admin/dashboard",
      link: "Sell Your Book",
    }
    
  ];

  {!user&&navItems.push({
    path: "/signin",
    link: "Sign In",
  },
  {
    path: "/signup",
    link: "Sign Up",
  }
  )}
  {
    user&&navItems.push({
      path:'/cart',
      link:'Cart'
    },
    {
      path: "/orders",
      link: "Orders",
    })
  }

  const [isNavToggle,setNavToggle] = useState(false)
  const [isVisible,setIsVisible] = useState(false)
  const toggle = ()=>{
    setNavToggle(!isNavToggle)
    setIsVisible(!isVisible)
  }

  return (
    <header className=" sticky top-0 z-50 p-5 bg-slate-50">
      <nav className=" flex justify-between items-center">
        <img className=" w-44"  src={brand}/>
        <div className={twMerge('bg-slate-50 lg:relative md:absolute sm:absolute max-sm:absolute max-sm:left-0 max-sm:top-[5rem] lg:top-0 md:top-[5rem] sm:top-[5rem] sm:left-0 sm:w-full max-sm:w-full sm:p-4 max-sm:p-4 lg:w-auto md:w-full lg:flex-row  flex flex-col space-y-8 lg:space-x-16  lg:flex md:flex  lg:space-y-0',isVisible?'flex md:flex':'hidden md:hidden')}>
          {navItems.map(({ path, link }) => (
            <NavLink onClick={()=>{setIsVisible(false);setNavToggle(false)}} to={path} className={({isActive})=>isActive?'text-blue-800':''} key={path}>
              {link}
            </NavLink>
          ))}
          <div className="flex space-x-4 float-right">
        {user&&<p className="flex items-center"><AiOutlineUser size={20} className="mr-1" />{user.displayName}</p>}
        
        </div>
        </div>
        <span className=" cursor-pointer">
        {isNavToggle?<img className="lg:hidden md:flex sm:flex max-sm:flex" onClick={toggle} src={cross}/>:<img className=" lg:hidden md:flex sm:flex max-sm:flex" onClick={toggle} src={menu}/>}
        </span>
        
        
      </nav>
    </header>
  );
}
