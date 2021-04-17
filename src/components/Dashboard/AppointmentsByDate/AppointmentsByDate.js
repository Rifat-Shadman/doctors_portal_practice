import React, { useState } from 'react';
import { isDoctorContext } from '../../../App';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    const [isDoctor, setIsDoctor] = useState(isDoctorContext);
    console.log(appointments);
    return ( 
        <div>
            {isDoctor && <h2 className="text-brand text-center">Welcome Doc!</h2>}
            <h2 className="text-brand text-center">Appointments : {appointments.length}</h2>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;