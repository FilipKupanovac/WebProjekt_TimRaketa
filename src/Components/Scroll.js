//Misc
import React from 'react';
//Components
import DetailsCard from './DetailsCard';

//CSS
import '../CSS/Scroll.css'

const Scroll = (props, {id, pokemon}) => {
  return (
      <div className="scroll">
        {props.children}
      </div>
  );
};

export default Scroll;
