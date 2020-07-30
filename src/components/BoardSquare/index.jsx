import React from 'react';
import { useDrop } from 'react-dnd';
import Square from '../Square';
import Overlay from '../Overlay';
import { ITEM_SQUARE } from '../../constants';
import style from './style.module.scss';

const BoardSquare = ({ index, color, onDrop }) => {
  const [{ isOver }, refDrop] = useDrop({
    accept: ITEM_SQUARE,
    drop: (item) => {
      onDrop(index, item.index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={refDrop}
      className={style['board-square']}
      data-testid={`board-square-${index}`}
    >
      <Square index={index} color={color} />
      {isOver && <Overlay index={index} color="white" />}
    </div>
  );
};

export default BoardSquare;
