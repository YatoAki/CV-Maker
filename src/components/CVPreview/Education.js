import React,{Component} from "react"
import EducationItems from "./EducationItems.js"

export default class Education extends Component {

  render(){
    const {education} = this.props;
    const educationItems = education.map((eachEducation) => {
      return(
        <EducationItems education={eachEducation}/>
      )
    })
    return(
      <div>
        <h3 className="title">Education</h3>
        <div>
          {educationItems}
        </div>
      </div>
    )
  }
}
