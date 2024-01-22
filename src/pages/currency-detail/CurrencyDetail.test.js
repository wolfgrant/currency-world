// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CurrencyDetail from './CurrencyDetail';
import { describe, it, expect } from '@jest/globals';

// eslint-disable-next-line no-undef
jest.mock('../../hooks/useGetCurrency', () => ({
  __esModule: true,
  // eslint-disable-next-line no-undef
  default: jest.fn(),
}));

describe('CurrencyDetail Component', () => {
  it('renders currency details', async () => {
    const mockCurrencies = {
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      cap: 1000000000,
      circulatingSupply: 18000000,
      totalSupply: 21000000,
      links: {
        website: 'https://bitcoin.org/',
        whitepaper: 'https://bitcoin.org/bitcoin.pdf',
      },
      delta: {
        hour: 1.5,
        day: 5.0,
        week: -2.0,
      },
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(require('../../hooks/useGetCurrency'), 'default').mockReturnValue({
      currencies: mockCurrencies,
      loading: false,
    });

    render(
      <MemoryRouter initialEntries={['/detail/BTC']}>
        <Routes>
          <Route path="/detail/:code" element={<CurrencyDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Volver')).toBeInTheDocument();
    });

    expect(screen.getByAltText('Bitcoin Logo')).toBeInTheDocument();
    expect(screen.getByText('Rango: #1')).toBeInTheDocument();
    expect(screen.getByText('Capitalización de Mercado: $1000000000')).toBeInTheDocument();
    expect(screen.getByText('Suministro Circulante: 18000000')).toBeInTheDocument();
    expect(screen.getByText('Suministro Total: 21000000')).toBeInTheDocument();
    expect(screen.getByText('Enlaces:')).toBeInTheDocument();
    expect(screen.getByText('Sitio web')).toBeInTheDocument();
    expect(screen.getByText('Whitepaper')).toBeInTheDocument();
    expect(screen.getByText('Delta:')).toBeInTheDocument();
    expect(screen.getByText('Hora: 1.5')).toBeInTheDocument();
  });
});