import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
const Admins = () => {
    const [admins,setAdmins] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/admins')
        .then(res=>res.json())
        .then(data=> {
            setAdmins(data);
            console.log("doctor: ",admins);
        })
    },[]) 
    return (
        <section className="admins">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Instructors</h5>
                <div className="row">
                    {
                        admins.map(admin => <Admin key={admin._id} admin={admin}></Admin>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Admins;