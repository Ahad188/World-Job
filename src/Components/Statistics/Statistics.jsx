import React from 'react';
import { useLoaderData } from 'react-router-dom';
 
 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
     const data = useLoaderData()
     //  console.log(data)
     return (
           <section className='text-center'>
               <h1 className="text-center text-4xl">Rchart to Assignment Mark</h1>
               <div className='text-center'>
                <div className='w-96 md:m-auto md:mt-10 mt-16'>
                <LineChart
                height={400}
                width={500}
                data={data}
                >
                    <Line dataKey="mark"></Line>
                    <YAxis dataKey="mark"></YAxis>
                    <XAxis dataKey="name"></XAxis>
                    <Line dataKey="name"></Line>
                    <Tooltip></Tooltip>
                </LineChart>
                </div>
               </div>
           </section>
     );
};

export default Statistics;