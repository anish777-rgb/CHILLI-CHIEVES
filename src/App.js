import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './navbar/navbar';
import Home from './pages/home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Bookingform from './pages/bookingform';
import Adminbookingview from './pages/adminbookingview';
import Adminlogin from './pages/adminlogin';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Adminread from './pages/adminbookingread';
import Adminedit from './pages/adminbookingedit';
import Adminpage from './pages/adminpage';
import Adminregview from './pages/adminregview';
import Adminregread from './pages/adminregread';
import Adminregedit from './pages/adminregedit';
import Admincartview from './pages/admincartview';
import Navbarsecond from './navbar/navbarsecond';
import Admincontactview from './pages/admincontactview';




function App() {


  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <div className="App">
  {isAdminRoute ? <Navbarsecond /> : <Navbar />}
      <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='contactus' element={<Contact/>}/>
     
     <Route path='bookingform' element={<Bookingform/>}/>
     <Route path="adminbookingview" element={<Adminbookingview/>}/>
     <Route path='adminlogin' element={<Adminlogin/>}/>
     <Route path="menu" element={<Menu/>}/>
     <Route path="adminbookingread/:id" element={<Adminread/>}/>
     <Route path='adminbookingedit/:id' element={<Adminedit/>}/>
     <Route path='adminpage' element={<Adminpage/>}/>
     <Route path='adminregview' element={<Adminregview/>}/>
     <Route path='adminregread/:id' element={<Adminregread/>}/>
     <Route path="adminregedit/:id" element={<Adminregedit/>}/>
     <Route path='admincartview' element={<Admincartview/>}/>
     <Route path='admincontactview' element={<Admincontactview/>}/>
 

     </Routes>

    </div>
  );
}

export default App;
