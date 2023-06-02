import "./App.css";
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import BlogDetailPage from "./Pages/BlogDetailPage";
import ContactPage from "./Pages/ContactPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/cartPage";
import Signup from "./Components/Form/Signup";
import RegistrationPage from "./Pages/RegistrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/BlogPage" element={<BlogPage />}/>
          <Route path="/BlogDetail/:id" element={<BlogDetailPage />}/>
          <Route path="/ContactPage" element={<ContactPage />}/>
          <Route path="/ShopPage" element={<ShopPage />}/>
           <Route path="/ShopPage" element={<ShopPage />}/>
           <Route path="/ProductPage/:id" element={<ProductDetailPage />}/>
           <Route path="/CartPage/:id" element={<CartPage />}/>
          
        </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
