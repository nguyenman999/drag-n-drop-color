import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('the app shoud handle drag and drop', async () => {
    render(<App />);
    // the board of colors with size 0f 64
    const boards = screen.getAllByTestId(/board-square-./);
    expect(boards.length).toBe(64);
    // the app should handle drag and drop
    const dragSquare = screen.getByTestId('square-0');
    const dropBoardSquare = screen.getByTestId('board-square-1');
    const dragColor = dragSquare.style['background-color'];
    fireEvent.dragStart(dragSquare);
    fireEvent.dragEnter(dropBoardSquare);
    fireEvent.dragOver(dropBoardSquare);
    // overlay should show when drag enter
    screen.getByTestId('overlay-1');
    fireEvent.drop(dropBoardSquare);
    // the color of drop square should change to the new color
    const dropSquare = screen.getByTestId('square-1');
    const drogColor = dropSquare.style['background-color'];
    expect(drogColor).toBe(dragColor);
  });
});
