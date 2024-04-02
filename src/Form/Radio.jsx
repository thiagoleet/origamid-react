import React from "react";
import Label from "./Label";

const Radio = ({ options, value, setValue }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Label key={option}>
            <input
              type="radio"
              name={option}
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
            />
            {option}
          </Label>
        );
      })}
    </>
  );
};

export default Radio;
