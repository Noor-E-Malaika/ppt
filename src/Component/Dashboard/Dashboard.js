// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling
import { IoMdDownload } from "react-icons/io";
import graph from '../../assets/graph.png'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button className="sidebar-button">Menu</button>
        <div className="sidebar-item">Graphics Design</div>
        <div className="sidebar-item">Web Developer</div>
        <div className="sidebar-item">Python</div>
        <div className="sidebar-item">App Developer</div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="icons">
          <IoMdDownload />
          </div>
          <button className="certificate-button">Certificate Generator</button>
        </div>
         
        <div className="boxes">
            <div className="box">Graphics Design</div>
            <div className="box">Web Developer</div>
            <div className="box">Python</div>
            <div className="box">App Developer</div>
          </div>

        <div className="graph-container">
          <div className="graph">
          <img src={graph} alt="Logo" />
          </div>

          {/*<div className="boxes">
            <div className="box">Graphics Design</div>
            <div className="box">Web Developer</div>
            <div className="box">Python</div>
            <div className="box">App Developer</div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
