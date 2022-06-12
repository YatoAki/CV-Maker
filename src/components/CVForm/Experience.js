import React, {Component} from "react";
import "./styles/inputCard.css";
import ExperienceItems from "./ExperienceItems.js";

export default class Experience extends Component{

  render(){
    return(
      <div className="inputCard">
        <h3>Experience</h3>
        <ExperienceItems/>
      </div>
    );
  }
}
