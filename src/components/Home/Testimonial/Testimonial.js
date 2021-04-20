import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Testimonial = (props) => {
    const {name, review, image} = props.review;
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    console.log(props.review);
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-body">
                <p className="card-text text-center">{review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    {/* <p className="m-0">{from}</p> */}
                </div>
            </div>
       </div>
    );
};

export default Testimonial;