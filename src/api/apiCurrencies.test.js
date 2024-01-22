import api from './api';
import { getCurrencies, getCurrency } from './currencies';

jest.mock('./api');

describe('getCurrencies', () => {
  xit('fetches currencies successfully', async () => {
    const mockResponse = { data: 'mocked data' };
    api.post.mockResolvedValue(mockResponse);

    const result = await getCurrencies();

    expect(api.post).toHaveBeenCalledWith('/coins/list', {
      currency: 'USD',
      sort: 'rank',
      order: 'ascending',
      offset: 0,
      limit: 5,
      meta: false,
    });
    expect(result).toEqual('mocked data');
  });
});

describe('getCurrency', () => {
  xit('fetches a single currency successfully', async () => {
    const mockResponse = { data: 'mocked data' };
    api.post.mockResolvedValue(mockResponse);

    const result = await getCurrency('BTC');

    expect(api.post).toHaveBeenCalledWith('/coins/single', {
      currency: 'USD',
      code: 'BTC',
      meta: true,
    });
    expect(result).toEqual('mocked data');
  });
});