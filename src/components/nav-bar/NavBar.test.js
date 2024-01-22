// eslint-disable-next-line no-unused-vars
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';
import { describe, it, expect } from '@jest/globals';

describe('NavBar Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(getByText('Currency World')).toBeInTheDocument();
    expect(getByText('Cerrar Sesión')).toBeInTheDocument();
  });

  it('calls handleLogout on button click', () => {
    // eslint-disable-next-line no-undef
    const removeItemMock = jest.fn();
    Object.defineProperty(window, 'sessionStorage', {
      value: { removeItem: removeItemMock },
      writable: true,
    });

    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const logoutButton = getByText('Cerrar Sesión');
    fireEvent.click(logoutButton);

    expect(removeItemMock).toHaveBeenCalledWith('token');
  });
});