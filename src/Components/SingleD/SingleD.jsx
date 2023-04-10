import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleD = () => {
     const{jobsId} = useParams()
     const [jobsx,setJobsx] = useState([])
     useEffect(()=>{
          fetch('/public/jobs.json')
          .then(res=>res.json())
          .then(data=> {
               const job = data?.find(singedJob => singedJob.id == jobsId)
               setJobsx(job)
          })
     },[])
      

     console.log(jobsx)
     return (
          <div className='md:flex justify-between mx-40'>
               <div>
               <h2>JobDesCription</h2>
               <p>{jobsx.description}</p>
               <h2>RequerMent</h2>
               <p>{jobsx.jobRequirements}</p>
               <h2>Education</h2>
               <p>Bsc in Engineer /Msc Engineer</p>
               <p>salary: {jobsx.salary} K</p>
               <p>Exprience : <span>0-3 years</span></p>
               </div>
               <div>
                    <h2>hello</h2>
               </div>

          </div>
     );
};

export default SingleD;