import './Login.scss';
import useLogin from '../../hooks/useLogin';
import useInputChange from '../../hooks/useInputChange';

function Login() {
    
    const { formData, handleInputChange } = useInputChange({
        username: '',
        password: ''
    })

    const {loginError, emailRegex, loginUser} = useLogin()


    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(formData)
    };

    const isButtonDisabled = !RegExp(emailRegex).exec(formData.username) || formData.password === '';

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    type="email"
                    id="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
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