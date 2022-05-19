import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from './screens/loginScreen/LoginScreen';
import "./_app.scss";

//react router setup
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

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

  return (
    <Router>
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
    </Router>
  )
}

export default App;