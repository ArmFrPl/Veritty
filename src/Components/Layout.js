import React, {useEffect, useRef, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
  import { useAccount } from "wagmi";
import {Navbar} from "./Navbar";
import {Header} from "./Header";
import {FAQ} from "./FAQ";
import {Footer} from "./Footer";
import {Lottery} from "./Lottery";
import {Results} from "./Results";
import {Leaderboards} from "./Leaderboards";
import {Dashboard} from "./Dashboard";
import {ethers} from "ethers";
import RaffleImpl from "../RaffleImpl.json";

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState('lottery');
  const location = useLocation();
  const ticketsRef = useRef();
  const winnersRef = useRef();
  const faqRef = useRef();
  const mobileTicketsRef = useRef();
  const mobileWinnersRef = useRef();
  const mobileFaqRef = useRef();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setView(location.pathname.slice(1))
  }, [location]);

  return (
    <>
      <div className="App">
        <Navbar isLoggedIn={isConnected} faqRef={faqRef} mobileFaqRef={mobileFaqRef} menuOpen={menuOpen}
                setMenuOpen={setMenuOpen} ticketsRef={ticketsRef} mobileTicketsRef={mobileTicketsRef} winnersRef={winnersRef} mobileWinnersRef={mobileWinnersRef} />
        <div className='cont' style={{overflow: menuOpen ? 'hidden' : 'auto'}}>
          <Header isLoggedIn={isConnected} view={view} setView={setView} menuOpen={menuOpen}/>
          <div className='page'>
            <Routes>
              <Route path="/" element={<Lottery menuOpen={menuOpen}/>}/>
              <Route path="/lottery" element={<Lottery menuOpen={menuOpen}/>}/>
              <Route path="/results" element={<Results menuOpen={menuOpen}/>}/>
              <Route path="/leaderboard" element={<Leaderboards menuOpen={menuOpen} winnersRef={winnersRef} mobileWinnersRef={mobileWinnersRef}/>}/>
              <Route path="/dashboard" element={<Dashboard menuOpen={menuOpen} ticketsRef={ticketsRef} mobileTicketsRef={mobileTicketsRef}/>}/>
            </Routes>
          </div>
          <FAQ faqRef={faqRef} mobileFaqRef={mobileFaqRef}/>
          <Footer/>
        </div>
      </div>
    </>
  )
}