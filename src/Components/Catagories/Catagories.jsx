import React from 'react';

const Catagories = ({data}) => {
     const {Logo,Name,Jobs} = data;
     return (
           
               <div className='bg-gray-300 w-80 p-10 mb-4 rounded-3xl'>
                         <img src={Logo} alt="" />
                         <h2 className='text-2xl text-center mt-3 mb-3'>{Name}</h2>
                         <p className='text-center'>{Jobs}</p>
                    </div>
          
     );
};

export default Catagories;