import React,{Component} from "react";
import "./styles/previewItems.css"

export default class experienceItems extends Component {

  render(){
    const {experience} = this.props;
    return(
      <div className= "previewItems">
        <div>
          <span>{experience.from} - {experience.to}</span>
        </div>
        <div>
          <span>{experience.company}, {experience.city}</span>
          <span>{experience.position}</span>
        </div>
      </div>
    )
  }
}
