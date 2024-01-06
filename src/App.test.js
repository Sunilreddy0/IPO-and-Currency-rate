import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

describe('App Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders App component with IPOList and Currency Rate', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText('Live IPO List')).toBeInTheDocument();
    });
  });
});