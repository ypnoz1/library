import { render, screen } from '@testing-library/react';
import ButtonSignUp from './ButtonSignUp';
test('renders learn react link', () => {
  render( /*#__PURE__*/React.createElement(ButtonSignUp, null));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});