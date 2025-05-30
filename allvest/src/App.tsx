// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Footer, Navbar } from "./components";
import Home from "./pages/home";

function App() {
  return (
    <div className="bg-[#191d19] ">
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
