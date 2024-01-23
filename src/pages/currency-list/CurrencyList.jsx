// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './CurrencyList.scss'
import { Link } from 'react-router-dom';
import useGetCurrencies from '../../hooks/useGetCurrencies'

function CurrencyList() {

    const { page, handlePreviousPage, handleNextPage, currencies, loading } = useGetCurrencies();

    const textsPagionator = {
        lastPage: "< Página anterior",
        nextPage: "Página siguiente >"
    }

    return (
        <div className={`currency-list ${loading ? 'loading' : ''}`}>
            {loading ? (
                <p style={{color: 'white'}}>Cargando... <span className="loading-spinner"></span></p>
            ) : (
                <>
                    <table>
                        <thead className='hidden'>
                            <tr>
                                <th>Abreviación</th>
                                <th>Capitalización</th>
                                <th>Volumen</th>
                                <th>Precio</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencies?.map((currency, index) => (
                                <tr key={index}>
                                    <td className='hidden td-with-image' style={{ color: currency.color }}><img src={currency?.png64} alt={`${currency?.name} Logo`} /> {currency.code}</td>
                                    <td className='hidden'>{currency.cap}</td>
                                    <td className='hidden'>{currency.volume}</td>
                                    <td className='hidden'>$ {currency.rate}</td>
                                    <td className='hidden-desktop'>
                                        <div className="column">
                                            <div style={{ order: 2, display: 'flex', alignItems: 'center'}}>{currency.cap}</div>
                                            <div className='td-with-image' style={{ order: 1, color: currency.color }}><img src={currency?.png64} alt={`${currency?.name} Logo`} /> {currency.code}</div>
                                        </div>
                                    </td>

                                    <td className='hidden-desktop'>
                                        <div className="column">
                                            <div >{currency.volume}</div>
                                            <div>$ {currency.rate}</div>
                                        </div>
                                    </td>

                                    <td className='td-button'>
                                        <Link to={`/detail/${currency.code}`}>
                                            <button className="icon-view">&#128065;</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="paginator">

                        <button
                            className="button-paginator"
                            disabled={page === 1}
                            onClick={handlePreviousPage}
                        >
                            {textsPagionator.lastPage}
                        </button>
                        <div className="number-paginator">
                            <span data-testid="page">{page}</span>
                        </div>
                        <button
                            className="button-paginator"
                            onClick={handleNextPage}
                        >
                            {textsPagionator.nextPage}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CurrencyList;