import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';

// const testimonialData = [
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Wilson Harry',
//         from: 'California',
//         img: wilson
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Ema Gomez',
//         from: 'California',
//         img: ema
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Aliza Farari',
//         from: 'California',
//         img: aliza
//     }
// ]



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> {
            setReviews(data);
            console.log("reviews: ",reviews);
        })
    },[])
    return (
        <section className="testimonials mt-5 py-5">
            <div className="container text-center">
                <div className="section-header ">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Customers Say</h1>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className=" row card-deck mt-5">
                        {
                            reviews.map(review => <Testimonial review={review} key={review._id} />)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;