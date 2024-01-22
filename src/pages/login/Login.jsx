// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.scss';
import useLogin from '../../hooks/useLogin';
import useInputChange from '../../hooks/useInputChange';
import { sqlInyectionRegex } from '../../configs/regex';

function Login() {

    const { formData, handleInputChange } = useInputChange({
        username: '',
        password: ''
    });

    const { loginError, emailR, loginUser } = useLogin();
    const regexSQL = sqlInyectionRegex

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(formData);
    };

    const isButtonDisabled = !RegExp(emailR).exec(formData.username) || formData.password === '';

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    type="email"
                    id="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value, regexSQL)}
                    placeholder="Ingrese su usuario"
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Ingrese su contraseña"
                />

                <button type="submit" disabled={isButtonDisabled}>
                    Iniciar Sesión
                </button>
            </form>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
    );
}

export default Login;