import React,{Component} from "react"
import "./CVForm.css"
import Personal from "./Personal.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

export default class CVForm extends Component{

  render(){
    return(
      <div className="cvform">
        <Personal/>
        <Experience/>
        <Education/>
      </div>
    );
  }
}
