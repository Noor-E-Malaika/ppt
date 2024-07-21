// src/components/Certificate.js
import React from 'react';
import './Certificate.css'; // Import the CSS file for styling

const Certificate = () => {
  return (
    <div className="certificate-container">
      <header className="certificate-header">
        <h1>Certificate of Completion</h1>
      </header>
      <div className="certificate-body">
        <p className="certificate-text">This is to certify that</p>
        <h2 className="student-name">[Student Name]</h2>
        <p className="certificate-text">has completed the course</p>
        <h3 className="course-name">[Course Name]</h3>
        <p className="certificate-text">with Roll Number:</p>
        <h4 className="roll-number">[Roll Number]</h4>
        <p className="certificate-text">Under the guidance of</p>
        <h4 className="faculty-name">[Faculty Name]</h4>
      </div>
      <footer className="certificate-footer">
        <div className="footer-section">
          <p>Date of Issue: [Date]</p>
        </div>
        <div className="footer-section">
          <p>Signature</p>
        </div>
      </footer>
    </div>
  );
};

export default Certificate;
