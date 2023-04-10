import React from 'react';
 

const Sumary = ({p,removeHandeler}) => {
     const {salary,companyName,jobTitle,address,jobStatus,image,id} = p
     
     return (
           <section className='m-auto w-7/12 mt-10 bg-slate-200'>
              <div className='mb-5 border border-red-400 md:flex justify-evenly items-center'>
                    <img className='h-80 w-96 p-5' src={image} alt="" />
                    <div className="text-3xl">
                         <h1 className='text-orange-500 p-2'>{jobTitle}</h1>
                         <h2 className='text-purple-400 p-2'>Company:  <span className='text-orange-400'>{companyName}</span></h2>
                         <p className='text-purple-400 p-2'>Status: {jobStatus}</p>
                         <p className='text-purple-400 p-2'>Address: {address}</p>
                         <p className='text-purple-400 p-2'>Salary: {salary}K</p>
                         <button className='mt-4 p-3 w-60 mb-5 text-white bg-purple-600 border border-red-500 hover:bg-purple-400' onClick={()=>removeHandeler(id)}>Remove apply</button>
                    </div>
              </div>
           </section>
     );
};

export default Sumary;