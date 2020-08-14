import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import { MenuItems } from "./items";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid-rectangle">
          <div className="header">
            <a className="header-title cursor-pointer item" href="/">
              Ant Colony
            </a>
            <div className="centered-links">
              <MainMenu items={MenuItems} />
            </div>
            <div className="right-link">
              <button className="log-out-button">Log out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
