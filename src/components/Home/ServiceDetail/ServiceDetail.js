import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { selectedServiceContext } from '../../../App';
import './ServiceDetail.css';
const ServiceDetail = ({service}) => {
    const history = useHistory();
    const [selectedService, setSelectedService] = useContext(selectedServiceContext);
    const handleServiceChoice= async(data) =>{
        await(setSelectedService(data));
        // alert('service clicked');
        console.log('data: ',data);
        
        console.log('selectedservice on serviceDetails: ',selectedService);
        history.push('/placeOrder');
    }
    return (
        <div  className="col-md-4 col-sm-12 text-center service-card m-1" style={{ width:'20em'}}>
            <img onClick={()=>handleServiceChoice(service)} className="mt-3" style={{height:'200px'}} src={service.img} alt=""/>
            <br/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className='text-secondary'>{service.description} </p>
        </div>
    );
};

export default ServiceDetail;