import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { selectedServiceContext } from '../../../App';
import Transaction from '../Transaction/Transaction';
const Checkout = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const[shippingData, setShippingData] = useState(null);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setShippingData(data);
        console.log(data);
    }

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            item: selectedService.name,
            shipment: shippingData,
            paymentId,
        }

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res=> res.json())
        .then(data => {
            if(data){
                alert('Your order was placed successfully')
            }
        })

        // history.replace('/');
    }

    const [selectedService, setSelectedService] = useContext(selectedServiceContext);
    console.log('selected service on checkout page: ', selectedService.name);
    return (
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="row justify-content-center">
                    <div>
                        <h2 className="text-center">Place Your Order for <span className="text-danger">{selectedService.name} </span> here</h2>
                        <div style={{ border: '2px solid black' }}>

                        </div>
                    </div>
                    <div className="col-md-10 text-center mt-3" style={{ right: 0, backgroundColor: "#F4FDFB", height: '80vh', width: '80%', border: '2px solid black' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control mt-3" placeholder="Name" {...register("name", { required: true })} />
                            <br/>
                            <input className="form-control mt-3" placeholder="Email" {...register("email", { required: true })} />
                            <br/>
                            <input className="form-control mt-3" placeholder="Ship to..." {...register("address", { required: true })} />
                            <br />
                            <input className="form-control mt-3" placeholder="Contact no" {...register("contact", { required: true })} />
                            <br />
                            <input className="form-control mt-3" type="submit" onClick={openModal} />

                        </form>

                    </div>

                </div>
            </div>
            <div   className="col-md-6 col-sm-12" style={{height:'80vh',display: shippingData? 'block': 'none'}}>
                
                    <div className="row justify-content-center">
                        <div>
                            <h2 className="text-center"><span className="text-danger">Transaction Detail</span></h2>
                        </div>
                    </div>
                    <div>
                    <Transaction handlePayment={handlePaymentSuccess}></Transaction>
                    </div>
                        
            </div>
            
        </div>
    );
};

export default Checkout;