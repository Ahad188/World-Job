import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../../Utlities/fakeDb';

const SingleD = () => {
     const{jobsId} = useParams()
     const [jobsx,setJobsx] = useState([])
     const [loData,setLoData] = useState([])
     useEffect(()=>{
          fetch('/jobs.json')
          .then(res=>res.json())
          .then(data=> {
               const job = data?.find(singedJob => singedJob.id == jobsId)
               // console.log(job)
               setJobsx(job)
          })
     },[])
     const addtoData =(dit)=>{
          // console.log(dt);
          const newData = [...loData,dit]
          setLoData(newData)
          addToDb(dit.id)
     }
      
// console.log(jobsId)
     // console.log(jobsx)
     return (
          <div className='md:grid grid-cols-2 mx-40'>
               <div className='border border-gray-500 p-10 mt-10'>
               <h2 className='text-3xl font-bold'>JobDesCription</h2>
               <p className='mt-3 text-xl mb-5'>:{jobsx.description}  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, cum. </p>
               <h2 className='text-3xl font-bold mb-3'>RequerMent</h2>
               <p className='font-bold text-xl mb-3'>{jobsx.jobRequirements}</p>
               <h2 className='text-3xl mb-3 font-bold'>Education</h2>
               <p className='text-xl mb-3'>Bsc in Engineer /Msc Engineer</p>
               <p className='text-xl mb-2'>salary:{jobsx.salary} <span className='text-orange-500'>:</span> K</p>
               <p className='text-xl '>Experience : <span>0-3 years</span></p>
               </div>
               <div className='mt-10 border border-gray-400 p-10 bg-purple-400'>
                    <h2 className='text-3xl mb-5'> Job Details</h2>
                    <hr />
                    <h2 className='text-2xl mb-2 mt-3'>Salary: <span className='text-orange-900'> {jobsx.salary}</span> k (per month)</h2>
                    <h3 className='text-2xl mb-2'>Job Title: <span className='text-orange-900'>{jobsx.jobTitle} </span> </h3>
                    <h1 className='text-3xl mt-5'>Contact Information</h1>
                    <hr />
                    <p className='text-2xl p-2'>phone: <span className='text-white'>{jobsx.contactNumber} </span> </p>
                    <p className='text-2xl p-2'>Gmail: <span className='text-white'>{jobsx.gemail} </span> </p>
                    <p className='text-2xl p-2'>address: <span className='text-white'>{jobsx.address} </span> </p>
                    <button className='btn w-52 border border-red-300 mt-8 p-4 bg-purple-500 text-white hover:bg-purple-700' onClick={()=>addtoData(jobsx)}>Apply Now</button>
                    <Link to='/' className='btn w-52 border border-red-300 mt-8 p-4 bg-purple-500 text-white hover:bg-purple-700 md:ml-4 sm:mt-20'>Go Back</Link>
               </div>
                    
          </div>
     );
};

export default SingleD;