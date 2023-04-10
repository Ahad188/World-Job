import React from 'react';

const Catagories = ({data}) => {
     const {Logo,Name,Jobs} = data;
     return (
           
               <div className='bg-lime-100-200 w-80 p-10 mb-4 rounded-3xl shadow-xl'>
                         <img className='' src={Logo} alt="" />
                         <h2 className='text-2xl mt-3 mb-3'>{Name}</h2>
                         <p  >{Jobs}</p>
                    </div>
          
     );
};

export default Catagories;