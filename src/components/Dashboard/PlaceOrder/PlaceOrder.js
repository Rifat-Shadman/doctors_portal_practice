import React, { useContext } from 'react';
import { isDoctorContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Checkout from '../CheckOut/Checkout';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const PlaceOrder = () => {
    const [isDoctor, setIsDoctor] = useContext(isDoctorContext);
    console.log("isDoctor on placeorder: ",isDoctor);
    return (
        <section>
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-10">
                    <Checkout></Checkout>
                </div>
            </div>
        </section>
    )
};

export default PlaceOrder;