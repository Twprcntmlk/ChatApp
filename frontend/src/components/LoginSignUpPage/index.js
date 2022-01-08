import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import './LoginSignupFormPage.css';
//components
import SignupForm from "./SignupForm/index"
import LoginForm from "./LoginForm/index"

function LoginSignupFormPage() {

//   const dispatch = useDispatch();
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);
  const [showSignupForm, setShowSignupForm] = useState(false);

  useEffect(() => {
    setShowSignupForm(location.state.showform)
  }, [location]);

  if (sessionUser) return <Navigate  to="/" />;

  return (
    <>
        <div className="FormContainer">
            <div className="FormContainer_Content">
            {showSignupForm
            ?
            <SignupForm showSignupForm={showSignupForm} setShowSignupForm={setShowSignupForm} />
            :
            <LoginForm showSignupForm={showSignupForm} setShowSignupForm={setShowSignupForm}/> }
            </div>
        </div>
    </>
  );
}

export default LoginSignupFormPage;
