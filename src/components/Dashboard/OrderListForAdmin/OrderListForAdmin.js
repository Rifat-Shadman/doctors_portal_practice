import React, { useEffect, useState } from 'react';
import OrderTableForAdmin from '../OrderTableForAdmin/OrderTableForAdmin';

const OrderListForAdmin = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Item</th>
                    <th scope="col">Shipping Address</th>
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

export default OrderListForAdmin;