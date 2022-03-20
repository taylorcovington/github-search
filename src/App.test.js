import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import App from './App';

test('renders github search heading', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/github search/i)).toBeInTheDocument();
});
