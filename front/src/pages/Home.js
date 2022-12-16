import Navbar from "../components/NavBar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import {getAuth, onAuthStateChanged} from "firebase/auth";

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export default function Home() {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    async function getMatches() {
      let res = await fetch("http://127.0.0.1:8000/api/matchs", requestOptions)
      console.log(res)
      let data = await res.json();
      setMatches(data)
    }

    getMatches()

  }, [])
  if (matches !== null) {
    console.log(matches)
  }

  function getDate(date) {
    return (`${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`)
  }


  return (
    <div className="all">
      <Navbar />
      <div className="final-container">
        <div className="final-header">
          FINAL
        </div>
        {matches !== null ? matches.final.map(match => (
          <div className="match-card">
            <div className="date">
              {getDate(match.date_time)}
            </div>
            <div className="match-info">
              <img className="flag" src={match.team1_flag}/>
              { match.team1 + " " + (match.goal_team1 ? match.goal_team1 : "0") + " - " + (match.goal_team2 ? match.goal_team2 : "0") + " " + match.team2}
              <img className="flag" src={match.team2_flag}/>
            </div>


          </div>
        )) : ""}
      </div>
      <hr className="line" />
      <div className="final-container">
        <div className="final-header">
          SEMI-FINAL

        </div>

        <div className="semi-matches">
        {matches !== null ? matches.semi_final.map(match => (
          <div className="match-card">
            <div className="date">
              {getDate(match.date_time)}
            </div>
            <div className="match-info">
              <img className="flag" src={match.team1_flag}/>
              { match.team1 + " " + match.goal_team1 + " - " + match.goal_team2 + " " + match.team2}
              <img className="flag" src={match.team2_flag}/>
            </div>


          </div>
        )) : ""}
        </div>
        <hr className="line" />



      </div>
      <div className="final-container">
        <div className="final-header">
          QUARTER-FINAL

        </div>

        <div className="quarter-matches">
        {matches !== null ? matches.quarter_final.map(match => (
          <div className="match-card">
            <div className="date">
              {getDate(match.date_time)}
            </div>
            <div className="match-info">
              <img className="flag" src={match.team1_flag}/>
              { match.team1 + " " + match.goal_team1 + " - " + match.goal_team2 + " " + match.team2}
              <img className="flag" src={match.team2_flag}/>
            </div>


          </div>
        )) : ""}
        </div>
        
      </div>
       <hr className="line" />
      <div className="final-container">
        <div className="final-header">
          ROUND OF 16

        </div>

        <div className="quarter-matches">
        {matches !== null ? matches.round_of_16.map(match => (
          <div className="match-card">
            <div className="date">
              {getDate(match.date_time)}
            </div>
            <div className="match-info">
              <img className="flag" src={match.team1_flag}/>
              { match.team1 + " " + match.goal_team1 + " - " + match.goal_team2 + " " + match.team2}
              <img className="flag" src={match.team2_flag}/>
            </div>


          </div>
        )) : ""}
        </div>
      </div>
      <hr className="line" />
      <div className="final-container">
        <div className="final-header">
          FIRST STAGE

        </div>

        <div className="quarter-matches">
        {matches !== null ? matches.first_stage.map(match => (
          <div className="match-card">
            <div className="date">
              {getDate(match.date_time)}
            </div>
            <div className="match-info">
              <img className="flag" src={match.team1_flag}/>
              { match.team1 + " " + match.goal_team1 + " - " + match.goal_team2 + " " + match.team2}
              <img className="flag" src={match.team2_flag}/>
            </div>


          </div>
        )) : ""}
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}
