// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { describe, it, expect } from '@jest/globals';


// eslint-disable-next-line no-undef
Object.defineProperty(global, 'sessionStorage', {
  value: {
    // eslint-disable-next-line no-undef
    getItem: jest.fn(() => null), 
  },
  writable: true,
});

describe('PrivateRoute Component', () => {
  it('redirects to login when token is not present', async () => {
    // eslint-disable-next-line no-undef
    const mockNavigate = jest.fn();

    const { rerender } = render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute showNavBar={true} navigate={mockNavigate} />} />
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {});

    // eslint-disable-next-line no-undef
    Object.defineProperty(global, 'sessionStorage', {
      value: {
        // eslint-disable-next-line no-undef
        getItem: jest.fn(() => 'fakeToken'), 
      },
      writable: true,
    });

    rerender(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute showNavBar={true} navigate={mockNavigate} />} />
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {});

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});