import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ProductList from "./pages/products/ProductList";
import SignUp from "./pages/sign-up/SignUp";
import NotFound from "./shared/components/NotFound";
import Header from "./shared/components/Header";
import useRouteProtector from './shared/hooks/useRouteProtector.js'
import UserDataContext from "./shared/data/UserGlobalData";
import { useState } from "react";

function ProtectedRoute({children}){
  useRouteProtector();
  return (children)
}

function App() {  

  const [userData,setUserData] = useState({username:"Sagar",email:"",avatarImage:""}) 

  return (
    <div className="App">
      <UserDataContext.Provider value={userData}>

        <Header/>
        <hr/>
        
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </UserDataContext.Provider>
    </div>
  );
}

export default App;
