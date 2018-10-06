import React from "react";
import "./Header.css";

const Header = props => (

  <div className="jumbotron jumbotron-fluid header-stats">
    <div className="container">
    <div className="row">
      <div className="col-4">
      <h2>Current Score : {props.currentScore} </h2>
      </div> 
      <div className="col-4">
        <h1 className="display-4 content-align">Clicky Game</h1>
        <p className="lead content-align">Click each picture once without repeating yourself!</p>
      </div> 
      <div className="col-4">
      <h2>High Score : {props.highScore} </h2>
      </div> 
    </div>
    </div>
  </div>

);

export default Header;
