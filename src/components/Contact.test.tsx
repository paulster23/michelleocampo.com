import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact form', () => {
  render(<Contact />);
  expect(screen.getByRole('form')).toBeTruthy();
});
