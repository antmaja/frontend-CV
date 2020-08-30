import React from "react";
import "./resume.css";
import ResumeStateInterface from "./ResumeStateInterface";

class Resume extends React.Component {
  state: ResumeStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      resume: "",
    };
  }

  handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ resume: event.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          style={{ width: "100%" }}
          className="resume-input"
          placeholder="Add a qoute about the Resume owner which summs up goals/strenghts"
          id="resume"
          value={this.state.resume}
          onChange={(event) => this.handleResumeChange(event as any)}
        />
      </div>
    );
  }
}
export default Resume;
