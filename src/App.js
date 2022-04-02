import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import NotFound from './Components/NotFound/NotFound';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* add router */}
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='orderreview' element={<OrderReview></OrderReview>}>Review</Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
