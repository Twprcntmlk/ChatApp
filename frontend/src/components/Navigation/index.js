import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <div className="Navbar_Login_SignUp_Container">
          <NavLink className="Navbar_Login_SignUp_Container_Com" to="/login-signup" state={{showform:false}}>Login</NavLink>
          <NavLink className="Navbar_Login_SignUp_Container_Com" to="/login-signup" state={{showform:true}}>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="Navbar">
        <h2><NavLink exact to="/" className="Brand_Title">ChatApp.io</NavLink></h2>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
