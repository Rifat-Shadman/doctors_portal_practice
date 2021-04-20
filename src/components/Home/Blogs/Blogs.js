import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


// const blogData = [
//     {
//         title: "How Learning A New Language Can Help Fight Alzheimar's Disease",
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author: 'James Payton',
//         authorImg: wilson,
//         date: '23 April 2019'
//     },
//     {
//         title: 'Preserving the Dying Languages Is Our Silent War',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author: 'William Shatner',
//         authorImg: wilson,
//         date: '23 April 2019'
//     },
//     {
//         title: 'How Human Perpection of the World Affect Their Languages',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author: 'Peter Parker',
//         authorImg: wilson,
//         date: '23 April 2019'
//     },
// ]



const Blogs = () => {
    const [blogData, setBlogData] = useState ([]);

    useEffect(()=> {
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=> {
            setBlogData(data);
            console.log("reviews: ",blogData);
        })
    },[])
    
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="mt-5">
                    <div className=" row d-flex justify-content-center g-3 card-deck">
                        {
                            blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blogs;