import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  test('renders the loading correctly', () => {
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
