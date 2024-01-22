// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './CurrencyList.scss'
import { Link } from 'react-router-dom';
import useGetCurrencies from '../../hooks/useGetCurrencies'

function CurrencyList() {

    const { page, handlePreviousPage, handleNextPage, currencies, loading, disabledButtonLast } = useGetCurrencies();

    const textsPagionator = {
        lastPage: "< Página anterior",
        nextPage: "Página siguiente >"
    }

    return (
        <div className={`currency-list ${loading ? 'loading' : ''}`}>
            {loading ? (
                <p>Cargando... <span className="loading-spinner"></span></p>
            ) : (
                <>
                    <table>
                        <thead className='hidden'>
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
                                    {/* Primera columna: Code y Cap */}
                                    <td className='hidden'>{currency.cap}</td>
                                    <td className='hidden'>{currency.code}</td>
                                    <td className='hidden'>{currency.volume}</td>
                                    <td className='hidden'>$ {currency.rate}</td>
                                    <td className='hidden-desktop'>
                                        <div className="column">
                                            <div style={{ order: 2 }}>{currency.cap}</div>
                                            <div style={{ order: 1 }}>{currency.code}</div>
                                        </div>
                                    </td>

                                    {/* Segunda columna: Rate y Volume */}
                                    <td className='hidden-desktop'>
                                        <div className="column">
                                            <div >{currency.volume}</div>
                                            <div>$ {currency.rate}</div>
                                        </div>
                                    </td>

                                    {/* Enlace para detalles */}
                                    <td>
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
                        <span>{page}</span>
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