import React, {Component} from "react";
import inputCard from "./inputCard.css";


export default class Personal extends Component{

  render(){
    return(
      <div class="inputCard">
        <h3>Personal Information</h3>
        <input type="text" id="nameInput" placeholder="Name"/>
        <input type="text" id="roleInput" placeholder="Role"/>
        <input type="text" id="addressInput" placeholder="Address"/>
        <input type="phone" id="phoneInput" placeholder="Phone"/>
        <input type="email" id="emailInput" placeholder="Email"/>
        <textarea name="description" placeholder="Description"></textarea>
      </div>
    );
  }
}
