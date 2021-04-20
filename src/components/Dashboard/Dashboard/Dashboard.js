import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import { isDoctorContext, UserContext } from '../../../App';
import OrderListForAdmin from '../OrderListForAdmin/OrderListForAdmin';
import OrderListForUser from '../OrderListForUser/OrderListForUser';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useContext(isDoctorContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [orders, setOrders] = useState([]);
    console.log(isDoctor);
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data => setOrders(data))
    }, [])

    console.log(orders);

    return (
        
        <section>
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                {/* <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div> */}
                <div className="col-md-10">
                    {isDoctor? <OrderListForAdmin></OrderListForAdmin> : <OrderListForUser></OrderListForUser>}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;