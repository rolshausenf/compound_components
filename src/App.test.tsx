import { render, screen } from '@testing-library/react';
import App from './App';

test('renders open modal button', () => {
  render(<App />);
  const headline: HTMLElement = screen.getByRole('heading', {name: /compound component tutorial/i})
  expect(headline).toBeInTheDocument();
});
