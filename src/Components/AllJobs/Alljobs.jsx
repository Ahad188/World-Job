import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const Alljobs = ( ) => {
      const data = useLoaderData()
       
       
     return (
          <div className=' p-10 md:w-[1240px] m-auto'>
               <h1 className='text-center text-3xl mt-5 mb-5'>All job Here</h1>
               {
                    data.map(allJob=><Jobs
                    key={allJob.id}
                    allJob={allJob}
                    ></Jobs>)
               }
                
          </div>
     );
};

export default Alljobs;