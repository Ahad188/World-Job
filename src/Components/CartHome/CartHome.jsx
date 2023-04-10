import React from 'react';

const CartHome = ({job}) => {
     console.log(job.companyLogo)
     const {jobTitle,salary,jobStatus,companyLogo,companyName} = job;
     return (
          <div className='border border-red-400 w-96 m-auto mb-5 mt-5'>
               <div>
                    <img src={companyLogo} alt="" />
               </div>
               <div className="text-center p-5">
               <h2>{jobTitle}</h2>
               <h3>{companyName}</h3>
               <p><span>{jobStatus}</span></p>
               <p><span>{salary}</span></p>
 
               </div>

          </div>
     );
};

export default CartHome;