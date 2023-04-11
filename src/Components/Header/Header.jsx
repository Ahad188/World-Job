import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
           <header className='md:flex justify-between items-center text-2xl md:px-12 h-40 bg-slate-200'>
               <Link to="/"> World-<span className='text-purple-400 text-4xl'>Jobs</span> </Link>
               <nav>
                    <ul className='md:flex'>
                         <li><ActiveLink className='mr-4' to="/">Home</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/statistics">Statistics</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/jobs">Applied-Jobs</ActiveLink></li>
                         <li><ActiveLink className='mr-4' to="/blog">Blog</ActiveLink></li>
                    </ul>
               </nav>
               
               <ActiveLink to="/alljobs" className=''>Star Applying</ActiveLink>
           </header>
     );
};

export default Header;