import React from 'react';
import s from './Content.scss';

function Content(props) {
  return (
    <main className={s.content} { ...props }/>
  );
}

export default Content