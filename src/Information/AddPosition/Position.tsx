import React from "react";
import "./position.css";
import PositionStateInterface from "./PositionStateInterface";

class Position extends React.Component {
  state: PositionStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      position: "",
    };
  }
  handleInputPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ position: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="content-container">
          <div>
            <input
              className="add-position-input"
              placeholder="Add Position"
              value={this.state.position}
              onChange={(event) => this.handleInputPositionChange(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Position;
