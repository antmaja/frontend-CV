import React, { useState } from "react";
import { produce } from "immer";
import { generate } from "shortid";
import ExperienceDuplicateInterface from "./ExperienceDuplicateInterface";

const DuplicateExperience = () => {
  const [experience, setExperience] = useState<ExperienceDuplicateInterface[]>(
    []
  );

  return (
    <div>
      {experience.map((e, index) => {
        return (
          <div key={e.id} className="padding-top-20">
            <p>Years</p>
            <input
              onChange={(event) => {
                const duplicateyears = event.target.value;
                setExperience((currentExperience) =>
                  produce(currentExperience, (value) => {
                    value[index].duplicateyears = duplicateyears;
                  })
                );
              }}
              value={e.duplicateyears}
              placeholder="Add number"
              className="duplicate-input"
            />
            <br />
            <br />
            <p>Position</p>
            <input
              onChange={(event) => {
                const duplicateposition = event.target.value;
                setExperience((currentExperience) =>
                  produce(currentExperience, (value) => {
                    value[index].duplicateposition = duplicateposition;
                  })
                );
              }}
              value={e.duplicateposition}
              placeholder="Position"
              className="duplicate-input"
            />
            <div className="padding-top-20">
              <button
                className="button-delete"
                onClick={() => {
                  setExperience((currentExperience) =>
                    currentExperience.filter((x) => x.id !== e.id)
                  );
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <br />
      <button
        className="add-another"
        onClick={() => {
          setExperience((currentExperience) => [
            ...currentExperience,
            {
              id: generate(),
              duplicateyears: "",
              duplicateposition: "",
            },
          ]);
        }}
      >
        Add Another
      </button>
    </div>
  );
};
export default DuplicateExperience;
