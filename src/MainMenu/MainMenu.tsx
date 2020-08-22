import React from "react";
import { Nav } from "react-bootstrap";
import MainMenuProperties from "./interfaceMainMenuProperties";

export class MainMenuItem {
  text: string = "";
  link: string = "";

  constructor(text: string, link: string) {
    this.text = text;
    this.link = link;
  }
}

class MainMenu extends React.Component<MainMenuProperties> {
  render() {
    return (
      <div>
        <Nav>{this.props.items.map(this.makeNavLink)}</Nav>
      </div>
    );
  }

  makeNavLink = (item: MainMenuItem) => {
    return (
      <Nav.Link key={item.text} href={item.link}>
        {item.text}
      </Nav.Link>
    );
  };
}

export default MainMenu;
