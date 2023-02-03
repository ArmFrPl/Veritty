import React, {useEffect, useRef, useState} from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
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
import {ethAddress} from "../constants";

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
  const [ticketCounts, setTicketCounts] = useState([]);
  const provider = ethers.getDefaultProvider("https://eth-goerli.g.alchemy.com/v2/Fvr4iHEEClnFhZtgTB8ITVSen4GPwOls")
  const abi = RaffleImpl.abi;
  const contract = new ethers.Contract(ethAddress, abi, provider);

  useEffect(() => {
    let counts = [];
    async function fetchData() {
      const res = await contract.getTicketsLeft();
      res.map(ticket => {
        counts.push(ticket.toString())
        setTicketCounts(counts);
      })
    }
    fetchData();
  }, [])


  useEffect(() => {
    setView(location.pathname.slice(1))
  }, [location]);

  return (
    <>
      <div className="App">
        <Navbar isLoggedIn={isConnected} faqRef={faqRef} mobileFaqRef={mobileFaqRef} menuOpen={menuOpen}
                setMenuOpen={setMenuOpen} ticketsRef={ticketsRef} mobileTicketsRef={mobileTicketsRef} winnersRef={winnersRef} mobileWinnersRef={mobileWinnersRef} />
        <div className='cont' style={{overflow: menuOpen ? 'hidden' : 'auto'}}>
          <Header isLoggedIn={isConnected} view={view} setView={setView} menuOpen={menuOpen} ticketCounts={ticketCounts}/>
          <div className='page'>
            <Routes>
              <Route path="/" element={<Lottery menuOpen={menuOpen} ticketCounts={ticketCounts}/>}/>
              <Route path="/lottery" element={<Lottery menuOpen={menuOpen} ticketCounts={ticketCounts}/>}/>
              <Route path="/results" element={<Results menuOpen={menuOpen}/>}/>
              <Route path="/leaderboard" element={<Leaderboards menuOpen={menuOpen} winnersRef={winnersRef} mobileWinnersRef={mobileWinnersRef}/>}/>
              <Route path="/dashboard" element={<Dashboard menuOpen={menuOpen} ticketsRef={ticketsRef} mobileTicketsRef={mobileTicketsRef} address={address}/>}/>
            </Routes>
          </div>
          <FAQ faqRef={faqRef} mobileFaqRef={mobileFaqRef}/>
          <Footer/>
        </div>
      </div>
    </>
  )
}