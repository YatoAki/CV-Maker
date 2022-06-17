import React,{Component} from "react";
import "./styles/previewItems.css"

export default class EducationItems extends Component {

  render(){
    const {education} = this.props;
    return(
      <div className= "previewItems">
        <div>
          <span>{education.from} - {education.to}</span>
        </div>
        <div>
          <span>{education.name}, {education.city}</span>
          <span>{education.degree}</span>
        </div>
      </div>
    )
  }
}
