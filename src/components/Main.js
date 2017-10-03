import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

import QuestionNumber from "./QuestionNumber";
import Time from "./Time";
import QuestionText from "./QuestionText";
import Option from "./Option";
import Toggle from "./Toggle";

const options = ["A", "B", "C", "D"];

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 30,
      current: 2,
      time: "04:03",
      question: {
        text:
          "In the diagram to the right, what's the average number of pupils that loved the Bacon flavour and Cheese & Onion flavour?",
        options: ["23 Pupils", "13 Pupils", "8 Pupils", "6 Pupils"],
        answer: 0,
        media: ""
      },
      selected: null
    };
  }

  selectOption(i) {
    this.setState({ selected: i });
  }

  render() {
    let { total, current, time, question } = this.state;
    return (
      <Row className>
        <Col xs={12} sm={2} />
        <Col xs={12} sm={8} className="main">
          <div className="row justify-content-between">
            <QuestionNumber current={current} total={total} />
            <Time time={time} />
          </div>
          <Row className="questionbox">
            <Col xs={1} md={1} className="green">
              {current} <i className="fa fa-long-arrow-right" />
            </Col>
            <Col xs={11} md={6}>
              <QuestionText className="questiontext" text={question.text} />
              {question.options.map((option, i) => {
                return (
                  <Option
                    key={i}
                    text={option}
                    option={options[i]}
                    selected={this.state.selected === i}
                    select={() => this.selectOption(i)}
                  />
                );
              })}

              <Toggle />
            </Col>
            <Col xs={12} sm={12} md={5}>
              <img
                src={
                  "https://drive.google.com/uc?id=0B_Fb3jIN0xDjX0wtbEFYd3RsY0U"
                }
                className="img-fluid"
                alt="A graph relating to this particular question"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
