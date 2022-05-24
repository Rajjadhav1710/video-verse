import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
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
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="youtube-logo"
        />

        <button onClick={handleLogin}>Login With Google</button>
        <p>This Project Is Made Using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
