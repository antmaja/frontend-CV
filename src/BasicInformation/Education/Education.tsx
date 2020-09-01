import React from "react";
import EducationStateInterface from "./EducationStateInterface";
import { Form, Col } from "react-bootstrap";
import "./education.css";

class Education extends React.Component {
  state: EducationStateInterface;
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      arrayEducation: [
        {
          college: "",
          degree: "",
          filed: "",
          from: "",
          to: "",
        },
      ],
    };
  }

  handleChangeCollege = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCollege = this.state.arrayEducation.map((education, idx) => {
      if (id !== idx) return education;
      return {
        ...education,
        college: event.target.value,
      };
    });
    this.setState({ arrayEducation: newCollege });
  };

  handleChangeDegree = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDegree = this.state.arrayEducation.map((education, idx) => {
      if (id !== idx) return education;
      return {
        ...education,
        degree: event.target.value,
      };
    });
    this.setState({ arrayEducation: newDegree });
  };

  handleChangeFiled = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFiled = this.state.arrayEducation.map((education, idx) => {
      if (id !== idx) return education;
      return {
        ...education,
        filed: event.target.value,
      };
    });
    this.setState({ arrayEducation: newFiled });
  };

  handleChangeFrom = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFrom = this.state.arrayEducation.map((education, idx) => {
      if (id !== idx) return education;
      return {
        ...education,
        from: event.target.value,
      };
    });
    this.setState({ arrayEducation: newFrom });
  };

  handleChangeTo = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTo = this.state.arrayEducation.map((education, idx) => {
      if (id !== idx) return education;
      return {
        ...education,
        to: event.target.value,
      };
    });
    this.setState({ arrayEducation: newTo });
  };
  handleAddAnother = () => {
    this.setState({
      arrayEducation: this.state.arrayEducation.concat({
        college: "",
        degree: "",
        filed: "",
        from: "",
        to: "",
      }),
    });
  };

  handleDelete = (id: number) => () => {
    this.setState({
      arrayEducation: this.state.arrayEducation.filter((s, idx) => id !== idx),
    });
  };
  render() {
    return (
      <div>
        <p className="item-name container-education">Education</p>
        {this.state.arrayEducation.map((education, id) => (
          <div key={id}>
            <Form.Label className="label-container">College/Scholls</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add name"
              className="education-input"
              value={education.college}
              onChange={this.handleChangeCollege(id)}
            />

            <Form.Label className="label-container">Degree</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typ"
              className="education-input"
              value={education.degree}
              onChange={this.handleChangeDegree(id)}
            />

            <Form.Label className="label-container">Filed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add filed"
              className="education-input"
              value={education.filed}
              onChange={this.handleChangeFiled(id)}
            />

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  className="from-to-input"
                  value={education.from}
                  onChange={this.handleChangeFrom(id)}
                />
              </Form.Group>
              <Form.Group as={Col} style={{ paddingRight: 35 }}>
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  className="from-to-input"
                  value={education.to}
                  onChange={this.handleChangeTo(id)}
                />
              </Form.Group>
            </Form.Row>
            <div className="container-delete">
              <button onClick={this.handleDelete(id)} className="add-another">
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="container-add-another">
          <button onClick={this.handleAddAnother} className="add-another">
            Add Another
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
