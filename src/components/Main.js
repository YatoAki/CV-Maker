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

  handleChangeEducation = (e,id) =>{
    const {name, value} = e.target;
    this.setState((prevState) => {
      let newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id){
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      })
      return { ...prevState, education: [...newEducation] }
    })
  }

  handleAddEducation = () => {
    this.setState((prevState) => {
      return {...prevState, education: [
        ...prevState.education,{
          id: uniqid(),
          name:"",
          degree:"",
          city:"",
          from:"",
          to:""
        }
      ]
      }
    })
  }

  handleAddExperience = () => {
    this.setState((prevState) => {
      return {...prevState, experience: [
        ...prevState.experience,{
          id: uniqid(),
          position:"",
          company:"",
          city:"",
          from:"",
          to:""
        },
      ]
      }
    })
  }

  handleDeleteExperience = () => {
    this.setState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.experience.pop();
      return {...prevState,experience:[
        ...newState.experience
      ]}
    })
  }

  handleDeleteEducation = () => {
    this.setState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.education.pop();
      return {...prevState,education:[
        ...newState.education
      ]}
    })
  }


  render(){
    return(
      <div className="main">
        <CVForm
          onChangePersonal={this.handleChangePersonal}
          onChangeExperience={this.handleChangeExperience}
          onChangeEducation={this.handleChangeEducation}
          education= {this.state.education}
          experience= {this.state.experience}
          onAddExperience= {this.handleAddExperience}
          onAddEducation= {this.handleAddEducation}
          onDeleteExperience={this.handleDeleteExperience}
          onDeleteEducation={this.handleDeleteEducation}/>
        <CVPreview cvInfo = {this.state}/>
      </div>
    );
  }
}
