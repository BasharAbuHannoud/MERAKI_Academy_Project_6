import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import SingleServicePage from "./components/SingleServicePage/SingleServicePage";
import WorkerPage from "./components/WorkerPage/WorkerPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  return (
    <>
     {state.isLoggedIn ? <Navigation /> : <></>}
      <div className="App">
        <div className="Home">
          <Routes>
            {state.isLoggedIn ? (
              <Route path="/Home" element={<Home />} />
            ) : (
              <></>
            )}
            {state.isLoggedIn ? (
              <Route path="/services/:id" element={<SingleServicePage />} />
            ) : (
              <></>
            )}
            {state.isLoggedIn ? (
              <Route path="/worker/:id" element={<WorkerPage />} />
            ) : (
              <></>
            )}
          </Routes>
        </div>
        <div className="SignUp">
        {state.isLoggedIn ? <></> : <Registration />}
        </div>
      </div>
    
    </>
  );
}

export default App;
