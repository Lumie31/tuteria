import React from "react";
import { Button } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

const Toggle = props => (
  <div className="row justify-content-between button">
    <Button xs={6} sm={6} md={6}>
      <p className="tog">
        {" "}
        <i className="fa fa-chevron-left" /> Previous
      </p>
    </Button>

    <Button xs={6} sm={6} md={6} className="right" color="primary">
      <p className="tog">
        {" "}
        Next Question <i className="fa fa-chevron-right" />
      </p>
    </Button>
  </div>
);

export default Toggle;
