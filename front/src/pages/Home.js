import Navbar from "../components/NavBar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/matchs"
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



export default function Home() {
  let data;

  const navigate = useNavigate();


    async function getData() {
    let res = await fetch("http://localhost:8000/api/matchs", requestOptions)
    data = await res.json();
    console.log(data)
  }

  getData();
  

  return (
    <div>
      <Navbar/>
      <div className="final-container">
        <div>
        </div>
      </div>
    </div>
  );
}
