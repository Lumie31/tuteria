import React from 'react'

const QuestionNumber = props => (
  <div className='pull-left' >
    <p>
      <span className='bold' >
        Question {props.current} of {props.total}
      </span> - 
      <span> Multiple Choice </span>
    </p>
  </div>
)

export default QuestionNumber;