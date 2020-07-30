import React from 'react';
import style from './style.module.scss';

const Overlay = ({ index, color }) => {
  return (
    <div
      className={style.overlay}
      data-testid={`overlay-${index}`}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default Overlay;
