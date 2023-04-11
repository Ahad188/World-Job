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
import Alljobs from './Components/AllJobs/Alljobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
// import JobDit from './Components/JobsDit/JobDit';

const router = createBrowserRouter([
     {
          path:'/',
          element:<App/>,
          errorElement:<ErrorPage></ErrorPage>,
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
               },
               {
                    path:'alljobs',
                    element:<Alljobs></Alljobs>,
                    loader:()=>fetch('jobs.json')
               },
                
          ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
