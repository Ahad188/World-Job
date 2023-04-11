import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
     const [open,setOpen] =useState(false)
     return (
           <header className='flex justify-between items-center text-2xl md:px-12 h-40 bg-slate-200'>
               <Link to="/"> World-<span className='text-purple-400 text-4xl'>Jobs</span> </Link>
               <nav>
                    <ul className={`md:flex absolute md:static duration-700 ${open ? 'top-24 bg-slate-200 text-center p-5':'-top-48'}`}>
                         <li><ActiveLink className='mr-4' to="/">Home</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/statistics">Statistics</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/jobs">Applied-Jobs</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/blog">Blog</ActiveLink></li>
                    </ul>
                   <div onClick={()=>setOpen(!open)} className='md:hidden'>
                         <span>{open === true ? <XMarkIcon className='h-6 w-6'/>:<Bars3Icon className='h-6 w-6'/>}</span>
                   </div>
               </nav>
               
               <ActiveLink to="/alljobs" className=''>Star Applying</ActiveLink>
           </header>
     );
};

export default Header;