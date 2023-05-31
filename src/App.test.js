import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have correct Title', () => {
  render(<App />);
  const text = screen.getByText("Awesome Counter");
  expect(text).toBeInTheDocument();
});
