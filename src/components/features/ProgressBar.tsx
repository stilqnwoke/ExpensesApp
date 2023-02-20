import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {progress == 0 ? "" : `${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
