import React from "react";
import { Row, Col } from "react-bootstrap";
import Preview from "./Preview";
import Save from "./Save";

class CreateButton extends React.Component {
  render() {
    return (
      <div>
        <div className="container-preview">
          <Preview></Preview>
        </div>
         <Row>
          <Col md={9}>
            <button className="button">Print Cv</button>
            <button className="button">Download PDF</button>
            <button className="button">Send link</button>
          </Col>
          <Col md={3}>
            <Save></Save>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CreateButton;
