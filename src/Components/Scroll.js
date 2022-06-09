import React from 'react';
//CSS
import '../CSS/Scroll.css'

const Scroll = (props) => {
  return (
    <div className="scroll">
      {props.children}
    </div>
  );
};

export default Scroll;
