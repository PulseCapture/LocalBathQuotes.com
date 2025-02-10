// src/utils/textUtils.js
import React from "react";

export const highlightExclamationMarks = (text) => {
  return text.split("!").map((part, index, arr) =>
    index < arr.length - 1 ? (
      <React.Fragment key={index}>
        {part}
        <span className="text-[#89B8F6]">!</span>
      </React.Fragment>
    ) : (
      part
    )
  );
};
