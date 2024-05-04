import React, { useEffect, useState } from 'react';
import ServiesCard from './ServiesCard';

const Services = () => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    },[])
    console.log(services);
    return (
        <div className='text-center'>
            <h2 className="text-2xl">
            Service
            </h2>

            <h2 className="text-center text-5xl font-bold">
            Our Service Area
            </h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service=><ServiesCard service={service} key={service._id}></ServiesCard>)
                }
            </div>
        </div>
    );
};

export default Services;