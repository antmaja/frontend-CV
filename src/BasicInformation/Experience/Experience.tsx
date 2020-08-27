import React from "react";
import { Form } from "react-bootstrap";
import ExperienceStateInterface from "./ExperienceStateInterface";

class Experience extends React.Component {
  state: ExperienceStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      arrayExperience: [
        {
          years: "",
          position: "",
        },
      ],
    };
  }
  handleInputYearsChange = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newYears = this.state.arrayExperience.map((experience, idx) => {
      if (id !== idx) return experience;
      return {
        ...experience,
        years: event.target.value,
      };
    });
    this.setState({ arrayExperience: newYears });
  };

  handleInputPositionChange = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPosition = this.state.arrayExperience.map((experience, idx) => {
      if (id !== idx) return experience;
      return {
        ...experience,
        position: event.target.value,
      };
    });
    this.setState({ arrayExperience: newPosition });
  };
  handleAddAnother = () => {
    this.setState({
      arrayExperience: this.state.arrayExperience.concat([
        { years: "", position: "" },
      ]),
    });
  };

  handleRemove = (id: number) => () => {
    this.setState({
      arrayExperience: this.state.arrayExperience.filter(
        (s, idx) => id !== idx
      ),
    });
  };

  render() {
    return (
      <div className="padding-top-30">
        <p className="item-name title-experience">Experience</p>
        {this.state.arrayExperience.map((experience, id) => (
          <div key={id}>
            <Form.Label style={{ paddingTop: "20px" }}>Years</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add number"
              style={{ width: "85%", height: "32px" }}
              value={experience.years}
              onChange={this.handleInputYearsChange(id)}
            />

            <Form.Label style={{ paddingTop: "20px" }}>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typ"
              value={experience.position}
              onChange={this.handleInputPositionChange(id)}
              style={{ width: "85%", height: "32px" }}
            />
            <div className="padding-top-30">
              <button onClick={this.handleRemove(id)} className="add-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="padding-top-20">
          <button onClick={this.handleAddAnother} className="add-another">
            Add Another
          </button>
        </div>
      </div>
    );
  }
}
export default Experience;
