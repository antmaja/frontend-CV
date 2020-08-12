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
          <Col>
            <div className="container-button">
              <button className="button">Print Cv</button>
              <button className="button">Download PDF</button>
              <button className="button">Send link</button>
            </div>
          </Col>
          <Col>
            <Save></Save>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CreateButton;
