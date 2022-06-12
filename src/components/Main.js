import React,{Component} from "react"
import CVForm from "./CVForm/CVForm.js"
import CVPreview from "./CVPreview/CVPreview.js"
import "./styles/Main.css"
import uniqid from "uniqid";

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
      },
      experience:[
        {
          id: uniqid(),
          position:"",
          company:"",
          city:"",
          from:"",
          to:""
        },
      ],
      education:[
        {
          id: uniqid(),
          name:"",
          degree:"",
          city:"",
          from:"",
          to:""
        },
      ],
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

  handleChangeExperience = (e,id) =>{
    
  }

  render(){
    return(
      <div className="main">
        <CVForm
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          experience= {this.state.experience}/>
        <CVPreview/>
      </div>
    );
  }
}
