import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/cart' element={<Cart />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
