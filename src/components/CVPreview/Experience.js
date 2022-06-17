import React,{Component} from "react"
import ExperienceItems from "./ExperienceItems.js"

export default class Experience extends Component {

  render(){
    const {experience} = this.props;
    const experienceItems = experience.map((eachExperience) => {
      return(
        <ExperienceItems experience={eachExperience} key={eachExperience.id}/>
      )
    })
    return(
      <div>
        <h3 className="title">Experience</h3>
        <div>
          {experienceItems}
        </div>
      </div>
    )
  }
}
