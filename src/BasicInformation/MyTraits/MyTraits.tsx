import React from "react";
import "./traits.css";
import TraitsStateInterface from "./TraitsStateInterface";

class MyTraits extends React.Component {
  state: TraitsStateInterface;
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      input: "",
      myTraits: [],
    };
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      case 13:
        const { value } = event.target as HTMLInputElement;
        this.setState({
          myTraits: [...this.state.myTraits, value],
          input: "",
        });
        break;
      case 8:
        if (this.state.myTraits.length && !this.state.input.length) {
          this.setState({
            myTraits: this.state.myTraits.slice(
              0,
              this.state.myTraits.length - 1
            ),
          });
        }
        break;
    }
  };

  handleRemoveItem = (index: number) => {
    return () => {
      this.setState({
        myTraits: this.state.myTraits.filter(
          (item: any, i: number) => i !== index
        ),
      });
    };
  };
  render() {
    return (
      <div className="content-traits">
        <label>
          <p className="item-name">My Traits</p>
          <input
            className="traits-input"
            type="text"
            placeholder="Focused"
            value={this.state.input}
            onKeyDown={this.handleInputKeyDown}
            onChange={this.handleInputChange}
          />
        </label>
        <ul className="container-traits">
          {this.state.myTraits.map((item, i) => (
            <li key={i} className="traits" onClick={this.handleRemoveItem(i)}>
              {item}

              <span style={{ paddingLeft: 10 }}>x</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyTraits;
