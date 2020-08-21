import React from "react";
import { Form } from "react-bootstrap";
import ExperienceState from "./interfaceExperience";

class Experience extends React.Component {
  state: ExperienceState;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      years: "",
      position: "",
    };
  }
  handleInputYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ years: event.target.value });
  };

  handleInputPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ position: event.target.value });
  };

  render() {
    return (
      <div>
        <Form.Row style={{ paddingTop: "20px", margin: "5px" }}>
          <p className="item-name title-experience">Experience</p>
          <Form.Group style={{ width: "85%" }}>
            <Form.Label>Years</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add number"
              style={{ height: "32px" }}
              value={this.state.years}
              onChange={(event) => this.handleInputYearsChange(event as any)}
            />

            <Form.Label style={{ paddingTop: "20px" }}>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typ"
              style={{ height: "32px" }}
              value={this.state.position}
              onChange={(event) => this.handleInputPositionChange(event as any)}
            />
          </Form.Group>
        </Form.Row>
        <button className="add-another">Add Another</button>
      </div>
    );
  }
}
export default Experience;
