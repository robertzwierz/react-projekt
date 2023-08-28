import React from "react";
import "./outcome.css";

const Outcome = ({ count }) => {
  return <span className="outcome">Ilość kliknięć: {count}</span>;
};

export default Outcome;
