import React, {Component} from "react";
import "./styles/item.css"


export default class ExperienceItems extends Component{

  render(){
    return(
      <div className="inputItems">
        <input type="text" id="positionInput" placeholder="Position"/>
        <input type="text" id="companyInput" placeholder="Company"/>
        <input type="text" id="cityInput" placeholder="City"/>
        <input type="number" id="fromInput" placeholder="From"/>
        <input type="number" id="toInput" placeholder="To"/>
      </div>
    );
  }
}
