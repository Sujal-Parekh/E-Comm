import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Featrued from './components/Featrued';
import Categories from './components/Categories';
import Offers from './components/Offers';
import Products from './components/Products';
import Vendoras from './components/Vendoras';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/login'
import Regist from './components/regist'
import Orderlist from './components/orderlist';
import Example from './components/Example';
// import Topbar from './components/Topbar';
import Wishlist from './components/Wishlist'
import OtpVerify from './components/otpverify';
function App() {
  return (
    <div >
      {/* <Topbar/>
      <Navbar/>
      <Featrued/>
      <Categories/>
      <Offers/>
      <Products/>
      <Vendoras/>
      <Footer/> */}
      {/* <Shop/> */}
      {/* <Detail/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Contact/> */}



      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element= {<Shop/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/list" element={<Orderlist/>}></Route>
          <Route path="/example" element={<Example/>}></Route>
          <Route path="/top" element={<Topbar/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/otpverify" element={<OtpVerify/>}></Route>
          




        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;