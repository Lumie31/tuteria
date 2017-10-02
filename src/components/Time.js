import React from 'react';

const Time = (props) => (
  <div className='pull-right' >
  <p>
    <span >
      Time remaining: {props.time}
    </span>
  </p>
</div>
)

export default Time;