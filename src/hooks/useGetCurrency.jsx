import { useEffect, useState } from 'react'
import { getCurrency } from '../api/apiCurrencies';


const useGetCurrency = (code) => {

    const [currencies, setCurrencies] = useState();
    const [loading, setLoading] = useState(true);

    const getRequestCurrency = async () => {

        try {
            setLoading(true);
            const response = await getCurrency(code);
            setCurrencies(response);
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getRequestCurrency()
    }, [code])


    return {
        currencies,
        loading
    }
}

export default useGetCurrency;