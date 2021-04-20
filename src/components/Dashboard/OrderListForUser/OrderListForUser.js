import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderListForUser = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/myOrders?email=' + loggedInUser.email,{
            method:'GET',
            headers:{'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [loggedInUser.email])
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Item</th>
                    <th scope="col">Comment</th>
                </tr>
            </thead>
            <tbody>
            {orders.map(order =>
                <tr>
                    <td>{order.shipment.name}</td>
                    <td>{order.item}</td>
                    <td>{order.shipment.address}</td>
                </tr>
            )}
            </tbody>
            
        </table>
    );
};

export default OrderListForUser;