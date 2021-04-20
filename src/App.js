import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import AddDoctor from './components/AddAdmin/AddAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import PlaceOrder from './components/Dashboard/PlaceOrder/PlaceOrder';
import AddAReview from './components/Dashboard/AddAReview/AddAReview';
import AddABlog from './components/Dashboard/AddABlog/AddABlog';
import AddService from './components/Dashboard/AddService/AddService';

export const UserContext = createContext();
export const isDoctorContext = createContext();
export const selectedServiceContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isDoctor, setIsDoctor] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  return (
    <div>
      <selectedServiceContext.Provider value={[selectedService, setSelectedService]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <isDoctorContext.Provider value={[isDoctor, setIsDoctor]}>
            <Router>
              <Switch>
                <Route path="/appointment">
                  <Appointment></Appointment>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard ></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/review">
                  <AddAReview></AddAReview>
                </PrivateRoute>
                <PrivateRoute path="/addService">
                  <AddService></AddService>
                </PrivateRoute>
                <PrivateRoute path="/addABlog">
                  <AddABlog></AddABlog>
                </PrivateRoute>

                
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/addDoctor">
                  <AddDoctor></AddDoctor>
                </Route>
                <PrivateRoute path="/placeOrder">
                  <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <Route exact path="/">
                  <Home></Home>
                </Route>
              </Switch>
            </Router>
          </isDoctorContext.Provider>
        </UserContext.Provider>
      </selectedServiceContext.Provider>
    </div >
  );
}

export default App;
