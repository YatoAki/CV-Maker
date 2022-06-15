import React,{Component} from "react";
import "./styles/sidebarArea.css";
import "./styles/title.css";

export default class Sidebar extends Component{

  render(){
    const {personalInfo} = this.props;
    return(
      <div className="sidebarArea">
        <h3 className="title">Personal Details</h3>
        <div>
          <span>Address</span>
          <span>{personalInfo.address}</span>
        </div>
        <div>
          <span>Email</span>
          <span>{personalInfo.email}</span>
        </div>
        <div>
          <span>Phone</span>
          <span>{personalInfo.phone}</span>
        </div>
      </div>
    )
  }
}
