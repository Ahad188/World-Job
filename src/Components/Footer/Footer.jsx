import React from 'react';

const Footer = () => {
     return (
          <div className='px-10 text-center bg-slate-600 mt-32'>
               <div className='md:grid grid-cols-5'>
                    <div className='p-10'>
                         <h1 className='text-2xl text-white mb-3'> World-Jobs</h1>
                         <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    
                    </div>
                    <div className='p-10'>
                         <h1 className='text-2xl text-white mb-3'>Company</h1>
                         <li className='list-none'>About</li>
                         <li className='list-none'>Work</li>
                         <li className='list-none'>Latest News</li>
                         <li className='list-none'>Careers</li>
                    </div>
                    <div className='p-10'>
                         <h1 className='text-2xl text-white mb-3'>Products</h1>
                         <li className='list-none'>ProType</li>
                         <li className='list-none'>Plane & Pricing</li>
                         <li className='list-none'>Costumers</li>
                         <li className='list-none'>Integrations</li>
                    </div>
                    <div className='p-10'>
                         <h1 className='text-2xl text-white mb-3'>Support</h1>
                         <li className='list-none'>  Help Daks</li>
                         <li className='list-none'>Sales</li>
                         <li className='list-none'>Developer</li>
                    </div>
                    <div className='p-10'>
                         <h1 className='text-2xl text-white mb-3'>Contact</h1>
                         <p>524 Broadway , NYC <br /> +1 777 - 978 - 5570</p>
                    </div>
               </div>
          </div>
     );
};

export default Footer;