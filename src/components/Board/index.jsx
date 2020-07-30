import React, { useState } from 'react';
import colormap from 'colormap';
import BoardSquare from '../BoardSquare';
import style from './style.module.scss';

const Board = () => {
  const [colors, setColors] = useState(() => {
    const initColors = colormap({
      colormap: 'jet',
      nshades: 64,
      format: 'hex',
      alpha: 1,
    });
    const results = initColors.map((_, index) => {
      const x = index % 8;
      const y = Math.floor(index / 8);
      const coloridx = 56 - 8 * x + y;
      return initColors[coloridx];
    });
    return results;
  });

  const swapColors = (source, target) => {
    const cloneColors = [...colors];
    const temp = cloneColors[source];
    cloneColors[source] = cloneColors[target];
    cloneColors[target] = temp;
    setColors(cloneColors);
  };

  const renderSquare = (i) => {
    return (
      <div key={i} className={style['board-square-container']}>
        <BoardSquare index={i} color={colors[i]} onDrop={swapColors} />
      </div>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }

  return <div className={style.board}>{squares}</div>;
};

export default Board;
