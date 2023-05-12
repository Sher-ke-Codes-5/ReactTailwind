import "./App.css";
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import BlogDetailPage from "./Pages/BlogDetailPage";
import ContactPage from "./Pages/ContactPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/cartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
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
