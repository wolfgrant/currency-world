import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyList from '../pages/currency-list/CurrencyList'
import CurrencyDetail from '../pages/currency-detail/CurrencyDetail'
import Login from '../pages/login/Login';
import PrivateRoute from '../components/private-route/PrivateRoute';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          } />

        <Route
          path="/list"
          element={
            <PrivateRoute>
              <CurrencyList />
            </PrivateRoute>
          } />
        <Route
          path="/detail/:code"
          element={
            <PrivateRoute>
              <CurrencyDetail />
            </PrivateRoute>
          } />
      </Routes>
    </Router>);
}

export default Routing;