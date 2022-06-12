import React, {Component} from "react";
import "./styles/inputCard.css";
import PersonalItems from "./PersonalItems.js"

export default class Personal extends Component{

  render(){
    return(
      <div className="inputCard">
        <h3>Personal Information</h3>
        <PersonalItems/>
      </div>
    );
  }
}
