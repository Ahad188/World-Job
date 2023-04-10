 import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../Utlities/fakeDb';
import Sumary from '../Sumary/Sumary';
 
 
 const AppliedJobs = () => {
     const [Cart, setCart] = useState([]);
     // console.log(Cart)
     const [Products, setProducts] = useState([]);
     useEffect(()=>{
          fetch('jobs.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[]);
     useEffect(()=>{
          // console.log(Products)
          const saveProduct = [];
          const storeCard = getShoppingCart();
           for(const id in storeCard){
               // console.log(id)
               const addedToProduct = Products.find(product => product.id == id);
                if(addedToProduct){
                    const quantity = storeCard[id];
                    addedToProduct.quantity = quantity;
                    saveProduct.push(addedToProduct);
                }
                setCart(saveProduct);
           }
     },[Products])
     // console.log(Cart)
     const delletHandeler=()=>{
          setCart([]);
          deleteShoppingCart()
     }
     const removeHandeler =(id)=>{
          // console.log(id)
          const remainingCard = Cart.filter(p=>p.id != id);
          setCart(remainingCard);
          removeFromDb(id)
      }
     return (
          <div>
                <h2 className='text-center text-3xl mt-3'>All job summary When you did Apply</h2>
                <div className='text-center mt-4'>
                <button className=' bg-purple-500 border border-red-500 p-3' onClick={delletHandeler}>Denali to all Apply</button>
                </div>
               {
                    Cart.map(p=><Sumary
                    key={p.id}
                    p={p}
                    delletHandeler={delletHandeler}
                    removeHandeler={removeHandeler}
                    ></Sumary>)
               }
               
          </div>
     );
 };
 
 export default AppliedJobs;