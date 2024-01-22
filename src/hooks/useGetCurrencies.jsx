import { useEffect, useState } from 'react'
import { getCurrencies } from '../api/apiCurrencies'

const useGetCurrencies = () => {

    const [currencies, setCurrencies] = useState();
    const [loading, setLoading] = useState(true);

    const getCurrency = async () => {

        try {
            setLoading(true);
            const response = await getCurrencies();
            setCurrencies(response);
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        getCurrency()
    }, [])


    return {
        currencies,
        loading
    }
}

export default useGetCurrencies;