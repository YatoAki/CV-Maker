import React, {Component} from "react";
import "./styles/item.css"


export default class ExperienceItems extends Component{

  render(){
    return(
      <div className="inputItems">
        <input type="text" name="position" placeholder="Position"/>
        <input type="text" name="company" placeholder="Company"/>
        <input type="text" name="city" placeholder="City"/>
        <input type="number" name="from" placeholder="From"/>
        <input type="number" name="to" placeholder="To"/>
      </div>
    );
  }
}
