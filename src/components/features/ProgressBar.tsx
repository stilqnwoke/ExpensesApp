import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    let newStyle;

    if (progress > 100) {
      newStyle = {
        opacity: 1,
        width: `${100}%`,
      };
    } else {
      newStyle = {
        opacity: 1,
        width: `${progress}%`,
      };
    }

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {progressRefactor(progress)}
      </div>
    </div>
  );
};

function progressRefactor(progress) {
  if (progress > 100) {
    return "You have exceeded the max budget";
  }
  if (progress === 0) {
    return "";
  }
  return `${progress}%`;
}

export default ProgressBar;
