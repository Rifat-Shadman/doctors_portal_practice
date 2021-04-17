import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'


const infosData = [
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our Location',
        description: 'Brookyn, NY 10003, USA',
        icon: faMapPin,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+15697854422',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="row d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;