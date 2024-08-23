import React from 'react'
import { NavbarMenu } from '../../mockData/data'
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa6";
import { RiMenuLine } from "react-icons/ri";
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
    const [open, setOpen] = React.useState(false)
  return (
      <>
      <nav className='container  justify-center'>
 <div className="container  flex justify-center items-center py-8">
         {/* Logo */}
         <div className='text-2xl flex items-center p-2 font-bold uppercase'>
             <FaDumbbell />
             <p>Dhadak</p>
             <p className='text-secondary'>gYm</p>
         </div>
         {/*menu*/}
         <div className='hidden md:block'>
             <ul className='flex justify-around gap-6'>
                 {
           NavbarMenu.map((item) => {
               return (
                   <li key={item.id}>
                       <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font'>
                             {item.title}
                       </a>
                   </li>
               )})
       }
             </ul>
         </div>
        {/*icon*/}
                  <div className='container flex justify-center items-center'>
                      <button className='text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200'>
                        <IoSearchOutline className='text-2xl'/>  
                      </button>
                      <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                        <PiShoppingCartSimpleFill/>
                      </button>
                      <button className='hover:bg-primary text-primary font-semibold hover:text-white p-1 rounded-lg border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
                          Login
                      </button>        
        </div>
                  
         {/*mobile hamburger menu section*/}
                  <div className='md:hidden' onClick={()=>setOpen(!open)}>
                   <RiMenuLine className='text-4xl cursor-pointer'/>   
                  </div>
 </div>
          </nav>
          {/*mobile sidebar section*/}
          <ResponsiveMenu open={open} />
      </> 
  )
}

export default Navbar