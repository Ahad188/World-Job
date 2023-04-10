import React from 'react';
import { useParams } from 'react-router-dom';

const JobDit = () => {
     const {alljobsId} =useParams()
     console.log(alljobsId)
     return (
          <div>
               
          </div>
     );
};

export default JobDit;