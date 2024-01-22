import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyList from '../pages/currency-list/CurrencyList'
import CurrencyDetail from '../pages/currency-detail/CurrencyDetail'

function Routing() {
    return ( 
        <Router>
          <Routes>
            <Route path="/" element={<CurrencyList />} />
            <Route path="/detail/:code" element={<CurrencyDetail />} />
          </Routes>
        </Router> );
}

export default Routing;