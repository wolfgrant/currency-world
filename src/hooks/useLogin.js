import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../configs/jsonForLogin.json';

const useLogin = () => {
  const [loginError, setLoginError] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const navigate = useNavigate();

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
    emailRegex,
  };
};

export default useLogin;