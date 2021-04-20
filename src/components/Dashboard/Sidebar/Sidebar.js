import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { isDoctorContext, UserContext } from '../../../App';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useContext(isDoctorContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const history = useHistory();
    const deleteAuthToken = () => {
        sessionStorage.removeItem('token');
        setLoggedInUser({})
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));

    // }, [loggedInUser.email])
    // console.log("isDoctor from sidebad: ", isDoctor);
    return (



        <>
        

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            ContentWR
          </span>
        </div>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
                history.push(itemId);
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
    
              },
              
              {
                title: 'Add Review',
                itemId: '/review',
                
              },
              
            ]}
          />

      {isDoctor && <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
                history.push(itemId);
            }}
            items={[
              {
                title: 'Admin Panel',
                subNav: [
                  {
                    title: 'Make Admin',
                    itemId: '/addDoctor',
                  },
                  {
                    title: 'Add New Service',
                    itemId: '/addService',
                  },
                  {
                    title: 'Add New Blog',
                    itemId: '/addABlog',
                  },
                ],
              },
            ]}
          />}
          <Link to="/" onClick={deleteAuthToken} className="text-dark" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
          </div>
      </>


    );
};

export default Sidebar;




{/* <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 ms-0" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-dark" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {!isDoctor &&
                    <div>
                        <li>
                            <Link to="/orderList" className="text-dark" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/review" className="text-dark" style={{ textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>

                }

                { isDoctor && 
                <div>
                    <li>
                        <Link to="/allPatients" className="text-dark" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patients" className="text-dark" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faUsers} /> <span>Clients</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addDoctor" className="text-dark" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/changeFeature" className="text-dark" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faCog} /> <span>Change Feature</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting" className="text-dark" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                        </Link>
                    </li>
                </div>}
                <Link to="/" onClick={deleteAuthToken} className="text-dark" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </ul>
            <div>
                
            </div>
        </div> */}