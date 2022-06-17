import React,{Component} from "react";
import "./styles/contentArea.css"
import Description from "./Description.js"
import Experience from "./Experience.js"
import Education from "./Education.js"


export default class Content extends Component{

  render(){
    const {personalInfo,experience,education} = this.props;
    return(
      <div className="contentArea">
        <Description description = {personalInfo.description}/>
        <Experience experience = {experience}/>
        <Education education = {education}/>
      </div>
    )
  }
}
