import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddFoodData from './components/AddFoodData';
import Ordersection from './components/orders/Ordersection';
import ShowOrdersSpecific from './components/orders/ShowOrdersSpecific';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Ordersection />} />
    <Route path="/orders" element={<Ordersection />} />


    <Route path="/addfood" element={<AddFoodData />} />

    <Route path="/orderdetails/:orderid" element={<ShowOrdersSpecific />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
