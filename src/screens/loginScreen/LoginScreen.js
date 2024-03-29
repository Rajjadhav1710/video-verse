import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";
import { useNavigate } from "react-router-dom";

import {FcGoogle} from "react-icons/fc";

const LoginScreen = () => {
  const currentMode = useSelector(state=>state.toggleMode.mode);

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  //if accessToken is not null we will redirect to home route
  //in old react router:
  //for redirection we will use history object of browser
  //we can get history object using one of the react router hook
  // const history = useHistory();

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className={`login ${currentMode}`}>
      <div className="login__container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="youtube-logo"
        />

        <button onClick={handleLogin}>Login With Google &nbsp;<FcGoogle size={23}/></button>
        <p style={{textAlign:"center"}}>This Project Is Made Using Youtube Data Api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
