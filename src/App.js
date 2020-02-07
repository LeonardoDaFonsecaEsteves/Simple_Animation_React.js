import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Mouve from "./utils/move.utils";

function App() {
  const [state, setState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Mouve(["leaves1", "leaves2", "bear", "ground", "stars", "bg"], state);
  }, [state]);

  return (
    <div
      className="main"
      onMouseMove={({ clientX: x, clientY: y }) =>
        setState({ x: x / window.innerWidth, y: y / window.innerHeight })
      }
    >
      <div className="bg" id="bg" />
      <div className="stars" id="stars" />
      <div className="ground" id="ground" />
      <div className="bear" id="bear" />
      <div className="leaves1" id="leaves1" />
      <div className="leaves2" id="leaves2" />
    </div>
  );
}

export default App;
