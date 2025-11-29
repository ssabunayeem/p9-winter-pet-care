import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const { myId } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    const findResult = services.find(service => service.serviceId == myId);
    console.log(findResult);



    return (
        <div className='flex flex-col items-center my-5'>
            <img className='w-2/3 h-1/3 object-cover' src={findResult?.image} alt="" />

            <div className="card-body font-semibold my-2 text-lg text-gray-500">
                <h2 className="card-title text-2xl">{findResult?.serviceName}</h2>
                <p className='text-gray-500'>Description: {findResult?.description}</p>
                <p>Category : {findResult?.category}</p>
                <p>Name: {findResult?.providerName}</p>
                <p>Email: {findResult?.providerEmail}</p>
                <p>Price: {findResult?.price}</p>
                <p>Rating: {findResult?.rating}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;