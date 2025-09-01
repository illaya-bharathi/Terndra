import React, { useState } from "react";
import {  Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";

import Home from "./pages/Home";
import { Allcomponents } from "./components/Allcomponents";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
 
      <div className="min-h-screen flex flex-col relative">
        <Header onLoginClick={() => setShowLogin(true)} />

        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/"element={<Home />}/>
                 
             
           
          
            <Route path="/view-car" element = {<Allcomponents />}/>
          </Routes>
        </main>

        <Footer />

        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      </div>
 
  );
}

export default App;
