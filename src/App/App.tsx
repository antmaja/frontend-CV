import React from "react";
import Header from "../Header/header";
import { Container } from "react-bootstrap";
import CreateButton from "../Button/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container>
            <CreateButton></CreateButton>
        </Container>
      </div>
    );
  }
}
export default App;
