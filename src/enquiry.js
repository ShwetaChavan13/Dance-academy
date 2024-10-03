import React from "react";
import "./enquiry.css";
import { Instagram, Facebook, YouTube, Twitter } from "@material-ui/icons";
export default function Enquiry() {
  return (
    <div className="enquiry" id="enquiry">
      <div className="inner-enq">
        <div className="social-media">
          <Instagram
            style={{ fontSize: "8rm", color: "white", padding: "3px" }}
          />
          <Facebook style={{ fontSize: "8rm", color: "white" }} />
          <YouTube style={{ fontSize: "8rm", color: "white" }} />
          <Twitter style={{ fontSize: "8rm", color: "white" }} />
        </div>
        <div className="en-form">
          <h4>Enquiry Form</h4>
          <form>
            <input type="text" placeholder="Enter your Name" />
            <br />
            <input type="email" placeholder="Enter your email Id" />
            <br />
            <textarea id="" name="" rows={"6"} cols={"20"}>
              Write your message here
            </textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="copy">Copyright@Rhythmdanceacademy2024</div>
    </div>
  );
}
