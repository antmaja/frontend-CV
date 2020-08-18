import React from "react";
import Header from "../Header/header";
import { Container, Row, Col } from "react-bootstrap";
import CreateButton from "../Button/Button";
import AddNameEmail from "../Information/AddNameEmail/NameEmail";
import Resume from "../Information/AddResume/Resume";
import Position from "../Information/AddPosition/Position";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <CreateButton />
          <div className="content-information">
            <Row>
              <Col>
                <AddNameEmail />
              </Col>
              <Col>
                <Position />
              </Col>
            </Row>
          </div>
          <div className="information-resume">
            <Row>
              <Col>
                <Resume />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
