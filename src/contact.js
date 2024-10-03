import React from "react";
import "./contact.css";
import { LocationOnOutlined, PhoneOutlined, Alarm } from "@material-ui/icons";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h3>Contact Us</h3>
      <br />
      <div className="contact-main">
        <LocationOnOutlined />
        <p>
          Plot no 230,Rhythm Dance Academy,Opposite to Nisarga
          Restuarant,Andheri Mumbai-400059
        </p>
        <PhoneOutlined />
        <p>022-23444009</p>
        <Alarm />
        <p>9.00am to 8.00pm</p>
      </div>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}
