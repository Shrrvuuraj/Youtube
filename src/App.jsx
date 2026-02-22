import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import "./components/stylesheet/App.css";
import LoginScreen from "./screen/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = ({ children }) => {
  const [sideBar, toggleSidebar] = useState(() => {
    return window.innerWidth > 520;
  });
  useEffect(() => {
    const handleResize = () => {
      toggleSidebar(window.innerWidth > 520);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToglleSideBar = () => {
    toggleSidebar((prev) => !prev);
    // console.log(sideBar)
  };
  return (
    <>
      <Header handleToglleSideBar={handleToglleSideBar} />

      <div className="app__container border border-info">
        <Sidebar sideBar={sideBar} handleToglleSideBar={handleToglleSideBar} />
        <Container fluid className="app__main border border-warning">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen/></Layout> } />

        <Route path="/auth" element={<LoginScreen />} />

        <Route path="/search" element={<h1>Search results</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
