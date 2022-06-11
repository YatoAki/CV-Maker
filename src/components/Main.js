import React,{Component} from "react"
import CVForm from "./CVForm/CVForm.js"
import CVPreview from "./CVPreview/CVPreview.js"

export default class Main extends Component{

  render(){
    return(
      <div>
        <CVForm/>
        <CVPreview/>
      </div>
    );
  }
}
