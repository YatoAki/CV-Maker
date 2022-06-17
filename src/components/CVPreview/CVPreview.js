import React,{Component} from "react";
import Content from "./Content.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import "./styles/CVPreview.css";

export default class CVPreview extends Component{

  render(){
    const {cvInfo} = this.props;
    return(
      <div className="cvpreview">
        <Header personalInfo = {cvInfo.personalInfo}/>
        <div style={{display: 'flex',flexGrow:'1'}}>
          <Content personalInfo = {cvInfo.personalInfo} experience = {cvInfo.experience} education = {cvInfo.education}/>
          <Sidebar personalInfo = {cvInfo.personalInfo}/>
        </div>
      </div>
    );
  }
}
