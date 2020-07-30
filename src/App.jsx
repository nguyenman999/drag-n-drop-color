import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <DndProvider backend={HTML5Backend}>
        <div className={style['board-container']}>
          <Board />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
