import React from "react";
import "./button.css";

const Button = ({ setCount }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setCount((setCount) => setCount + 1);
      }}
    >
      Dodaj klik!
    </button>
  );
};

export default Button;
