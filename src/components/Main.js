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

  handleReset = (e) => {
    const newState = {
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
    this.setState((prevState) => {

      return {...prevState, ...newState}
    })
  }

  handleLoadExample = (e) => {
    const newState = {
      personalInfo:{
        name:"Do Do",
        role:"Super Engineer",
        address:"Yangon, Myanmar",
        phone:"09875187451",
        email:"madodo@gmail.com",
        description:"I am a Computer Science enthusiast with a strong passion for software development. At this moment, I am actively looking for a chance to take part in a software development team and be part of the history."
      },
      experience:[
        {
          id: uniqid(),
          position:"UI UX Designer",
          company:"Super Do Marketing Agency",
          city:"Yangon, Myanmar",
          from:"2021",
          to:"Present"
        },
        {
          id: uniqid(),
          position:"Artificial Intelligence Engineer",
          company:"Google",
          city:"United State",
          from:"2019",
          to:"2021"
        },
      ],
      education:[
        {
          id: uniqid(),
          name:"Harvard University",
          degree:"Master in Business Management",
          city:"United State",
          from:"2017",
          to:"2021"
        },
        {
          id: uniqid(),
          name:"Myanmar Institute of Information Technology",
          degree:"B.E (Hons) in Electronic and Communication Engineering",
          city:"Mandalay",
          from:"2015",
          to:"2017"
        },
      ],
    }
    this.setState((prevState) => {

      return {...prevState, ...newState}
    })
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
          onReset={this.handleReset}
          onLoadExample={this.handleLoadExample}
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
