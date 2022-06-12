import React, {Component} from "react";
import "./styles/item.css";


export default class ExperienceItems extends Component{

  render(){
    const {onChangePersonal} = this.props;
    return(
      <div className="inputItems">
      <input type="text" name="name" placeholder="Name" onChange={onChangePersonal}/>
      <input type="text" name="role" placeholder="Role" onChange={onChangePersonal}/>
      <input type="text" name="address" placeholder="Address" onChange={onChangePersonal}/>
      <input type="phone" name="phone" placeholder="Phone" onChange={onChangePersonal}/>
      <input type="email" name="email" placeholder="Email" onChange={onChangePersonal}/>
      <textarea name="description" placeholder="Description" onChange={onChangePersonal}></textarea>
      </div>
    );
  }
}
