import React, {Component} from "react";
import "./styles/item.css";


export default class ExperienceItems extends Component{

  render(){
    return(
      <div className="inputItems">
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
