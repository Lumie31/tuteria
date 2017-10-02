import React from "react";
import PropTypes from "prop-types";

const Option = props => (
  <div
    className={`option option-${props.selected ? "green" : "grey"}`}
    onClick={() => props.select()}
  >
    <div />
    <a href="" className="left badge badge-light">
      {props.option}
    </a>
    <span className="bold optiontext">{props.text}</span>
  </div>
);

export default Option;

Option.propTypes = {
  option: PropTypes.string.isRequired
};
