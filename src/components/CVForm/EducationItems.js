import React, {Component} from "react";
import "./styles/item.css";


export default class EducationItems extends Component{

  render(){
    return(
      <div className="inputItems">
        <input type="text" id="uniInput" placeholder="University Name"/>
        <input type="text" id="degreeInput" placeholder="Degree"/>
        <input type="text" id="cityInput" placeholder="City"/>
        <input type="number" id="fromInput" placeholder="From"/>
        <input type="number" id="toInput" placeholder="To"/>
      </div>
    );
  }
}
