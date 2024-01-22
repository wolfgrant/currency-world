import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../nav-bar/NavBar';
import { useEffect } from 'react';


const PrivateRoute = ({ children, showNavBar }) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (!token && currentPath !== "/") {
            navigate("/");
        } else if (token && currentPath === "/") {
            navigate("/list");
        }
    }, [token, currentPath, navigate]);

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