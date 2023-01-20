import React, {useState} from "react";
import {Navbar} from "./Navbar";
import {Header} from "./Header";
import {FAQ} from "./FAQ";
import {Footer} from "./Footer";
import {Route, Routes} from "react-router-dom";
import {Lottery} from "./Lottery";
import {Results} from "./Results";
import {Leaderboards} from "./Leaderboards";
import {Dashboard} from "./Dashboard";

export const Layout = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return(
    <>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <div className='cont'>
          <Header isLoggedIn={isLoggedIn} />
          <div className='page'>
            <Routes>
              <Route path="/" element={<Lottery />} />
              <Route path="/lottery" element={<Lottery />} />
              <Route path="/results" element={<Results />}/>
              <Route path="/leaderboard" element={<Leaderboards />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  )
}