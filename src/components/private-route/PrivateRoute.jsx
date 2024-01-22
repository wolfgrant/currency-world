// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../nav-bar/NavBar';


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
    children: PropTypes.node,
    showNavBar: PropTypes.bool,
};


export default PrivateRoute;