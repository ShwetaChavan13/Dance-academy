import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="couresal-img">
        <img
          src="https://3.imimg.com/data3/OW/RS/MY-11110753/dance-academy-500x500.jpg"
          alt="Hip-Hop"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            height: "30%",
            border: "2px solid",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        ></img>
        <div id="quote">"Dance to your own Rhythm"</div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
