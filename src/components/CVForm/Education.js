import React, {Component} from "react";
import "./styles/inputCard.css";
import EducationItems from "./EducationItems.js"


export default class Education extends Component{

  render(){
    const {
      onChangeEducation,
      education,
      onDelete,
      onAdd
    } = this.props;
    const educationItems = education.map((educationItem) => {
      return (<EducationItems
        onChangeEducation={onChangeEducation}
        id={educationItem.id}
        key={educationItem.id}/>)
    })
    return(
      <div className="inputCard">
        <h3>Education</h3>
        {educationItems}
        <button onClick={onAdd}>Add</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
}
