import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isDoctorContext } from '../../../App';
import './Navbar.css';
const Navbar = () => {
  const [isDoctor, setIsDoctor] = useContext(isDoctorContext );
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin:'2em 2em'
}
  return (
    

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#e3f2fd'}}>
      <div class="container-fluid  ms-5">
        <a class="navbar-brand" href="#">Polyglot</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                 {/* <a class="nav-link me-5 active" aria-current="page" href="/">Home</a> */}
                 <Link to="/" style={linkStyle}>Home</Link>
               </li>
               <li class="nav-item">
                 {/* <a class="nav-link me-5" href="#">About</a> */}
                 <Link to="#" style={linkStyle}>About</Link>
               </li>
               <li class="nav-item">
                 {/* <a class="nav-link me-5" to="#">Services</a> */}
                 <Link to="#" style={linkStyle}>Services</Link>
               </li>
              <li class="nav-item">
              <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                 {/* <a class="nav-link me-5" to="/dashboard">Dashboard</a> */}
               </li>
               <li class="nav-item">
               <Link to="#" style={linkStyle}>Blog</Link>
                 {/* <a class="nav-link me-5 " href="#">Blog</a> */}
               </li>
               <li class="nav-item">
                 {/* <a class="nav-link me-5 text-white" href="#">Contact Us</a> */}
                 <Link to="#" style={linkStyle}>Contact Us</Link>
               </li>

             </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;