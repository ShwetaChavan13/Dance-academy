import React from "react";
import "./instructors.css";
import { Avatar } from "@material-ui/core";

export default function Instructors() {
  return (
    <div className="instruct" id="instruct">
        <h2>Instructors</h2><br/><br/>
      <div className="instructor">
        <div id="instruct-1">
          <div>
            <Avatar style={{width:'70px', height:'70px'}}/>
          </div>
          <div>
            <p>
              Rajesh Sharma
              <br />
              Qualification:BA-Dance
              <br />
              Experience:5yrs+ in Katak
              <br />
              Bio:Passionate to teach others our cultural dance form.
              <br />
            </p>
          </div>
        </div>
        <div id="instruct-1">
          <div>
          <Avatar style={{width:'70px', height:'70px'}}/>
          </div>
          <div>
            <p>
              Manisha Shetty
              <br />
              Qualification:Diploma in Bharatnatyam
              <br />
              Experience:9yrs+
              <br />
              Bio:Passionate to teach others our cultural dance form.
              <br />
            </p>
          </div>
        </div>
        <div id="instruct-1">
          <div>
          <Avatar style={{width:'70px', height:'70px'}}/>
          </div>
          <div>
            <p>
              Jenny Fernandes
              <br />
              Qualification:BA-Dance, Runnerup of WesternDance competition
              <br />
              Experience:5yrs+
              <br />
              Bio:Excited to learn and teach new steps in western dance forms.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
