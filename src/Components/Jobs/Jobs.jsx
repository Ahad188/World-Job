import React from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = ({allJob}) => {
     const navigate = useNavigate()
      const {image,jobTitle,companyName,jobStatus,address,salary,id} = allJob;
     //  console.log(id)
     return (
          <div>
               <div>
               <div className='border border-gray-400 md:flex justify-evenly   rounded-xl m-auto mb-5 mt-5 p-10'>
                      <img className='w-96' src={image} alt="" />
               <div>
               <div className="p-5">
               <h2 className='text-2xl font-bold mb-2'>{jobTitle}</h2>
               <h3 className='text-xl font-medium mb-2'>{companyName}</h3>
               <button className='p-2 bg-slate-50'>{jobStatus}</button>
                <div className=' ml-5 mt-2'>
                    <p className='mb-2'>Address:{address}</p>
                    <p>Salary: {salary} k</p>
                </div>
                    
                    <button onClick={()=>navigate(`/jobs/${id}`)} title='Full Details' className='mt-8 text-center bg-purple-500 p-3'>View Details</button>
               
               </div>
               </div>
          </div>
               </div>
          </div>
     );
};

export default Jobs;