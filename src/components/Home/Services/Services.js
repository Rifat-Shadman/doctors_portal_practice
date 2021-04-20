import React, { useEffect, useState } from 'react';

import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                console.log("reviews: ", serviceData);
            })
    }, [])
    return (
        <section className="services-container mt-5" style={{ height: 'fit-content' }}>
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1', marginTop: '1em' }}>Our Services</h5>
                <h2 className="mt-3">Our Content-Writing Offers</h2>

            </div>


            <div className="row d-flex justify-content-center mt-5 " style={{ padding: '0 1.8em' }}>

                <div className="w-100 row m-4 p-sm-4 "  >
                    <Carousel responsive={responsive} infinite={true} draggable={false}>
                        {
                            serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                    </Carousel>
                </div>

            </div>

        </section>


    );
};

export default Services;