import React from "react";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./components/TodoForm/TodoForm";
import NavBar from "./components/NavBar/NavBar";
import { MESSAG_SURVIVAL_TIME } from "./config/constants";

import { Routes } from "../src/routes/routes";

const App = () => {
  return (
    <StrictMode>
      <NavBar />
      <ToastContainer
        autoClose={MESSAG_SURVIVAL_TIME}
        position="top-center"
        theme="light"
      />
      <Form />
      <Routes />
    </StrictMode>
  );
};

export default App;
