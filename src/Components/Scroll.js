import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', borderTop: '2px solid green', borderBottom: '2px solid green', height: '800px',}}>
      {props.children}
    </div>
  );
};

export default Scroll;
