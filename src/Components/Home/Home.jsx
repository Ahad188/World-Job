import React from 'react';
import { Link } from 'react-router-dom';
import { FaFirefox,FaBitcoin,FaCodepen,FaFantasyFlightGames} from "react-icons/fa";

const Home = () => {
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
                    <div className='bg-gray-300 w-80 p-10 mb-4 rounded-3xl  '>
                         <FaFirefox className='h-10 w-10 m-auto'></FaFirefox>
                         <h2 className='text-2xl text-center mt-3 mb-3'>Account & Finance</h2>
                         <p className='text-center'>300 Jobs Available</p>
                    </div>
                    <div className='bg-gray-300 w-80 p-10 mb-4 rounded-3xl  '>
                         <FaBitcoin className='h-10 w-10 m-auto'></FaBitcoin>
                         <h2 className='text-2xl text-center mt-3 mb-3'>Creative Design</h2>
                         <p className='text-center'>200 Jobs Available</p>
                    </div>
                    <div className='bg-gray-300 w-80 p-10 mb-4 rounded-3xl  '>
                         <FaCodepen className='h-10 w-10 m-auto'></FaCodepen>
                         <h2 className='text-2xl text-center mt-3 mb-3'>Marketing & sales</h2>
                         <p className='text-center'> 350 Jobs Available</p>
                    </div>
                    <div className='bg-gray-300 w-80 p-10 mb-4 rounded-3xl'>
                         <FaFantasyFlightGames className='h-10 w-10 m-auto'></FaFantasyFlightGames>
                         <h2 className='text-2xl text-center mt-3 mb-3'>Engineering Job</h2>
                         <p className='text-center'>450 Jobs Available</p>
                    </div>
               </div>
           </section>

          </div>
           
           
     );
};

export default Home;