// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CurrencyList from './CurrencyList';
import useGetCurrencies from '../../hooks/useGetCurrencies';
import { describe, test, expect } from '@jest/globals';

// eslint-disable-next-line no-undef
jest.mock('../../hooks/useGetCurrencies');

describe('CurrencyList Component', () => {
  test('renders currency list', async () => {
    const mockCurrencies = [
      { cap: 100, code: 'USD', volume: 500, rate: 1.25 },
    ];

    useGetCurrencies.mockReturnValue({ currencies: mockCurrencies, loading: false });

    render(<CurrencyList />, { wrapper: MemoryRouter });

    await waitFor(() => {
      mockCurrencies.forEach((currency) => {
        expect(screen.getByText(currency.code, { selector: '.hidden' })).toBeInTheDocument();
        expect(screen.getByText(`$ ${currency.rate}`, { selector: '.hidden' })).toBeInTheDocument();
      });
    });
  });
});