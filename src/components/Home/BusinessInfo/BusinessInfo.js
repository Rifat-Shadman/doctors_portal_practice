import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'


const infosData = [
    {
        title: 'Article Writing',
        description: 'Broaden the Curious Mind',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Copywriting',
        description: 'Know the World',
        icon: faMapPin,
        background: 'dark'
    },
    {
        title: 'Infographics',
        description: 'Convey the knowledge',
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