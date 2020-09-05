import React from "react";
import "./projects.css";
import { Form, Col, Row } from "react-bootstrap";
import ProjectsStateInterface from "./ProjectsStateInterface";

class Projects extends React.Component {
  state: ProjectsStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      arrayProjects: [
        {
          name: "",
          position: "",
          from: "",
          to: "",
          description: "",
          show: true,
          numChar: 250,
          maxChar: 250,
        },
      ],
    };
  }

  handleChangeName = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newName = this.state.arrayProjects.map((projects, idx) => {
      if (idx !== id) return projects;
      return {
        ...projects,
        name: event.target.value,
      };
    });
    this.setState({ arrayProjects: newName });
  };

  handleChangePosition = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPosition = this.state.arrayProjects.map((projects, idx) => {
      if (id !== idx) return projects;
      return {
        ...projects,
        position: event.target.value,
      };
    });

    this.setState({ arrayProjects: newPosition });
  };

  handleChangeFrom = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFrom = this.state.arrayProjects.map((projects, idx) => {
      if (id !== idx) return projects;
      return {
        ...projects,
        from: event.target.value,
      };
    });
    this.setState({ arrayProjects: newFrom });
  };

  handleChangeTo = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTo = this.state.arrayProjects.map((projects, idx) => {
      if (id !== idx) return projects;
      return {
        ...projects,

        to: event.target.value,
      };
    });
    this.setState({ arrayProjects: newTo });
  };

  handleChangeDescription = (id: number) => (event: any) => {
    const charCount = event.target.value.length;
    const newDescription = this.state.arrayProjects.map((projects, idx) => {
      const maxChar = projects.maxChar;
      const charLength = maxChar - charCount;
      if (id !== idx) return projects;
      return {
        ...projects,
        numChar: charLength,
        description: event.target.value,
      };
    });

    this.setState({ arrayProjects: newDescription });
  };
  deleteProjects = (id: number) => () => {
    this.setState({
      arrayProjects: this.state.arrayProjects.filter((s, idx) => id !== idx),
    });
  };

  handleAddAnother = () => {
    this.setState({
      arrayProjects: this.state.arrayProjects.concat([
        {
          name: "",
          position: "",
          from: "",
          to: "",
          description: "",
          show: true,
          numChar: 250,
          maxChar: 250,
        },
      ]),
    });
  };

  hideShow = (id: number, currentStatus: boolean) => (event: any) => {
    const newShow = this.state.arrayProjects.map((projects, idx) => {
      if (id !== idx) return projects;
      return {
        ...projects,
        show: !currentStatus,
      };
    });

    this.setState({ arrayProjects: newShow });
  };

  render() {
    return (
      <div className="aside-projects">
        <p className="item-name"> Experience/Projects</p>

        <div>
          {this.state.arrayProjects.map((projects, id) => (
            <div key={id} className="contente-aside-projects">
              {projects.show ? (
                <div>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Project name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Add position"
                        className="projects-control"
                        value={projects.name}
                        onChange={this.handleChangeName(id)}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Position</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Add Position"
                        className="projects-control"
                        value={projects.position}
                        onChange={this.handleChangePosition(id)}
                      />
                    </Form.Group>
                    <br />
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>From</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="projects-control"
                        value={projects.from}
                        onChange={this.handleChangeFrom(id)}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="projects-control"
                        value={projects.to}
                        onChange={this.handleChangeTo(id)}
                      />
                    </Form.Group>
                  </Form.Row>
                  <div>
                    <Row className="aside-title">
                      <Col md={11}>
                        <p>Responsibilities description</p>
                      </Col>
                      <Col md={1}>{projects.numChar}</Col>
                    </Row>

                    <textarea
                      maxLength={250}
                      className="resize"
                      value={projects.description}
                      onChange={this.handleChangeDescription(id)}
                    />
                  </div>
                  <div className="aside-button-container">
                    
                      <Col>
                        <div className="button-container">
                          <button
                            onClick={this.handleAddAnother}
                            className="add-another"
                          >
                            Add Another
                          </button>
                        </div>

                        <button
                          onClick={this.deleteProjects(id)}
                          className="add-another"
                        >
                          Delete
                        </button>
                      </Col>
                   
                      </div>
                </div>
              ) : null}
              <Col>
                <div className="container-hide-section">
                  <button
                    className="add-another"
                    onClick={this.hideShow(id, projects.show)}
                  >
                    {projects.show ? "Hide" : "Show"} Section
                  </button>
                </div>
              </Col>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Projects;
