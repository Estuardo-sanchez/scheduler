import { useState } from "react";

// MANAGE MODE
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // TRANSITION TO A NEW MODE
  const transition = (newMode, replace = false) => {
    if (!replace) {
      setMode(newMode)
      history.push(newMode)
    } else {
      setMode(newMode);
    }
  };

  // GO BACK A MODE
  const back = () => {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1])
    }
  };

  return { mode, transition, back };
};