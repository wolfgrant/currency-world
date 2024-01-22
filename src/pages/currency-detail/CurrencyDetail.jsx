import './CurrencyDetail.scss';
import { Link, useParams } from 'react-router-dom';
import useGetCurrency from '../../hooks/useGetCurrency'

function CurrencyDetail() {
    const { code } = useParams();

    const {currencies, loading } = useGetCurrency(code)

    return (
        <div className={`currency-details ${loading ? 'loading' : ''}`}>
            {loading ? (
                <p>Cargando... <span className="loading-spinner"></span></p>
            ) : (
                <>
                    <div className="header">
                        <img src={currencies?.png64} alt={`${currencies?.name} Logo`} />
                        <h1>{`${currencies?.name} ${currencies?.symbol ? `(${currencies?.symbol})` : ''}`}</h1>
                    </div>
                    <div className="info">
                        <div className="category">
                            <p>Rango: #{currencies?.rank}</p>
                            <p>Capitalización de Mercado: ${currencies?.cap}</p>
                        </div>
                        <div className="category">
                            <p>Suministro Circulante: {currencies?.circulatingSupply}</p>
                            <p>Suministro Total: {currencies?.totalSupply}</p>
                        </div>
                    </div>
                    <div className="links">
                        <p>Enlaces:</p>
                        <ul>
                            <li><a href={currencies?.links?.website} target="_blank" rel="noopener noreferrer">Sitio web</a></li>
                            <li><a href={currencies?.links?.whitepaper} target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                        </ul>
                    </div>
                    <div className="delta">
                        <p>Delta:</p>
                        <ul>
                            <li>Hora: {currencies?.delta?.hour}</li>
                            <li>Día: {currencies?.delta?.day}</li>
                            <li>Semana: {currencies?.delta?.week}</li>
                        </ul>
                    </div>
                    <div className="go-back">
                        <Link to="/list">
                            <button>Volver</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CurrencyDetail;