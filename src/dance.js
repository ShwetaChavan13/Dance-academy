import React from "react";
import "./dance.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="aca_name">
          <h1>Rhythm <sub>Dance Academy</sub> </h1>
        </div>
        <div className="nav">
        <h4>
          <ul>
            <li><AnchorLink href="#home" style={{color:'white',textDecoration:'none'}}>Home</AnchorLink></li>
            <li><AnchorLink href="#courses" style={{color:'white',textDecoration:'none'}}>Courses</AnchorLink></li>
            <li><AnchorLink href="#instruct" style={{color:'white',textDecoration:'none'}}>Instructors</AnchorLink></li>
            <li><AnchorLink href="#contact" style={{color:'white',textDecoration:'none'}}>Contact us</AnchorLink></li>
            <li><AnchorLink href="#enquiry" style={{color:'white',textDecoration:'none'}}>Enquiry</AnchorLink></li>
          </ul>
          </h4>
        </div>
      </div> 
    </>
  );
}
