import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom/cjs/react-dom.development';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';




const AddAReview = () => {
    const { register, handleSubmit } = useForm();
    const [review, setReview] = useState();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        console.log(loggedInUser);
        const formData = {
            name: data.name,
            review: data.review,
            image: loggedInUser.image
        }

        console.log(formData);
        fetch('http://localhost:5000/addAReview', {
            method: 'POST',
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(formData)
        })
            .then(res => console.log('server side response', res))

        alert('New Item Added')
    }

    return (
        <div>
            <Navbar></Navbar>
            <section className="container-fluid row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add A Review</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" className="form-control" defaultValue="name" {...register('name')} required />
                        </div>
<br/>
                        <div className="form-group">
                        
                            <label htmlFor="review">Review </label>
                            <textarea name="review" rows="8" cols="100" form="usrform" {...register('review')} required>Enter text here...</textarea>
                            {/* <input name="email" className="form-control" defaultValue="0" type="textbox" {...register('email')} /> */}
                            
                        </div>

                        <br />

                        <input type="submit" />
                    </form>

                </div>
            </section>
        </div>
    );
};

export default AddAReview;