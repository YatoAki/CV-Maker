import React, {Component} from "react";
import inputCard from "./inputCard.css";
import ExperienceItems from "./ExperienceItems";

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
