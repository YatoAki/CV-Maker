import React,{Component} from "react"

export default class EducationItems extends Component {

  render(){
    const {education} = this.props;
    return(
      <div>
        {education.name}
      </div>
    )
  }
}
