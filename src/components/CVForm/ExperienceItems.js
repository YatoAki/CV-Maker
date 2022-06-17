import React, {Component} from "react";
import "./styles/item.css"


export default class ExperienceItems extends Component{

  render(){
    const {onChangeExperience,id} = this.props;
    return(
      <div className="inputItems">
        <input type="text" name="position" placeholder="Position" onChange={(e) => onChangeExperience(e,id)}/>
        <input type="text" name="company" placeholder="Company" onChange={(e) => onChangeExperience(e,id)}/>
        <input type="text" name="city" placeholder="City" onChange={(e) => onChangeExperience(e,id)}/>
        <input type="text" name="from" placeholder="From" onChange={(e) => onChangeExperience(e,id)}/>
        <input type="text" name="to" placeholder="To" onChange={(e) => onChangeExperience(e,id)}/>
      </div>
    );
  }
}
