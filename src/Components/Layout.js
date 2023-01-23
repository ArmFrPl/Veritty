import React, {useEffect, useRef, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Header} from "./Header";
import {FAQ} from "./FAQ";
import {Footer} from "./Footer";
import {Lottery} from "./Lottery";
import {Results} from "./Results";
import {Leaderboards} from "./Leaderboards";
import {Dashboard} from "./Dashboard";

export const Layout = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState('lottery');
  const location = useLocation();
  const faqRef = useRef();

  useEffect(() => {
    console.log(location.pathname.slice(1));
    setView(location.pathname.slice(1))
  }, [location]);

  return(
    <>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} faqRef={faqRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='cont'>
          <Header isLoggedIn={isLoggedIn} view={view} setView={setView} menuOpen={menuOpen} />
          <div className='page'>
            <Routes>
              <Route path="/" element={<Lottery menuOpen={menuOpen} />} />
              <Route path="/lottery" element={<Lottery menuOpen={menuOpen} />} />
              <Route path="/results" element={<Results menuOpen={menuOpen} />}/>
              <Route path="/leaderboard" element={<Leaderboards menuOpen={menuOpen} />} />
              <Route path="/dashboard" element={<Dashboard menuOpen={menuOpen} />} />
            </Routes>
          </div>
          <FAQ faqRef={faqRef} />
          <Footer />
        </div>
      </div>
    </>
  )
}