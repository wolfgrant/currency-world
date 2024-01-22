import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import PrivateRoute from '../components/private-route/PrivateRoute';

describe('PrivateRoute Component', () => {
  it('redirects to login when token is not present', async () => {
    const removeItemMock = jest.spyOn(sessionStorage, 'removeItem').mockReturnValue();

    const mockNavigate = jest.fn();

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute showNavBar={true} navigate={mockNavigate} />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(async () => {
      await act(async () => {
        expect(removeItemMock).toHaveBeenCalledWith('token');
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });
  });
});