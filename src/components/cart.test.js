import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './cart';

test('adds an item to the cart', () => {
  render(<Cart />);
  const addButton = screen.getByRole('button', { name: /add to cart/i });
  fireEvent.click(addButton);
  const cartItem = screen.getByText(/item name/i); // Replace with your actual item name
  expect(cartItem).toBeInTheDocument();
});