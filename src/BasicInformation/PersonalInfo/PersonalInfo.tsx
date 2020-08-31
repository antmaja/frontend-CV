import React from "react";
import { Form } from "react-bootstrap";
import { Calendar } from "./Calendar";
import PersonalInfoStateInterface from "./PersonalInfoStateInterface";

class PersonalInfo extends React.Component {
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
            <Form.Group>
              <Form.Label>Born</Form.Label>
              <Calendar></Calendar>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Birth place
              </Form.Label>
              <Form.Control
                className="birth-place-input"
                type="text"
                placeholder="Start typ"
                id="birth"
                value={this.state.birth}
                onChange={(event) => this.fromInputChangeBirth(event as any)}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
