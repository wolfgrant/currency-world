import './CurrencyList.scss'
import { Link } from 'react-router-dom';
import useGetCurrencies from '../../hooks/useGetCurrencies'

function CurrencyList() {
    
    const { currencies, loading } = useGetCurrencies()

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
                        {currencies?.map((currency, index) => (
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