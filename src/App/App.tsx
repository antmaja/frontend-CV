import React from "react";
import Header from "../Header/header";
import { Container, Row, Col } from "react-bootstrap";
import CreateButton from "../Button/Button";
import Resume from "../Information/AddResume/Resume";
import Position from "../Information/AddPosition/Position";
import AddImage from "../AddImage/AddImage";
import PersonalInfo from "../BasicInformation/PersonalInfo/PersonalInfo";
import Experience from "../BasicInformation/Experience/Experience";
import LanguageSkills from "../BasicInformation/LanguageSkills/LanguageSkills";
import AddNameEmail from "../Information/AddNameEmail/AddNameEmail";
import Education from "../BasicInformation/Education/Education";

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
          <Row>
            <Col md={4}>
              <AddImage></AddImage>
              <div className="basic-information">
                <PersonalInfo></PersonalInfo>
                <Experience></Experience>
                <LanguageSkills></LanguageSkills>
                <Education></Education>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
