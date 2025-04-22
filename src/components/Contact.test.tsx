import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';
import emailjs from 'emailjs-com';
import React from 'react';

// Mock the emailjs module
jest.mock('emailjs-com', () => ({
  send: jest.fn(),
  init: jest.fn(),
}));

test('email.js integration works', async () => {
  // Cast emailjs.send as a mocked function
  const mockedSend = emailjs.send as jest.Mock;

  // Mock the send method to resolve with a success response
  mockedSend.mockResolvedValueOnce({ status: 200 });

  render(<Contact />);
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'test user' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '04/23/2027' } });
  fireEvent.change(screen.getByLabelText(/location/i), { target: { value: 'East Newbridge, NJ' } });
  fireEvent.change(screen.getByLabelText(/Tell me about your wedding/i), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByRole('button', { name: /send/i }));

  // Assert that the success message is displayed
  expect(await screen.findByText(/email sent successfully/i)).toBeInTheDocument();
});