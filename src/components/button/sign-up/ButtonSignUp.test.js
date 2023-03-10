import { render, screen } from '@testing-library/react';
import ButtonSignUp from './ButtonSignUp';

test('renders learn react link', () => {
  render(<ButtonSignUp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
