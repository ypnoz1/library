import { render, screen } from '@testing-library/react';
import ButtonLogin from './ButtonLogin';
test('renders learn react link', () => {
  render( /*#__PURE__*/React.createElement(ButtonLogin, null));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});