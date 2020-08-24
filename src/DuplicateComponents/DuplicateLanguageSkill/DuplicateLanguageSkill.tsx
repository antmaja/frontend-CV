import React, { useState } from "react";
import produce from "immer";
import LanguageSkillDuplicateInterface from "./LanguageSkillDuplicateInterface";
import { generate } from "shortid";

const DuplicateLanguageSkill = () => {
  const [LanguageSkills, setLaguageSkill] = useState<
    LanguageSkillDuplicateInterface[]
  >([]);

  return (
    <div>
      {LanguageSkills.map((ls, index) => {
        return (
          <div key={ls.id} className="padding-top-20">
            <h6>Choose Language</h6>
            <select
              className="description-select description-item"
              onChange={(event) => {
                const duplicateselect = event.target.value;
                setLaguageSkill((currentLanguageSkill) =>
                  produce(currentLanguageSkill, (value) => {
                    value[index].duplicateselect = duplicateselect;
                  })
                );
              }}
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
                    checked={ls.duplicateselected === "native speacker"}
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (v) => {
                          v[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                  />
                  <label> native speaker</label>
                  <br />
                  <input
                    type="radio"
                    value="near native/fluent"
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (value) => {
                          value[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                    checked={ls.duplicateselected === "near native/fluent"}
                  />
                  <label>near native/fluent</label>
                  <br />
                  <input
                    type="radio"
                    value="highly proficient"
                    checked={ls.duplicateselected === "highly proficient"}
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (value) => {
                          value[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                  />
                  <label>highly proficient</label>
                  <br />
                  <input
                    type="radio"
                    value="very good overall"
                    checked={ls.duplicateselected === "very good overall"}
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (v) => {
                          v[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                  />
                  <label>very good overall</label>
                  <br />
                  <input
                    type="radio"
                    value="good working knowledge"
                    checked={ls.duplicateselected === "good working knowledge"}
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (v) => {
                          v[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                  />
                  <label>good working knowledge</label>
                  <br />
                  <input
                    type="radio"
                    value="working knowledge"
                    checked={ls.duplicateselected === "working knowledge"}
                    onChange={(event) => {
                      const duplicateselected = event.target.value;
                      setLaguageSkill((currentLanguageSkill) =>
                        produce(currentLanguageSkill, (v) => {
                          v[index].duplicateselected = duplicateselected;
                        })
                      );
                    }}
                  />
                  <label>working knowledge</label>
                  <br />
                </div>
              </div>
            </form>
            <div className="padding-top-20">
              <button
                className="button-delete"
                onClick={() => {
                  setLaguageSkill((currentLanguageSkill) =>
                    currentLanguageSkill.filter((v) => v.id !== ls.id)
                  );
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div className="padding-top-20">
        <button
          className="add-another"
          onClick={() => {
            setLaguageSkill((currentLanguageSkill) => [
              ...currentLanguageSkill,
              {
                id: generate(),
                duplicateselect: "",
                duplicateselected: "",
              },
            ]);
          }}
        >
          Add another
        </button>
      </div>
    </div>
  );
};
export default DuplicateLanguageSkill;
