import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import Catagories from '../Catagories/Catagories';

const Home = () => {
     const [catagories, setCategory] = useState([]);
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data=> setCategory(data))
     },[])
     return (
          <div>
               {/* // baneer section */}
               <section className='p-10 grid md:grid-cols-2 bg-gray-100'>
               <div className='p-10 ml-10'>
                    <h1 className='text-6xl font-bold mb-10 leading-sung'>One step <br /> Closer To Your <br /> <span className='text-purple-600 font-bold'>Dream Job</span></h1>
                    <p className='text-base'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job <br /> application from start to finish.</p>
                    <button className='mt-10 border p-2 bg-purple-600 text-white hover:bg-purple-400'>Get Started</button>
               </div>
               <div className='p-10'>
                    <img src="baner.jpg" alt="" />
               </div>
           </section>
           {/* jobs section */}
           <section className='mt-5'>
               <h1 className='text-center text-5xl font-bold '>Job Category List</h1>
               <p className='text-center mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
               <div className='m-auto p-10 md:flex justify-evenly '>
                     {
                         catagories.map((data,index)=><Catagories
                         key={index}
                         data={data}
                         ></Catagories>)
                     }
               </div>
           </section>

          </div>
           
           
     );
};

export default Home;