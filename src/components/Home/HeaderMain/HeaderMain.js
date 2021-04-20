import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../../images/chair.png";
const HeaderMain = () => {
    return (
        <main style={{height:'400px'}} className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="justify-content-center">
                <h1>ContentWR</h1>
                <p>World's #1 Content Writing Service</p>
                <Link to="/appointment"><button className="btn btn-primary">Place Order</button></Link>
            </div>
            
        </main>
    );
};

export default HeaderMain;