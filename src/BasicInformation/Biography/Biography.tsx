import React from "react";
import BiographyStateInterface from "./BiographyStateInterface";
import "./biography.css";
import { Row, Col } from "react-bootstrap";

class Biography extends React.Component {
  state: BiographyStateInterface;
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      biography: "",
    };
  }

  handleChangeBiography = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ biography: event.target.value });
  };
  render() {
    return (
      <div className="aside-biography">
        <p className="item-name">Biography</p>
        <Row className="padding-top-10">
          <Col md={11}>
            <p>Add Biography</p>
          </Col>
          <Col md={1}>
            <p>500</p>
          </Col>
        </Row>
        <textarea
          maxLength={500}
          className="add-biography"
          value={this.state.biography}
          onChange={(event) => this.handleChangeBiography(event)}
        />
      </div>
    );
  }
}
export default Biography;
