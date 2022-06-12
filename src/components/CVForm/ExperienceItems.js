import React, {Component} from "react";
import "./styles/item.css"


export default class ExperienceItems extends Component{

  render(){
    const {onChangeExperience} = this.props;
    return(
      <div className="inputItems">
        <input type="text" name="position" placeholder="Position" onChange={onChangeExperience}/>
        <input type="text" name="company" placeholder="Company" onChange={onChangeExperience}/>
        <input type="text" name="city" placeholder="City" onChange={onChangeExperience}/>
        <input type="number" name="from" placeholder="From" onChange={onChangeExperience}/>
        <input type="number" name="to" placeholder="To" onChange={onChangeExperience}/>
      </div>
    );
  }
}
