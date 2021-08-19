import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a blank board to start', () => {
  render(<App />);
  const tiles = screen.getAllByTestId('tile')

  expect(tiles.length).toBe(9)
});
