import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from './screens/loginScreen/LoginScreen';
import "./_app.scss";

//react router setup
import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">

        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />

        <Container fluid className='app__main'>
          {children}
        </Container>
      </div>
    </>
  );
}

const App = () => {

  const {accessToken,loading} = useSelector(state=>state.auth);

  const navigate=useNavigate();

  useEffect(()=>{
    if(!loading && !accessToken){
      navigate("/auth");//to use this here we need to wrap App component using BrowserRouter
    }
  },[accessToken,loading,navigate]);

  return (
    
      <Routes>{/* same concept of switch last case is default one */}

        <Route path="/" element={
          <Layout>
            <HomeScreen />
          </Layout>
        }/>

        <Route path="/auth" element={<LoginScreen />}/>

        <Route path="/search" element={
            <Layout>
              <h1>Search Results</h1>
            </Layout>
        }/>

        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />

        {/* home route */}
        {/* <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route> */}

        {/* login route */}
        {/* <Route path="/auth">
          <LoginScreen />
        </Route> */}

        {/* search route */}
        {/* <Route path="/search">
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route> */}

        {/*catching invalid route:2 options:1.show 404 page or 2.redirect to valid route */}
        {/* we will redirect to homepage */}
        {/* Route without any path, is default route*/}
        {/* <Route>
          <Redirect to="/"/>
        </Route> */}
      </Routes>
    
  )
}

export default App;