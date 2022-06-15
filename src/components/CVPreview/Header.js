import React,{Component} from "react";
import "./styles/headerArea.css";

export default class Header extends Component{

  render(){
    const {personalInfo} = this.props;
    return(
      <div className="headerArea">
        <h2>{personalInfo.name}</h2>
        <h4>{personalInfo.role}</h4>
      </div>
    )
  }
}
