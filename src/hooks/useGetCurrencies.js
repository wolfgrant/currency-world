import { useState, useEffect } from 'react';
import { getCurrencies } from '../api/apiCurrencies';

const PAGE_LIMIT = 5; // Cantidad de elementos por página

const useGetCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const consumeApi = async (currentPage) => {
    const offset = (currentPage - 1) * PAGE_LIMIT;
    try {
      setLoading(true);
      const response = await getCurrencies(offset);
      setCurrencies(response);

    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  }

  useEffect(() => {
    consumeApi(page);
  }, [page]);

  return {
    page,
    handleNextPage,
    handlePreviousPage,
    currencies,
    loading,
  };
};

export default useGetCurrencies;