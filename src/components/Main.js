import React,{Component} from "react"
import CVForm from "./CVForm/CVForm.js"
import CVPreview from "./CVPreview/CVPreview.js"
import "./styles/Main.css"

export default class Main extends Component{

  constructor(){
    super();
    this.state = {
      personalInfo:{
        name:"",
        role:"",
        address:"",
        phone:"",
        email:"",
        description:""
      }
    }
  }

  handleChangePersonal = (e) =>{
    const {name, value} = e.target;
    this.setState((prevState) => {
      let personalInfo = Object.assign({},prevState.personalInfo);
      personalInfo[name] = value;
      return {personalInfo};
    })
  }

  render(){
    return(
      <div className="main">
        <CVForm onChangePersonal={this.handleChangePersonal}/>
        <CVPreview/>
      </div>
    );
  }
}
