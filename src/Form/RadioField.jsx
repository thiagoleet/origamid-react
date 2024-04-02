import React from "react";
import Label from "./Label";

const RadioField = ({ pergunta, options, id, onChange, value, active }) => {
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
        display: active ? "block" : "none",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option, index) => (
        <Label
          key={"pergunta-" + id + "-" + index}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            checked={value === option}
            value={option}
            onChange={onChange}
            id={id}
            name={id}
          />
          {option}
        </Label>
      ))}
    </fieldset>
  );
};

export default RadioField;
