import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
const AddABlog = () => {

    const { register, handleSubmit } = useForm();
    const [blogImageURL, setBlogImageURL] = useState(null);
    const onSubmit = data => {
        const formData = {
            author: data.author,
            description: data.description,
            imageURL: blogImageURL,
            title: data.title,
            date: data.date
        }

        fetch('http://localhost:5000/addABlog', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => console.log('server side response', res))

        alert('New Item Added')
        // history.replace('/');
    }


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'f3c8081683b538b662d1ccfee9b6540c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setBlogImageURL(response.data.data.display_url);
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
                    <h5 className="text-brand">Add A New Blog</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="authorImg">Upload image: </label>
                            <input name="authorImg" type="file" className="form-control mt-3" onChange={handleImageUpload} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" className="form-control" defaultValue="name" {...register('title')} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input name="description" className="form-control" rows="20" defaultValue="0" type="text" {...register('description')} />
                        </div>

                        <br />

                        <div className="form-group">
                            <label htmlFor="author">Author Name: </label>
                            <input name="author" className="form-control" defaultValue="0" type="text" {...register('author')} />
                        </div>

                        <br/>
                        <div className="form-group">
                            <label htmlFor="date">Date of Posting: </label>
                            <input name="date" className="form-control" defaultValue="0" type="text" {...register('date')} />
                        </div>

                        <br />

                        <input type="submit" />
                    </form>

                </div>
            </section>
        </div>
    );
};

export default AddABlog;