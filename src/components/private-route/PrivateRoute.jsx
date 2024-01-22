import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    // Lógica para determinar si el usuario está autenticado
    // Puedes implementar tu lógica de autenticación aquí, por ejemplo, comprobando si hay un token en el almacenamiento local.
    const token = sessionStorage.getItem('token');

    const location = useLocation();
    const currentPath = location.pathname

    if(!token && currentPath !== "/"){
        return <Navigate to="/"/>
    } else if (token && currentPath === "/"){
        return <Navigate to="/list"/>
    }

    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node, //Método del botón
};


export default PrivateRoute;