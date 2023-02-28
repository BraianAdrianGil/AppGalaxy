import React from 'react';
import "./Button.css";


function Button(props) {
  return (
    <button  onClick={props.onClick}><box-icon name='revision' animation='flashing' ></box-icon></button>
  );
}

export default Button;