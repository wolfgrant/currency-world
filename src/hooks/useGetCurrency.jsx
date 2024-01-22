import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetCurrency = (url, apikey, requestData) => {

    const [currencies, setCurrencies] = useState();
    const [loading, setLoading] = useState(true);

    const headers = {
        'x-api-key': apikey,
    };

    const getCurrency = async () => {

        try {
            setLoading(true);
            const response = await axios.post(url, requestData, { headers });
            setCurrencies(response.data);
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

export default useGetCurrency;