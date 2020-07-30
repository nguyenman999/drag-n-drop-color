import React from 'react';
import { useDrag } from 'react-dnd';
import { ITEM_SQUARE } from '../../constants';
import style from './style.module.scss';

const Square = ({ index, color }) => {
  const [{ isDragging }, refDrag] = useDrag({
    item: { type: ITEM_SQUARE, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={refDrag}
      className={style.square}
      data-testid={`square-${index}`}
      style={{
        backgroundColor: color,
        opacity: isDragging ? 0.5 : 1,
      }}
    />
  );
};

export default Square;
