// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Login from './Login';
import { describe, it, expect } from '@jest/globals';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(
      <Router> 
        <Login />
      </Router>
    );
  });

  it('handles form input changes', () => {
    const { getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );

    const usernameInput = getByLabelText('Usuario');
    const passwordInput = getByLabelText('Contraseña');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });
});
