import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
           <header className='md:flex justify-between items-center text-2xl md:px-12 h-40 bg-slate-400'>
               <a href="">Logo</a>
               <nav>
                    <ul className='md:flex'>
                         <li><Link className='mr-4' to="/">Home</Link></li>
                         <li><Link className='mr-4' to="/statistics">Statistics</Link></li>
                         <li><Link className='mr-4' to="/jobs">Applied Jobs</Link></li>
                         <li><Link className='mr-4' to="/blog">Blog</Link></li>
                    </ul>
               </nav>
               <button>Star Applying</button>
           </header>
     );
};

export default Header;