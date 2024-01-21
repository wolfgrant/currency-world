import { useState, useEffect } from 'react'
import axios from 'axios'
import './CurrencyList.scss'
import { Link } from 'react-router-dom';

function CurrencyList() {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiUrl = 'https://api.livecoinwatch.com/coins/list';
    const apiKey = '325d4324-0fdb-4e5e-ae91-8ae08fdd8c1e';

    const headers = {
        'x-api-key': apiKey,
    };
    const requestData = {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 5,
        meta: false,
    };

    useEffect(() => {
        const getCurrencies = async () => {
            try {
                setLoading(true);
                const response = await axios.post(apiUrl, requestData, { headers });
                setCurrencies(response.data);
            } catch (error) {
                console.error('Error en la solicitud:', error.message);
            } finally {
                setLoading(false);
            }
        };

        getCurrencies();
    }, []);

    return (
        <div className={`currency-list ${loading ? 'loading' : ''}`}>
            {loading ? (
                <p>Cargando... <span className="loading-spinner"></span></p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Capitalización</th>
                            <th>Abreviación</th>
                            <th>Precio</th>
                            <th>Volumen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currencies.map((currency, index) => (
                            <tr key={index}>
                                <td>{currency.cap}</td>
                                <td>{currency.code}</td>
                                <td>{currency.rate}</td>
                                <td>{currency.volume}</td>
                                <td>
                                    <Link to={`/detail/${currency.code}`}>
                                        <button className="icon-view">&#128065;</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default CurrencyList;