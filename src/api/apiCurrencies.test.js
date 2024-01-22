import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import PrivateRoute from '../components/private-route/PrivateRoute';

describe('PrivateRoute Component', () => {
  it('redirects to login when token is not present', async () => {
    // Configura el mock de sessionStorage.removeItem
    const removeItemMock = jest.spyOn(sessionStorage, 'removeItem').mockReturnValue();

    // Configura el mock de navigate
    const mockNavigate = jest.fn();

    // Renderiza el componente dentro de un MemoryRouter y Routes
    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute showNavBar={true} navigate={mockNavigate} />} />
        </Routes>
      </MemoryRouter>
    );

    // Espera a que se complete la redirección
    await waitFor(async () => {
      // Realiza todas las operaciones dentro de act para garantizar que se completen los efectos secundarios
      await act(async () => {
        // Verifica que sessionStorage.removeItem y navigate hayan sido llamados
        expect(removeItemMock).toHaveBeenCalledWith('token');
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });
  });
});