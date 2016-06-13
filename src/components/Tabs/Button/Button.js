import React from 'react';
import s from './Button.scss';

function Button(props) {
  return (
    <button className={s.button} { ...props }/>
  );
}

export default Button;