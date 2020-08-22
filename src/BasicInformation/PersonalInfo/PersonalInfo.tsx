import React from "react";
import { Form } from "react-bootstrap";
import PersonalInfoStateInterface from "./PersonalInfoStateInterface";
import { Calendar } from "./Calendar";

class PersonalInfro extends React.Component {
  state: PersonalInfoStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      born: "",
      birth: "",
    };
  }
  fromInputChangeBorn = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ born: event.target.value });
  };

  fromInputChangeBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birth: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="section-item">
          <p className="item-name">Personal info</p>
          <div className="description-title">
            <Form.Group style={{ width: "85%" }}>
              <Form.Label>Born</Form.Label>
              <Calendar></Calendar>
            </Form.Group>
            <Form.Group style={{ width: "85%" }}>
              <Form.Label style={{ paddingTop: "20px" }}>
                Birth place
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Start typ"
                id="birth"
                value={this.state.birth}
                style={{ height: "32px" }}
                onChange={(event) => this.fromInputChangeBirth(event as any)}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfro;
