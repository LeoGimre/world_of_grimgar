import React, { Component } from "react";
import { render } from "react-dom";
import Home_page from "./Home_page";
import { useAuthContext } from "../context/authContext";



export default function App(){
  const { user } = useAuthContext();

    return (
      <div>
        <Home_page />
      </div>
    );
  }