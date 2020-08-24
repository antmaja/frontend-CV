import React from "react";
import LanguageSkillStateInterface from "./LanguageSkillStateInterface";
import DuplicateLanguageSkill from "../../DuplicateComponents/DuplicateLanguageSkill/DuplicateLanguageSkill";

class LanguageSkills extends React.Component {
  state: LanguageSkillStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      select: "",
      selected: "",
    };
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ select: event.target.value });
  };
  onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selected: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="content-select-language">
          <p className="item-name padding-top-50">Language Skills</p>
          <div className="select">
            <h6>Choose Language</h6>
            <select
              className="description-select description-item"
              value={this.state.select}
              onChange={(event) => this.handleSelectChange(event as any)}
            >
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Arab">Arab</option>
              <option value="French">French</option>
              <option value="Bosnian">Bosnian</option>
            </select>

            <form>
              <br />
              <div className="content-radio description-item">
                <p>Level</p>
                <div className="radio">
                  <input
                    type="radio"
                    value="native speacker"
                    checked={this.state.selected === "native speacker"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label> native speaker</label>
                  <br />
                  <input
                    type="radio"
                    value="near native/fluent"
                    checked={this.state.selected === "near native/fluent"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label>near native/fluent</label>
                  <br />
                  <input
                    type="radio"
                    value="highly proficient"
                    checked={this.state.selected === "highly proficient"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label>highly proficient</label>
                  <br />
                  <input
                    type="radio"
                    value="very good overall"
                    checked={this.state.selected === "very good overall"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label>very good overall</label>
                  <br />
                  <input
                    type="radio"
                    value="good working knowledge"
                    checked={this.state.selected === "good working knowledge"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label>good working knowledge</label>
                  <br />
                  <input
                    type="radio"
                    value="working knowledge"
                    checked={this.state.selected === "working knowledge"}
                    onChange={(event) => this.onValueChange(event)}
                  />
                  <label>working knowledge</label>
                  <br />
                </div>
              </div>
            </form>
            <br />
            <DuplicateLanguageSkill></DuplicateLanguageSkill>
          </div>
        </div>
      </div>
    );
  }
}
export default LanguageSkills;
