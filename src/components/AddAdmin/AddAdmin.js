import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { isDoctorContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';

const AddAdmin = () => {

    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const [isDoctor, setIsDoctor] = useContext(isDoctorContext);
    const history = useHistory();

    const onSubmit = data => {
        const formData = {
            name: data.name,
            email: data.email,
            imageURL: imageURL
        }

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => console.log('server side response', res))

        alert('New Item Added')
        history.replace('/');
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'f3c8081683b538b662d1ccfee9b6540c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <section className="container-fluid row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add New Admin</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="image">Upload image: </label>
                            <input name="image" type="file" className="form-control mt-3" onChange={handleImageUpload} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" className="form-control" defaultValue="name" {...register('name')} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input name="email" className="form-control" defaultValue="0" type="text" {...register('email')} />
                        </div>

                        <br />

                        <input type="submit" />
                    </form>

                </div>
            </section>
        </div>

    );
};

export default AddAdmin;