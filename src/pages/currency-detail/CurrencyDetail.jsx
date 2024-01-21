import { useEffect, useState } from 'react'
import './CurrencyDetail.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CurrencyList() {
    const { code } = useParams();
    const [currency, setCurrency] = useState({});
    const [loading, setLoading] = useState(true);

    const apiUrl = 'https://api.livecoinwatch.com/coins/single';
    const apiKey = '325d4324-0fdb-4e5e-ae91-8ae08fdd8c1e';

    const headers = {
        'x-api-key': apiKey,
    };

    const requestData = {
        currency: 'USD',
        code: code,
        meta: true,
    };

    useEffect(() => {

        const getCurrencies = async () => {
            try {
                setLoading(true);
                const response = await axios.post(apiUrl, requestData, { headers });
                setCurrency(response.data);
            } catch (error) {
                console.error('Error en la solicitud:', error.message);
            } finally {
                setLoading(false);
            }
        };

        getCurrencies();
    }, [code]);

    return (
        <div className={`currency-details ${loading ? 'loading' : ''}`}>
            {loading ? (
                <p>Cargando... <span className="loading-spinner"></span></p>
            ) : (
                <>
                    <div className="header">
                        <img src={currency?.png64} alt={`${currency?.name} Logo`} />
                        <h1>{`${currency?.name} (${currency?.symbol})`}</h1>
                    </div>
                    <div className="info">
                        <div className="category">
                            <p>Rank: #{currency?.rank}</p>
                            <p>Market Cap: ${currency?.cap}</p>
                        </div>
                        <div className="category">
                            <p>Circulating Supply: {currency?.circulatingSupply}</p>
                            <p>Total Supply: {currency?.totalSupply}</p>
                        </div>
                    </div>
                    <div className="links">
                        <p>Links:</p>
                        <ul>
                            <li><a href={currency?.links?.website} target="_blank" rel="noopener noreferrer">Website</a></li>
                            <li><a href={currency?.links?.whitepaper} target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                        </ul>
                    </div>
                    <div className="delta">
                        <p>Delta:</p>
                        <ul>
                            <li>Hour: {currency?.delta?.hour}</li>
                            <li>Day: {currency?.delta?.day}</li>
                            <li>Week: {currency?.delta?.week}</li>
                        </ul>
                    </div>
                    <div className="go-back">
                        <Link to="/">
                            <button>Volver</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CurrencyList;