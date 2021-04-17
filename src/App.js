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
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AppointmentForm from './components/Appointment/AppointmentForm/AppointmentForm';
import AppointmentDataTable from './components/Dashboard/AppointmentDataTable/AppointmentDataTable';

export const UserContext = createContext();
export const isDoctorContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isDoctor, setIsDoctor] = useState(false);
  return (
    <div>
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

              <Route path="/allPatients">
                <AllPatients></AllPatients>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/addDoctor">
                <AddDoctor></AddDoctor>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
        </isDoctorContext.Provider>
      </UserContext.Provider>
    </div >
  );
}

export default App;
