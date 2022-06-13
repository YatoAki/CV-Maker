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
      let newPersonalInfo = {...prevState.personalInfo, [name]:value};
      return {...prevState, personalInfo: {...newPersonalInfo}};
    })
  }

  handleChangeExperience = (e,id) =>{
    const {name, value} = e.target;
    this.setState((prevState) => {
      let newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id){
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      })
      return { ...prevState, experience: [...newExperience] }
    })
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
