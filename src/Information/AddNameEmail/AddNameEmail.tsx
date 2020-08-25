import React from "react";
import "./user.css";
import AddNameEmailStateInterface from "./AddNameEmailStateInterface";

class AddNameEmail extends React.Component {
  state: AddNameEmailStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = Object.assign(this.state, {
      [event.target.id]: event.target.value,
    });

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <input
          placeholder="ADD Name Surname"
          type="text"
          className="full-name-input"
          id="name"
          value={this.state.name}
          onChange={(event) => this.handleInputNameChange(event)}
        />
        <input
          placeholder="Add your Email here"
          type="text"
          className="email-input"
          id="email"
          value={this.state.email}
          onChange={(event) => this.handleInputNameChange(event)}
        />
      </div>
    );
  }
}
export default AddNameEmail;
