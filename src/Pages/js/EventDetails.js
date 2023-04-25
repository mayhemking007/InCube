import React, { useState, useEffect } from "react";
import "../css/EventDetails.css";
import LeftNavMobile from "../../Components/js/LeftNavMobile";
import LeftNav from "../../Components/js/LeftNav";
import RightNav from "../../Components/js/RightNav";
import Backdrop from "../../Reusable/js/Backdrop";
import TopNav from "../../Components/js/TopNav";
import { Breakpoint, BreakpointProvider } from "react-socks";
import eventimage from "../../assets/Dummyimages/eventimage2.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase";
function EventDetails(props) {
 
  const progress = {
    mentor: "gagan sharma",
    fundingRaised: "50,0000",
    monthlyTargets: "60%",
  };

  const sessions = {
    totalSessions: "13",
  };
  
  return (
    <div className="eventdetailspage__container">
      <LeftNav></LeftNav>

      <div className="eventdetailspage">
        <div className="page-card">
        <h1>About</h1>
          <div className="info-row">
            <div className="info-labels">
              <p>IdeaName:</p>
              <p>LeaderName:</p>
              <p>membersNo:</p>
              <p>dateSubmitted:</p>
              <p>description:</p>
              <p> Team Members:</p>
            </div>
            <div className="info-inputs">
              <p>jobportal</p>
              <p>rohan mittal</p>
              <p>4</p>
              <p>10/02/2023</p>
              <p>
                a job portal like linkedin for blue collar workers , providing
                companies a way to conduct mass hirings and workers to get best
                opportunities
              </p>
              <div className="team-members">
                <p>sarthak singhal</p>
                <p> jayant goyal</p>
                <p> aman khan </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-card">
            <h1>Progress</h1>
            <div className="info-row">
            <div className="info-labels">
              <p>mentor:</p>
              <p>fundingRaised:</p>
              <p>totalSessions:</p>
            
              
            </div>
            <div className="info-inputs">
              <p>gagan sharma</p>
              <p>50,000</p>
              <p>4</p>
              {/* <p>10/02/2023</p>
              <p>
                a job portal like linkedin for blue collar workers , providing
                companies a way to conduct mass hirings and workers to get best
                opportunities
              </p> */}
              
            </div>
          </div>
        </div>
        <div className = "page-card">
              <p>Session History</p>
              <div className="sess-req">
              <p>Request a new session:</p>
              <button className="request-button">New session</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
