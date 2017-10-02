import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";

const Header = props => (
  <Row className="header">
    <Col xs={6} sm={4} md={2} className="headertitle">
      <i className="logo fa fa-bookmark-o" /> tuteria
    </Col>
    <Col xs={6} sm={8} md={10} className="subjecttitle">
      {props.title}
    </Col>
  </Row>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired
};
