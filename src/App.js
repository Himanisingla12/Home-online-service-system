import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import Service from './pages/Service';
import Book from './pages/Book';
import Cart from './components/Cart';
import Provider from './pages/Provider';
import Notifications from './pages/Notifications';
import Testimonials from './components/Testimonials';
import AdminHome from './pages/AdminHome';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/nav' element={<NavBar />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/service/:categoryId' element={<Service />} />
          <Route path='/book' element={<Book />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/provider' element={<Provider />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/adminhome' element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
