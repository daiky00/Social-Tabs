import React from 'react';
import s from './Img.scss';

function Img(props) {
  return (
    <img className={s.img} { ...props }/>
  );
}

export default Img;