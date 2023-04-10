import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import SingleD from './Components/SingleD/SingleD';

const router = createBrowserRouter([
     {
          path:'/',
          element:<App/>,
          
          children:[
               {
                    path:'/',
                    element:<Home/>,
                    // loader:()=>fetch('jobs.json'),
               },
               {
                    path:'/statistics',
                    element:<Statistics></Statistics>,
                    loader:()=>fetch('reChart.json')
               },
               {
                    path:'/jobs',
                    element:<AppliedJobs></AppliedJobs>
               },
               {
                    path:'/jobs/:jobsId',
                    element:<SingleD></SingleD>
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
