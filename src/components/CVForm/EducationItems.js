import React, {Component} from "react";
import "./styles/item.css";


export default class EducationItems extends Component{

  render(){
    const {onChangeEducation,id} = this.props;
    return(
      <div className="inputItems">
        <input type="text" name="name" placeholder="University Name" onChange={(e) => onChangeEducation(e,id)}/>
        <input type="text" name="degree" placeholder="Degree" onChange={(e) => onChangeEducation(e,id)}/>
        <input type="text" name="city" placeholder="City" onChange={(e) => onChangeEducation(e,id)}/>
        <input type="number" name="from" placeholder="From" onChange={(e) => onChangeEducation(e,id)}/>
        <input type="text" name="to" placeholder="To" onChange={(e) => onChangeEducation(e,id)}/>
      </div>
    );
  }
}
