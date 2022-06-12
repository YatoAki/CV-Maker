import React, {Component} from "react";
import "./styles/item.css";


export default class EducationItems extends Component{

  render(){
    return(
      <div className="inputItems">
        <input type="text" name="uniName" placeholder="University Name"/>
        <input type="text" name="degree" placeholder="Degree"/>
        <input type="text" name="city" placeholder="City"/>
        <input type="number" name="from" placeholder="From"/>
        <input type="number" name="to" placeholder="To"/>
      </div>
    );
  }
}
