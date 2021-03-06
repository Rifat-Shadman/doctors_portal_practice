import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        console.log(data);
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })


        
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group p-2">
                        <input type="text"  name="name" placeholder="Your Name" className="form-control" {...register('name')}/>
                        {/* {errors.name && <span className="text-danger">This field is required</span>} */}

                    </div>
                    <div className="form-group p-2">
                        <input type="text"  name="phone" placeholder="Phone Number" className="form-control" {...register('phone')}/>
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group p-2">
                        <input type="text"  name="email" placeholder="Email" className="form-control" {...register('email')}/>
                        {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group row p-2">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register('gender')} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {/* {errors.gender && <span className="text-danger">This field is required</span>} */}

                        </div>
                        <div className="col-4">
                            <input  className="form-control" name="age" placeholder="Your Age" type="number" {...register('age')}/>
                            {/* {errors.age && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="col-4">
                            <input  className="form-control" name="weight" placeholder="Weight" type="number" {...register('weight')}/>
                            {/* {errors.weight && <span className="text-danger">This field is required</span>} */}
                        </div>
                    </div>

                    <div className="form-group text-right p-2">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;