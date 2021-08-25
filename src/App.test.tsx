import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders blank tiles to start', () => {
  render(<App />);
  const winnerAnnouncement = screen.getByTestId('winner-announcement')
  expect (winnerAnnouncement.innerHTML).toBe('Game in Progress!')

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
  const tile = screen.getAllByTestId('tile')[0]
  fireEvent.click(tile)
  expect(tile.innerHTML).toBe("X")

  const tile2 = screen.getAllByTestId('tile')[1]
  fireEvent.click(tile2)
  expect(tile2.innerHTML).toBe("O")
});

test('when the first row has same symbols, the game is over', () => {
  // render app
  render(<App />)
  const tiles = screen.getAllByTestId('tile')
  fireEvent.click(tiles[0])
  fireEvent.click(tiles[3])
  fireEvent.click(tiles[1])
  fireEvent.click(tiles[4])
  fireEvent.click(tiles[2])

  const winnerAnnouncement = screen.getByTestId('winner-announcement')
  expect (winnerAnnouncement.innerHTML).toBe('X has won!')

});