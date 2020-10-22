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
      maxChar: 500,
      numChar: 500,
    };
  }

  handleChangeBiography = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const charCount = event.target.value.length;
    const maxChar = this.state.maxChar;
    const charLength = maxChar - charCount;
    this.setState({ biography: event.target.value, numChar: charLength });
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
            <p>{this.state.numChar}</p>
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
