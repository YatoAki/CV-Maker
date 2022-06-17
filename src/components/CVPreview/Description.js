import React,{Component} from "react"

export default class Description extends Component{

  render(){

    return(

      <div>
        <h3 className="title">Description</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
