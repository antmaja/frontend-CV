import React from "react";
import "./language.css";
import LanguageSkillStateInterface from "./LanguageSkillStateInterface";

class LanguageSkills extends React.Component {
  state: LanguageSkillStateInterface;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      arrayLanguageSkill: [
        {
          select: "",
          selectRadio: "",
        },
      ],
    };
  }

  handleSelectChange = (id: number) => (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelect = this.state.arrayLanguageSkill.map((language, idx) => {
      if (id !== idx) return language;
      return {
        ...language,
        select: event.target.value,
      };
    });
    this.setState({ arrayLanguageSkill: newSelect });
  };

  onValueChange = (id: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSelectRadio = this.state.arrayLanguageSkill.map(
      (language, idx) => {
        if (id !== idx) return language;
        return {
          ...language,
          selectRadio: event.target.value,
        };
      }
    );
    this.setState({ arrayLanguageSkill: newSelectRadio });
  };

  handleAddAnother = () => {
    this.setState({
      arrayLanguageSkill: this.state.arrayLanguageSkill.concat([
        {
          select: "",
          selectRadio: "",
        },
      ]),
    });
  };

  handleDelete = (id: number) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    this.setState({
      arrayLanguageSkill: this.state.arrayLanguageSkill.filter(
        (s, idx) => id !== idx
      ),
    });
  };
  render() {
    return (
      <div className="content-select-language">
        <p className="item-name container-select-language">Language Skills</p>
        {this.state.arrayLanguageSkill.map((language, id) => (
          <div className="select container-select" key={id}>
            <h6>Choose Language</h6>
            <select
              className="description-select description-item"
              value={language.select}
              onChange={this.handleSelectChange(id)}
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
                    checked={language.selectRadio === "native speacker"}
                    onChange={this.onValueChange(id)}
                  />
                  <label> native speaker</label>
                  <br />
                  <input
                    type="radio"
                    value="near native/fluent"
                    checked={language.selectRadio === "near native/fluent"}
                    onChange={this.onValueChange(id)}
                  />
                  <label>near native/fluent</label>
                  <br />
                  <input
                    type="radio"
                    value="highly proficient"
                    checked={language.selectRadio === "highly proficient"}
                    onChange={this.onValueChange(id)}
                  />
                  <label>highly proficient</label>
                  <br />
                  <input
                    type="radio"
                    value="very good overall"
                    checked={language.selectRadio === "very good overall"}
                    onChange={this.onValueChange(id)}
                  />
                  <label>very good overall</label>
                  <br />
                  <input
                    type="radio"
                    value="good working knowledge"
                    checked={language.selectRadio === "good working knowledge"}
                    onChange={this.onValueChange(id)}
                  />
                  <label>good working knowledge</label>
                  <br />
                  <input
                    type="radio"
                    value="working knowledge"
                    checked={language.selectRadio === "working knowledge"}
                    onChange={this.onValueChange(id)}
                  />
                  <label>working knowledge</label>
                  <br />
                </div>
              </div>
            </form>

            <div className="delete-container">
              <button onClick={this.handleDelete(id)} className="add-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add-another-container">
          <button onClick={this.handleAddAnother} className="add-another">
            Add Another
          </button>
        </div>
      </div>
    );
  }
}
export default LanguageSkills;
