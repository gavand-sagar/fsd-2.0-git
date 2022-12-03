import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ProductList from "./pages/products/ProductList";
import SignUp from "./pages/sign-up/SignUp";
import NotFound from "./shared/components/NotFound";
import Header from "./shared/components/Header";
function App() {  

  return (
    <div className="App">
      <Header/>
      <hr/>
      
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
