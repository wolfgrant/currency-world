import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../nav-bar/NavBar';


const PrivateRoute = ({ children, showNavBar }) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation();
    const currentPath = location.pathname

    if (!token && currentPath !== "/") {
        return <Navigate to="/" />
    } else if (token && currentPath === "/") {
        return <Navigate to="/list" />
    }

    return (
        <div>
            {showNavBar && <NavBar />}
            {children}
        </div>
    );
}

PrivateRoute.propTypes = {
    children: PropTypes.node, //Método del botón
    showNavBar: PropTypes.bool, //Método del botón
};


export default PrivateRoute;