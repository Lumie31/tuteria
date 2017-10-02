import React from "react";

const QuestionText = props => (
  <div className="questiontext">
    <p>
      {props.text} <span className="grey">(press A - D to answer)</span>
    </p>
  </div>
);

export default QuestionText;
