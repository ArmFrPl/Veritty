import React from "react";
import { Box, Button, Icon, Link } from "@mui/material";
import SoldOutButton from "../../Images/Tickets/soldOut.svg";
import { SocialLinks } from "../SocialLinks";
import MintTicketWinner from "../../Images/Tickets/Winner Ticket MINT.png";
import MintTicketFront from "../../Images/mintTickertFront.png";
import MintTicketUnborder from "../../Images/Tickets/MintTicketUnborder.png";
import MintTicketZero from "../../Images/Tickets/0.png";
import TryAgainImg from "../../Images/Tickets/redo.svg";

import SuspendedButton from "../../Images/Tickets/suspended.svg";

export const Ticket = ({
  loading,
  isContractOpen,
  minted,
  isLoggedIn,
  ticketCount,
  winningSum,
  getTicketImage,
  open,
  userHistory,
  userTicketCount,
  tokenId,
  mintTicket,
}) => {
  return (
    <Box className="mintTicket">
      <Box
        sx={{
          position: "relative",
          borderRadius: "24px",
          height: "485px",
          zIndex: 2,
        }}
      >
        {!isContractOpen && (
          <div>
            <Box
              component="img"
              src={SuspendedButton}
              sx={{
                position: "absolute",
                top: "-13px",
                left: "80px",
                zIndex: 15,
              }}
            />
            <Button
              disabled
              className="mintButton"
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background: "#372D47",
                borderRadius: "8px",
                width: "234px",
                height: "40px",
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "28px",
                color: "#FCFCFC !important",
                flex: "none",
                order: 1,
                flexGrow: 0,
                position: "absolute",
                bottom: "130px",
                left: "22px",
                zIndex: 10,
                transition: ".2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              MINT TICKET 0.059 ETH
            </Button>

            <Box
              component="span"
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#F8F8F8",
                position: "absolute",
                left: "47px",
                top: "25px",
                zIndex: 10,
                width: "185px",
                textAlign: "center",
              }}
            >
              Mint NFT and get money to your wallet during 1 hour
            </Box>
            <Box
              component={"img"}
              src={MintTicketZero}
              className={"mintTicketFront" && loading ? "animate" : null}
              sx={{
                position: "absolute",
                left: "15px",
                top: "45px",
                width: "254px",
                transition: ".2s ease-in-out",
              }}
            />
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "9px",
                lineHeight: "12px",
                color: "#5104CD",
                width: "214px",
                position: "absolute",
                bottom: "100px",
                left: "25px",
              }}
            >
              * By clicking the Button you agree with out terms and conditions
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "31px",
              }}
            >
              8
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "72px",
              }}
            >
              8
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "112px",
              }}
            >
              8
            </Box>
          </div>
        )}
        {ticketCount === 0 && (
          <>
            <Box
              component="img"
              src={SoldOutButton}
              sx={{
                position: "absolute",
                top: "-13px",
                left: "90px",
              }}
            />
            <Box
              component="span"
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#F8F8F8",
                position: "absolute",
                left: "47px",
                top: "25px",
                zIndex: 10,
                width: "185px",
                textAlign: "center",
              }}
            >
              Mint NFT and get money to your wallet during 1 hour
            </Box>
            <Box
              component={"img"}
              src={MintTicketZero}
              className={"mintTicketFront"}
              sx={{
                position: "absolute",
                left: "15px",
                top: "55px",
                width: "254px",
                transition: ".2s ease-in-out",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "110px",
                width: "100%",
              }}
            >
              <SocialLinks />
            </Box>
            <Box
              component="span"
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#FFD057",
                width: "185px",
                textAlign: "center",
                position: "absolute",
                bottom: "20px",
                left: "50px",
              }}
            >
              Don’t miss our next NFT Lottery
            </Box>
          </>
        )}
        {!minted && isContractOpen && ticketCount !== 0 && (
          <>
            <Button
              disabled={!!loading}
              onClick={isLoggedIn ? mintTicket : open}
              className="mintButton"
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background: loading
                  ? "#372D42 !important"
                  : "linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)",
                borderRadius: "8px",
                width: "234px",
                height: "40px",
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "28px",
                color: loading ? "#F8F8F8 !important" : "#000000",
                flex: "none",
                order: 1,
                flexGrow: 0,
                position: "absolute",
                bottom: "110px",
                left: "22px",
                zIndex: 10,
                transition: ".2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {loading ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                "MINT TICKET 0.059 ETH"
              )}
            </Button>
            <Box
              component="span"
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#F8F8F8",
                position: "absolute",
                left: "25px",
                top: "25px",
                zIndex: 10,
                width: "227px",
                textAlign: "center",
              }}
            >
              Mint NFT and get money to your wallet during 1 hour
            </Box>
            <Box
              component={"img"}
              src={MintTicketFront}
              className={"mintTicketFront"}
              sx={{
                position: "absolute",
                left: "15px",
                top: "45px",
                width: "254px",
                transition: ".2s ease-in-out",
              }}
            />
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "31px",
              }}
            >
              8
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "72px",
              }}
            >
              8
            </Box>
            <Box
              sx={{
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                display: "flex",
                position: "absolute",
                top: "432px",
                left: "112px",
              }}
            >
              8
            </Box>
          </>
        )}
        {minted && isContractOpen && ticketCount !== 0 && (
          <>
            {winningSum === 0 ? (
              <>
                <Box
                  sx={{
                    fontFamily: "Epilogue",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "22px",
                    color: "#FFD057",
                    position: "absolute",
                    top: "22px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  YOU WIN 0 USTD
                </Box>
                <Box
                  sx={{
                    fontFamily: "Epilogue",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#F8F8F8",
                    position: "absolute",
                    top: "45px",
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <Box
                    component="span"
                    sx={{ width: "211px", display: "flex" }}
                  >
                    You have a chance to win on the 2nd Round!
                  </Box>
                </Box>
                <Box
                  component={"img"}
                  src={MintTicketZero}
                  className={"mintTicketFront"}
                  sx={{
                    position: "absolute",
                    left: "15px",
                    top: "35px",
                    width: "254px",
                    transition: ".2s ease-in-out",
                  }}
                />
              </>
            ) : (
              <>
                <Box
                  sx={{
                    fontFamily: "Epilogue",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "22px",
                    color: "#FFD057",
                    position: "absolute",
                    top: "22px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  YOU WIN!
                </Box>
                <Box
                  sx={{
                    fontFamily: "Epilogue",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "36px",
                    color: "#FFD057",
                    position: "absolute",
                    top: "45px",
                    width: "100%",
                    textAlign: "center",
                    zIndex: 10,
                  }}
                >
                  {winningSum}
                  <Box component="span" sx={{ fontSize: "24px" }}>
                    USTD
                  </Box>
                </Box>
                <Box
                  component={"img"}
                  src={getTicketImage()}
                  className={"mintTicketFront"}
                  sx={{
                    position: "absolute",
                    left: "15px",
                    top: "35px",
                    width: "254px",
                    transition: ".2s ease-in-out",
                  }}
                />
              </>
            )}
            <Button
              disabled={!!loading}
              onClick={isLoggedIn ? mintTicket : open}
              className="mintButton"
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background: loading
                  ? "#372D42 !important"
                  : "linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)",
                borderRadius: "8px",
                width: "234px",
                height: "40px",
                fontFamily: "Epilogue",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "28px",
                color: loading ? "#F8F8F8 !important" : "#000000",
                flex: "none",
                order: 1,
                flexGrow: 0,
                position: "absolute",
                bottom: "150px",
                left: "22px",
                zIndex: 10,
                textTransform: "none",
                transition: ".2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {loading ? (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <>
                  <Icon>
                    <img
                      src={TryAgainImg}
                      alt="tryAgain"
                      style={{
                        filter: loading
                          ? "invert(97%) sepia(3%) saturate(1%) hue-rotate(321deg) brightness(115%) contrast(95%)"
                          : null,
                      }}
                    />
                  </Icon>
                  Try Again
                </>
              )}
            </Button>
            <Link
              target="_blank"
              href={`https://testnets.opensea.io/assets/goerli/0x8A85f0b84a765D2e2f536c3e9E74D8A1044c8dFf/${tokenId}`}
            >
              <Button
                className="openSeaButton"
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  borderRadius: "8px",
                  width: "234px",
                  height: "40px",
                  fontFamily: "Epilogue",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#FCFCFC",
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                  position: "absolute",
                  bottom: "105px",
                  left: "22px",
                  zIndex: 10,
                  textTransform: "none",
                  transition: ".2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                View on OpenSea
              </Button>
            </Link>
            {userHistory.totalTickets &&
              userHistory.totalTickets !== "undefined" && (
                <Box
                  component="span"
                  sx={{
                    fontFamily: "Epilogue",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "73px",
                    color: "#FFD057",
                    position: "absolute",
                    top: "410px",
                    left: "80px",
                  }}
                >
                  Ticket # {("00000" + userHistory.totalTickets).slice(-5)}
                </Box>
              )}
          </>
        )}
        <Box
          component={"img"}
          sx={{ width: "278px !important", height: "485px !important" }}
          src={
            ticketCount !== 0
              ? !minted
                ? MintTicketUnborder
                : MintTicketWinner
              : MintTicketWinner
          }
          className="mintTicketImage"
        />
      </Box>
    </Box>
  );
};
