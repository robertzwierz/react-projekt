import React, { useState } from "react";
import Button from "./components/button";
import Outcome from "./components/outcome";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button setCount={setCount} />
      <div>
        <Outcome count={count} />
      </div>
    </div>
  );
}

export default App;
