import React from 'react';

const Blog = () => {
     return (
          
          <section>
               <h1 className='text-center font-bold text-gray-600 text-3xl'>Blog Question</h1>
               <div className='md:flex justify-between items-center mt-9'>
          
          <div className='w-96 m-auto  p-9 h-96'>
              <h2 className='text-3xl mb-4'>What is React Custom Hooks?</h2>
              <p className='text-xl'>A custom hook is a JavaScript function that starts with the prefix "use". The function can accept any number of arguments, and must return an array or object. Within the function, you can use other hooks such as useState, useEffect, useContext, or any other custom hooks that you've created.</p>
          </div>
          <div className='w-96 m-auto  p-10 h-96'>
              <h2 className='text-3xl mb-4'>what is useref react and when use it is?</h2>
              <p className='text-xl'>The useRef Hook allows you to persist values between renders.  It can be used to store a mutable value that does not cause a re-render when updated.  It can be used to access a DOM element directly.</p>
          </div>
          <div className='w-96 m-auto  p-9 h-96'>
              <h2 className='text-3xl mb-4'>What is  useMemo hook?</h2>
              <p className='text-xl'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed</p>
          </div>
          <div className='w-96 m-auto  p-10 h-96'>
              <h2 className='text-3xl mb-4'>What is context api?</h2>
              <p className='text-xl'>The Context API is a feature of React that allows you to share data between components without having to pass props down through every level of the component tree. It provides a way to create global state that can be accessed by any component in your application.</p>
          </div>
    </div>
          </section>
     );
};

export default Blog;