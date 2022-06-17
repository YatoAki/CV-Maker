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
          <span>{experience.position}</span>
          <span>{experience.company}, {experience.city}</span>        
        </div>
      </div>
    )
  }
}
