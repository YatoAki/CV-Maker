import React, {Component} from "react";
import "./styles/inputCard.css";
import ExperienceItems from "./ExperienceItems.js";

export default class Experience extends Component{

  render(){
    const {
      onChangeExperience,
      experience,
      onAdd
    } = this.props;
    const experienceItems = experience.map((experienceItems) => {
      return (<ExperienceItems
        onChangeExperience={onChangeExperience}
        id={experienceItems.id}
        key={experienceItems.id}/>)
    });

    return(
      <div className="inputCard">
        <h3>Experience</h3>
        {experienceItems}
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }
}
