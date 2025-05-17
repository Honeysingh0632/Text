import React from 'react';
import { CiSquareInfo } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";



function Header() {
  return (
    <header className="header">
        
        <div className="logo">
      <img className="google-icon " src={require('./images/logo.jpeg')} />
       
      </div>
      <div className="user-info">
        <i className='icon mt-1'><CiSquareInfo/></i>
        <i className='icon mt-1'><IoMdNotificationsOutline/></i>

        <div  >
            <img src={require('./images/profile.jpg')} className='profile '></img>
        </div>
    <div className='set mt-3 fs-6'>
        <span className='fs-6 text-success  ms-3'>Hi, Muhammad Asad</span>
    <p>welcome back!</p></div>
        
      </div>
    </header>
  );
}

export default Header;
