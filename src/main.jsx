import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
     {
          path:'/',
          element:<App/>,
          children:[
               {
                    path:'/',
                    element:<Home/>,
               },
               {
                    path:'/statistics',
                    element:<Statistics></Statistics>
               },
               {
                    path:'/jobs',
                    element:<AppliedJobs></AppliedJobs>
               },
               {
                    path:'/blog',
                    element:<Blog></Blog>
               }
          ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
