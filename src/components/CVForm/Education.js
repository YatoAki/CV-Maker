import React, {Component} from "react";
import inputCard from "./inputCard.css";
import EducationItems from "./EducationItems.js"


export default class Education extends Component{

  render(){
    return(
      <div className="inputCard">
        <h3>Education</h3>
        <EducationItems/>
        <EducationItems/>
        <EducationItems/>
      </div>
    );
  }
}
