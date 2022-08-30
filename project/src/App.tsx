import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from "./pages/mainpage/mainpage";
import Header from "./components/header/header";
import Background from "./components/background/background";
import Search from "./pages/search/search";
import Teachers from "./pages/teachers/teachers";
import Support from "./pages/support/support";
import AboutUs from "./pages/about-us/aboutUs";
import ContactUs from "./pages/contact-us/contactUs";
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header/>
              <body>
                  <Routes>
                      <Route path="/" element={<Background block={<MainPage/>}/>}/>
                      <Route path="/search" element={<Background block={<Search/>}/>}/>
                      <Route path="/teachers" element={<Background block={<Teachers/>}/>}/>
                      <Route path="/support" element={<Background block={<Support/>}/>}/>
                      <Route path="/about-us" element={<Background block={<AboutUs/>}/>}/>
                      <Route path="/contact-us" element={<Background block={<ContactUs/>}/>}/>
                  </Routes>
              </body>
          </BrowserRouter>
      </div>
  );
}

export default App;
