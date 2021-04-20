import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Admin = ({admin}) => {
    // console.log(doctor);
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img style={{height:'200px'}} className="img-fluid mb-3" src={admin.imageURL} alt=""/>
            <h4>{admin.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Admin;