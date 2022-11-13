// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Register from "./components/Register";
// import NavbarNew from './components/supportComponents/NavbarNew';
 
// function App() {
//   return (
//     <BrowserRouter>
//     <NavbarNew />
//       <Switch>
//         <Route exact path="/">
//           <Login/>
//         </Route>
//         <Route path="/register">
//           <Register/>
//         </Route>
//         <Route path="/dashboard">
//           <Navbar/>
//           <Dashboard/>
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
 
// export default App;

import React from 'react';
import FooterNew from './components/pages/FooterNew/FooterNew'
import NavbarNew from './components/supportComponents/NavbarNew';
import Register from "./components/Register";
import LoginNew from "./components/Login";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeNew from './components/pages/HomeNew/HomeNew'
import AboutusNew from './components/pages/AboutusNew/AboutusNew'
import ServiceNew from './components/pages/servicesNew/ServiceNew'
import AcNew from './components/pages/servicesNew/AcNew'
import ElecNew from './components/pages/servicesNew/ElecNew'
import PlumberNew from './components/pages/servicesNew/PlumberNew'
import PaintersNew from './components/pages/servicesNew/PaintersNew'
import CleaningNew from './components/pages/servicesNew/CleaningNew'
import GasNew from './components/pages/servicesNew/GasNew'
import ContactNew from './components/pages/ContactNew/ContactNew'
import WorkerProfileNew from './components/pages/WorkerProfileNew/WorkerProfileNew'

import AdminNew from './components/pages/AdminNew/AdminNew'
import WorkerNew from './components/pages/loginNew/WorkerNew'
import UserProfileNew from './components/pages/UserProfileNew/UserProfileNew'
import Add_workerNew from './components/pages/AdminNew/Add_workerNew';
import Cusotmer_updateNew from './components/pages/AdminNew/Cusotmer_updateNew';
import Service_addNew from './components/pages/AdminNew/Service_addNew';
import Service_updateNew from './components/pages/AdminNew/Service_updateNew';
import Update_workerNew from './components/pages/AdminNew/Update_workerNew';

import PaymentNew from './components/pages/PaymentNew/PaymentNew'
import PaymentGateNew from './components/pages/PaymentNew/PaymentGateNew'


function App() {
  return (
  
    <Router>
      <NavbarNew />
      <Switch>
        <Route path='/' exact component={HomeNew} />
        <Route path='/aboutus' component={AboutusNew} />
        <Route path='/register' component={Register} />
        <Route path='/services' component={ServiceNew} />
        <Route path='/AC mechanics' component={AcNew} />
        <Route path='/Electricians' component={ElecNew} />
        <Route path='/Plumbers' component={PlumberNew} />
        <Route path='/Painters' component={PaintersNew} />
        <Route path='/House Cleaners' component={CleaningNew} />
        <Route path='/Gas Suppliers' component={GasNew} />
        <Route path='/contactus' component={ContactNew} />
        <Route path='/login' component={LoginNew} />
        <Route path='/worker' component={WorkerProfileNew} />

        <Route path='/Payment' component={PaymentNew} />
        <Route path='/paymentGate' component={PaymentGateNew} />
        
        <Route path='/Admin' component={AdminNew} />
        <Route path='/workeradd' component={Add_workerNew} />
        <Route path='/workerupdate' component={Update_workerNew} />
        <Route path='/serviceadd' component={Service_addNew} />
        <Route path='/serviceupdate' component={Service_updateNew} />
        <Route path='/customerupdate' component={Cusotmer_updateNew} />
        <Route path = '/UserProfileNew' component={UserProfileNew} />
         {/* <UserProfileNew/> */}
         {/* <WorkerNew/> */}


        <AdminNew/>

        
      </Switch>
      <FooterNew/>
    </Router>
  
  );
}

export default App;
