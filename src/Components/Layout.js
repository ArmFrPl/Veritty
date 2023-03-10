import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Lottery } from "./Lottery";
import { Results } from "./Results";
import { Leaderboards } from "./Leaderboards";
import { Dashboard } from "./Dashboard";
import { ethers } from "ethers";
import CookieConsent from "react-cookie-consent";
import RaffleImpl from "../RaffleImpl.json";
import { ethAddress } from "../constants";
import { CookiePolicyModal } from "./CookiePolicyModal";
import axios from "axios";

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCookiePrivacy, setOpenCookiePrivacy] = useState(false);
  const handleOpenCookiePrivacy = () => setOpenCookiePrivacy(true);
  const handleCloseCookiePrivacy = () => setOpenCookiePrivacy(false);
  const [userHistory, getUserHistory] = useState([]);
  const [leaderboard, getLeaderboard] = useState([]);
  const [results, getResults] = useState({});
  const [view, setView] = useState("lottery");
  const [winningSum, setWinningSum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ticketCounts, setTicketCounts] = useState([]);
  const [userTicketCount, setUserTicketCount] = useState("00000");
  const location = useLocation();
  const ticketsRef = useRef();
  const winnersRef = useRef();
  const faqRef = useRef();
  const mobileTicketsRef = useRef();
  const mobileWinnersRef = useRef();
  const mobileFaqRef = useRef();
  const { address, isConnected } = useAccount();
  const provider = ethers.getDefaultProvider(
    "https://eth-goerli.g.alchemy.com/v2/Fvr4iHEEClnFhZtgTB8ITVSen4GPwOls"
  );
  const abi = RaffleImpl.abi;
  const contract = new ethers.Contract(ethAddress, abi, provider);
  const navigate = useNavigate();

  function updUserHistory() {
    const fetchUser = async () => {
      const response = await axios.get(
        `https://veritty-backend.herokuapp.com/users/${address}`
      );
      getUserHistory(response.data);
      setUserTicketCount(response.data.totalTickets);
    };
    fetchUser();
  }

  useEffect(() => {
    let counts = [];

    async function fetchData() {
      const res = await contract.getTicketsLeft();
      res.map((ticket) => {
        counts.push(ticket.toString());
        setTicketCounts(counts);
      });
    }

    fetchData();
  }, [loading]);

  useEffect(() => {
    if (address) {
      updUserHistory();
    } else {
      getUserHistory([]);
      navigate("/lottery");
    }
  }, [address]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const response = await axios.get(
        `https://veritty-backend.herokuapp.com/leaderboard`
      );
      getLeaderboard(response.data);
    };
    fetchLeaders();
  }, [loading]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(
        `https://veritty-backend.herokuapp.com/sums`
      );
      getResults(response.data);
    };
    fetchResults();
  }, [loading]);

  useEffect(() => {
    setView(location.pathname.slice(1));
  }, [location]);

  return (
    <>
      <div className="App">
        <CookieConsent
          buttonText="Got it"
          enableDeclineButton="true"
          declineButtonText="Deny cookies"
          buttonWrapperClasses="cookie-button-wrapper"
          declineButtonStyle={{
            background: "inherit",
            fontSize: "17px",
            fontWeight: "800",
            color: "rgb(110,122,140)",
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgb(110,122,140)",
            background: "linear-gradient(180deg, #000000 0%, #10003E 100%)",
            textAlign: "center",
          }}
          buttonStyle={{
            background: "rgb(56, 152, 255)",
            color: "#ffffff",
            fontSize: "17px",
            fontWeight: "800",
            borderRadius: "15px",
            padding: "10px 25px",
          }}
        >
          Our website uses cookies to make your browsing experience better. By
          using our website you agree to our use of cookies.{" "}
          <span
            style={{ color: "#3898ff", cursor: "pointer" }}
            onClick={() => handleOpenCookiePrivacy()}
          >
            Learn more.
          </span>
          <CookiePolicyModal
            openPrivacy={openCookiePrivacy}
            handleClosePrivacy={handleCloseCookiePrivacy}
          />
        </CookieConsent>
        <Navbar
          isLoggedIn={isConnected}
          faqRef={faqRef}
          mobileFaqRef={mobileFaqRef}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          ticketsRef={ticketsRef}
          mobileTicketsRef={mobileTicketsRef}
          winnersRef={winnersRef}
          mobileWinnersRef={mobileWinnersRef}
        />
        <div className="cont">
          <Header
            isLoggedIn={isConnected}
            view={view}
            setView={setView}
            menuOpen={menuOpen}
            ticketCounts={ticketCounts}
            userHistory={userHistory}
            setWinningSum={setWinningSum}
            winningSum={winningSum}
            loading={loading}
            setLoading={setLoading}
            updUserHistory={updUserHistory}
          />
          <div className="page">
            <Routes>
              <Route
                path="/"
                element={
                  <Lottery menuOpen={menuOpen} ticketCounts={ticketCounts} />
                }
              />
              <Route
                path="/lottery"
                element={
                  <Lottery menuOpen={menuOpen} ticketCounts={ticketCounts} />
                }
              />
              <Route
                path="/results"
                element={<Results menuOpen={menuOpen} results={results} />}
              />
              <Route
                path="/leaderboard"
                element={
                  <Leaderboards
                    menuOpen={menuOpen}
                    winnersRef={winnersRef}
                    mobileWinnersRef={mobileWinnersRef}
                    leaderboard={leaderboard}
                  />
                }
              />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    menuOpen={menuOpen}
                    ticketsRef={ticketsRef}
                    mobileTicketsRef={mobileTicketsRef}
                    address={address}
                    userHistory={userHistory}
                    getUserHistory={getUserHistory}
                    userTicketCount={userTicketCount}
                    winningSum={winningSum}
                  />
                }
              />
            </Routes>
          </div>
          <FAQ faqRef={faqRef} mobileFaqRef={mobileFaqRef} />
          <Footer />
        </div>
      </div>
    </>
  );
};
