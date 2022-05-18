import React from 'react';
import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
        <div className="login__container">

            <img 
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube-logo" 
            />

            <button>Login With Google</button>
            <p>This Project Is Made Using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen;