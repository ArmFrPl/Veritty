import React, { useEffect, useState } from "react";
import { Box, Link, Snackbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ToggleButtons from "./ToggleButtons";
import { SocialLinks } from "./SocialLinks";
import "../Styles/Header.css";
import MintTicketHundred from "../Images/Tickets/100.png";
import MintTicketTwoHundred from "../Images/Tickets/200.png";
import MintTicketFiveHundred from "../Images/Tickets/500.png";
import MintTicketThousand from "../Images/Tickets/1000.png";
import MintTicketTwoThousand from "../Images/Tickets/2500.png";
import MintTicketFiveThousand from "../Images/Tickets/5000.png";
import MintTicketTenThousand from "../Images/Tickets/10000.png";
import MintTicketTwentyThousand from "../Images/Tickets/20000.png";
import MintTicketFiftyThousand from "../Images/Tickets/50000.png";
import GoToIcon from "../Images/goToIcon.svg";
import { useSigner } from "wagmi";
import { ethers } from "ethers";
import RaffleImpl from "../RaffleImpl.json";
import { ethAddress } from "../constants";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import { Ticket } from "./Tickets/Ticket";
import { Loader } from "./Loader/Loader";
import { TicketMobile } from "./Tickets/TicketMobile";

export const Header = ({
  isLoggedIn,
  view,
  setView,
  menuOpen,
  ticketCounts,
  userHistory,
  userTicketCount,
  winningSum,
  setWinningSum,
  loading,
  setLoading,
  updUserHistory,
}) => {
  const [isWinnerOpen, setWinnerOpen] = useState(false);
  const [winners, getWinners] = useState({});
  const [minted, setMinted] = useState(false);
  const [count, setCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(10888);
  const [tokenId, setTokenId] = useState(0);
  const [isContractOpen, setContractOpen] = useState(true);

  const { openConnectModal } = useConnectModal();
  const signer = useSigner();
  const abi = RaffleImpl.abi;
  const contract = new ethers.Contract(ethAddress, abi, signer.data);

  const countTickets = () => {
    let ticketCountsSum = 0;
    ticketCounts?.forEach((ticket) => {
      ticketCountsSum += parseInt(ticket);
    });
    return ticketCountsSum;
  };

  useEffect(() => {
    const isContrOpen = async () => {
      setContractOpen(await contract.isOpen());
    };
    setTicketCount(countTickets() || 10888);
    isContrOpen();
  });

  useEffect(() => {
    const fetchWinnings = async () => {
      const response = await axios.get(
        "https://veritty-backend.herokuapp.com/lastTxns"
      );
      getWinners(response.data);
    };
    fetchWinnings();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (winners.length === 1 || count >= winners.length - 1) {
        setCount(0);
      } else if (winners.length) {
        setCount(count + 1);
      }
      setWinnerOpen(true);
    }, 3 * 60 * 1000); // 3 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [count, winners.length]);

  const convertToTime = (timestamp) => {
    return new Date(timestamp).toLocaleString("local", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCloseWinner = () => {
    setWinnerOpen(false);
  };

  const getTicketImage = () => {
    switch (winningSum) {
      case 100:
        return MintTicketHundred;
      case 200:
        return MintTicketTwoHundred;
      case 500:
        return MintTicketFiveHundred;
      case 1000:
        return MintTicketThousand;
      case 2500:
        return MintTicketTwoThousand;
      case 5000:
        return MintTicketFiveThousand;
      case 10000:
        return MintTicketTenThousand;
      case 20000:
        return MintTicketTwentyThousand;
      case 50000:
        return MintTicketFiftyThousand;
    }
  };

  const getWinningTicketsCount = () => {
    let winningTicketsCount = 0;
    for (let i = 0; i < ticketCounts.length - 1; i++) {
      winningTicketsCount += parseInt(ticketCounts[i]);
    }
    return winningTicketsCount.toString().split("");
  };

  const winningTickets = getWinningTicketsCount();
  if (winningTickets.length === 2) {
    winningTickets.unshift("0");
  } else if (winningTickets.length === 1) {
    winningTickets.unshift("0");
    winningTickets.unshift("0");
  }

  const mintTicket = async () => {
      setLoading(true);
      const entranceFee = await contract.entranceFee();
      const txResponse = await contract.enterRaffle({
        value: entranceFee,
        gasLimit: 800000,
      });
      const txReceipt = await txResponse.wait(1);
      const event = txReceipt?.events?.filter(
        (event) => event.event === "WinnerChosen"
      );
      setTokenId(event["0"].args["tokenId"].toNumber());
      setWinningSum(event["0"].args["sum"].toNumber());
      setMinted(true);
      setLoading(false);
      updUserHistory();
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="mobHeaderCont" sx={{ mt: "12px" }}>
          <SocialLinks menuOpen={menuOpen} />
          <Box className="mobHeaderText">
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "26px",
                color: "#F8F8F8",
                mb: "12px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              First in the world transparent and honest
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "48.6px",
                lineHeight: "32px",
                color: "#FFFFFF",
                mb: "44px",
              }}
            >
              NFT LOTTERY
            </Box>
            <Box className="prizeFund mobile">
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057",
                  fontFamily: "Epilogue",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16.5px",
                  lineHeight: "31px",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Prize fund
              </Box>
              <Box
                sx={{
                  fontFamily: "Epilogue",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: "31px",
                  color: "#FFD057",
                }}
              >
                282.700 USTD
              </Box>
            </Box>
            <ReactCardFlip
              isFlipped={loading}
              infinite="true"
              flipDirection="horizontal"
              flipSpeedBackToFront="1.5"
              flipSpeedFrontToBack="1.5"
              containerStyle={{
                marginTop: "37px",
                marginBottom: "81px",
              }}
            >
              <TicketMobile
                loading={loading}
                isContractOpen={isContractOpen}
                minted={minted}
                isLoggedIn={isLoggedIn}
                ticketCount={ticketCount}
                winningSum={winningSum}
                getTicketImage={getTicketImage}
                open={openConnectModal}
                userHistory={userHistory}
                userTicketCount={userTicketCount}
                tokenId={tokenId}
                mintTicket={mintTicket}
                style={{ " transform-style": "preserve-3d !important" }}
              />
              <Loader desktop={false} />
            </ReactCardFlip>
          </Box>
          {winners.length && (
            <Snackbar
              className="popupMobile"
              open={isWinnerOpen}
              onClose={handleCloseWinner}
              autoHideDuration={30 * 1000}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              sx={{
                display: { xs: "flex", md: "none" },
                width: "252px",
                "> .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root": {
                  width: "252px",
                },
              }}
              message={
                <Box
                  className="headerModalCont"
                  sx={{
                    width: "252px",
                    height: "65px",
                    background: "#101010",
                    border: "1px solid #00DF74",
                    borderRadius: "16px",
                    display: "flex",
                  }}
                >
                  <Box className="headerModalBody">
                    <CheckCircleOutlineRoundedIcon
                      sx={{
                        color: "#00DF74",
                        mr: "14px",
                        pl: "10px",
                        width: "22px",
                        height: "22px",
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "10px",
                          lineHeight: "14px",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color: "#F8F8F8",
                        }}
                      >
                        WINNER
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "24px",
                          display: "flex",
                          alignItems: "center",
                          color:
                            winners[count]?.sum < 500 ? "#F8F8F8" : "#00DF74",
                        }}
                      >
                        {winners[count]?.userId.slice(0, 10) + "…"}
                      </Typography>
                      <Link
                        target="_blank"
                        href={winners[count]?.link}
                        sx={{
                          textDecoration: "none",
                          color: "#F8F8F8",
                          opacity: "0.7",
                        }}
                      >
                        <Typography
                          sx={{
                            "&:hover": { color: "#FFD057 !important" },
                            fontFamily: "Epilogue",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "8px",
                            lineHeight: "1",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.01em",
                          }}
                        >
                          View on Etherscan
                          <img
                            src={GoToIcon}
                            alt="arrow"
                            height={8}
                            width={8}
                            style={{ marginLeft: "5px" }}
                          />
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        margin: "0 5px 20px 8px",
                      }}
                    >
                      <Box
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "10px",
                          display: "flex",
                          lineHeight: "22px",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color: "#F8F8F8",
                          opacity: "0.7",
                        }}
                      >
                        {convertToTime(winners[count]?.timestamp)}
                      </Box>
                      <Box
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "15px",
                          lineHeight: "1",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color:
                            winners[count]?.sum < 500 ? "#F8F8F8" : "#00DF74",
                        }}
                      >
                        {winners[count]?.sum} USDT
                      </Box>
                    </Box>
                  </Box>

                  <Box className="headerModalHeader">
                    <CloseIcon onClick={handleCloseWinner} cursor="pointer" />
                  </Box>
                </Box>
              }
            />
          )}
        </Box>
        <ToggleButtons
          isLoggedIn={isLoggedIn}
          view={view}
          setView={setView}
          menuOpen={menuOpen}
        />
      </Box>

      {/*desktop*/}

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="headerCont">
          <Box className="headerText">
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "43px",
                color: "#F8F8F8",
                mb: "12px",
              }}
            >
              First in the world transparent and honest
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "82.5px",
                lineHeight: "55px",
                color: "#FFFFFF",
                mb: "44px",
              }}
            >
              NFT LOTTERY
            </Box>
            <Box className="prizeFund">
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057",
                  fontFamily: "Epilogue",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "27.8px",
                  lineHeight: "52px",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Prize fund
              </Box>
              <Box
                sx={{
                  fontFamily: "Epilogue",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "37.1px",
                  lineHeight: "52px",
                  color: "#FFD057",
                }}
              >
                282.700 USTD
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              perspective: "1000px !important",
            }}
            className="miniTicket__inner-wrapper"
          >
            <ReactCardFlip
              isFlipped={loading}
              infinite="true"
              flipDirection="horizontal"
              flipSpeedBackToFront="1.5"
              flipSpeedFrontToBack="1.5"
            >
              <Ticket
                loading={loading}
                isContractOpen={isContractOpen}
                minted={minted}
                isLoggedIn={isLoggedIn}
                ticketCount={ticketCount}
                winningSum={winningSum}
                getTicketImage={getTicketImage}
                open={openConnectModal}
                userHistory={userHistory}
                userTicketCount={userTicketCount}
                tokenId={tokenId}
                mintTicket={mintTicket}
                style={{ " transform-style": "preserve-3d !important" }}
              />
              <Loader desktop={true} />
            </ReactCardFlip>
          </Box>
          {winners.length && (
            <Snackbar
              className="popup"
              open={isWinnerOpen}
              onClose={handleCloseWinner}
              autoHideDuration={30 * 1000}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "343px",
                padding: "0 !important",
                "> .css-1gz1y6s": {
                  width: "343px",
                  borderRadius: "16px",
                  padding: "0 !important",
                },
              }}
              message={
                <Box
                  className="headerModalCont"
                  sx={{
                    width: "343px",
                    height: "88px",
                    background: "#101010",
                    border: "1px solid #00DF74",
                    borderRadius: "16px",
                    display: "flex",
                  }}
                >
                  <Box className="headerModalBody">
                    <CheckCircleOutlineRoundedIcon
                      sx={{ color: "#00DF74", mr: "15px", pl: "24px" }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "18px",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color:
                            winners[count]?.sum < 500 ? "#F8F8F8" : "#00DF74",
                        }}
                      >
                        WINNER
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "24px",
                          display: "flex",
                          alignItems: "center",
                          color: "#F8F8F8",
                        }}
                      >
                        {winners[count]?.userId.slice(0, 10) + "…"}
                      </Typography>
                      <Link
                        target="_blank"
                        href={winners[count]?.link}
                        sx={{
                          textDecoration: "none",
                          color: "#F8F8F8",
                          opacity: "0.7",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Epilogue",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "13px",
                            lineHeight: "1",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.01em",
                          }}
                        >
                          View on Etherscan
                          <img
                            src={GoToIcon}
                            alt="arrow"
                            height={8}
                            width={8}
                            style={{ marginLeft: "5px" }}
                          />
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        margin: "0 5px 20px 8px",
                      }}
                    >
                      <Box
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          display: "flex",
                          lineHeight: "22px",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color: "#F8F8F8",
                          opacity: "0.7",
                        }}
                      >
                        {convertToTime(winners[count]?.timestamp)}
                      </Box>
                      <Box
                        sx={{
                          fontFamily: "Epilogue",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "19px",
                          lineHeight: "1",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.01em",
                          color:
                            winners[count]?.sum < "500" ? "#F8F8F8" : "#00DF74",
                        }}
                      >
                        {winners[count]?.sum} USDT
                      </Box>
                    </Box>
                  </Box>

                  <Box className="headerModalHeader">
                    <CloseIcon onClick={handleCloseWinner} cursor="pointer" />
                  </Box>
                </Box>
              }
            />
          )}
        </Box>
        <ToggleButtons isLoggedIn={isLoggedIn} view={view} setView={setView} />
      </Box>
    </>
  );
};
