import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders blank tiles to start', () => {
  render(<App />);
  const tiles = screen.getAllByTestId('tile')

  expect(tiles.length).toBe(9)
  tiles.forEach((tile) => {
    expect(tile.innerHTML).toBe("")
  })
});

test('renders a blank board to start', () => {
  render(<App />);
  const board = screen.getByTestId('board')

  expect(board).toBeInTheDocument()
});

test('when the first square is clicked it turns into an X', () => {
  // render app
  render(<App />)
  // find the first tile
  const randomTile = Math.floor(Math.random() * 9);
  const tile = screen.getAllByTestId('tile')[randomTile]
  // click it
  fireEvent.click(tile)
  // assert the first tile has innerText of "X"
  expect(tile.innerHTML).toBe("X")
  // assert all the other tiles have innerText of ""

});


test('when the second square is clicked it turns into an O', () => {
  // render app
  render(<App />)
  // find the first tile
  const tile = screen.getAllByTestId('tile')[0]
  // click it
  fireEvent.click(tile)
  // assert the first tile has innerText of "X"
  expect(tile.innerHTML).toBe("X")
  // assert all the other tiles have innerText of ""
  const tile2 = screen.getAllByTestId('tile')[1]
  // click it
  fireEvent.click(tile2)
  // assert the first tile has innerText of "X"
  expect(tile2.innerHTML).toBe("O")

});