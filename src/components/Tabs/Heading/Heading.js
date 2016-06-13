import React from 'react';
import s from './Heading.scss';

function Heading(props) {
  return (
    <h1 className={s.heading} { ...props } />
  );
}

export default Heading;