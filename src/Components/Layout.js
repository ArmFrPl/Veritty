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
import { useSigner } from "wagmi";
import {ethers} from "ethers";
import RaffleImpl from "../RaffleImpl.json";


export const Layout = async () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState('lottery');
  const location = useLocation();
  const faqRef = useRef();
  const mobileFaqRef = useRef();

  const { signer } = useSigner();
  const abi = RaffleImpl.abi;
  console.log(abi)

  const contract = new ethers.Contract('0x1608E80C75A2b4C34E6f3D62aaC127489535b04A', abi, signer)

  const tx = await contract.getTicketsLeft();
  await tx.wait()

  useEffect(() => {
    setView(location.pathname.slice(1))
  }, [location]);

  return(
    <>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} faqRef={faqRef} mobileFaqRef={mobileFaqRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='cont' style={{overflow: menuOpen ? 'hidden' : 'auto'}}>
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
          <FAQ faqRef={faqRef} mobileFaqRef={mobileFaqRef} />
          <Footer />
        </div>
      </div>
    </>
  )
}