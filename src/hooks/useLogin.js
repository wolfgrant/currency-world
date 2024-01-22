import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../configs/jsonForLogin.json';
import { emailRegex as regex } from '../configs/regex.js';

const useLogin = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const emailR = regex

  const loginUser = (formData) => {
    const { username, password } = formData;
    const usuarios = jsonData.usuarios;

    const usuarioencontrado = usuarios.find(
      (usuario) => usuario.usuario === username && usuario.password === password
    );

    if (usuarioencontrado) {
      sessionStorage.setItem('token', username);
      setLoginError('');
      navigate('/list');
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  return {
    loginUser,
    loginError,
    emailR,
  };
};

export default useLogin;