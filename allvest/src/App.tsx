// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Navbar } from "./components";
import Home from "./pages/home";

function App() {
  return (
    <div className="bg-[#191919]">
        <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
