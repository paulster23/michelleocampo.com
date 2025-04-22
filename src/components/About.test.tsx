import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
    it('renders correctly', () => {
        render(<About />);
        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
});