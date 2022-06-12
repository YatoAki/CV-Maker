import React,{Component} from "react"
import CVForm from "./CVForm/CVForm.js"
import CVPreview from "./CVPreview/CVPreview.js"
import "./styles/Main.css"

export default class Main extends Component{

  render(){
    return(
      <div className="main">
        <CVForm/>
        <CVPreview/>
      </div>
    );
  }
}
