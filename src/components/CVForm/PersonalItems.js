import React, {Component} from "react";
import "./styles/item.css";


export default class ExperienceItems extends Component{

  render(){
    return(
      <div className="inputItems">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="role" placeholder="Role"/>
      <input type="text" name="address" placeholder="Address"/>
      <input type="phone" name="phone" placeholder="Phone"/>
      <input type="email" name="email" placeholder="Email"/>
      <textarea name="description" placeholder="Description"></textarea>
      </div>
    );
  }
}
