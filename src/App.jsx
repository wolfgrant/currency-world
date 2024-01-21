import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import CurrencyList from './pages/currency-list/CurrencyList'
/* import CurrencyDetail from './pages/currency-detail/CurrencyDetail' */

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CurrencyList />} />
        {/* <Route path="/detail" component={CurrencyDetail} /> */}
      </Routes>
    </Router>
  )
}

export default App;
