import React from "react";
import NameComp from "./NameComp";
import AgeComp from "./AgeComp";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameField = React.createRef();
    this.ageField = React.createRef();
  }

  handleSubmit= (e)=> {
    e.preventDefault();
    const name = this.nameField.current.state.name;
    const age = this.ageField.current.state.age;
    if (
      this.nameField.current.nameValid &&
      this.ageField.current.ageValid
    ) {
      alert("Имя: " + name + " Возраст: " + age);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameComp name="" ref={this.nameField}/>
        <AgeComp age="100" ref={this.ageField}/>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
