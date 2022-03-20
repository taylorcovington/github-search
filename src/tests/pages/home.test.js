import { render, screen, userEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from '../../pages/Home';

test('renders github search heading', () => {
  render(<HomePage />, { wrapper: MemoryRouter });
  expect(screen.getByText(/github search/i)).toBeInTheDocument();
});
test('types in search input field', () => {
  render(<HomePage />, { wrapper: MemoryRouter });
  userEvent.type(screen.getByRole('textbox'), 'hi')
  expect(screen.getByRole('textbox')).toHaveValue('hi')
});
