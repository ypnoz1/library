import { render, screen } from '@testing-library/react';
import ButtonLogin from './ButtonLogin';

test('renders learn react link', () => {
  render(<ButtonLogin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
