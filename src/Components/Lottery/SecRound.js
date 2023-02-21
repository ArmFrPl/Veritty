import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import "../../Styles/SecRound.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const SecRound = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accardionTitle = [
    {
      name: "Yes",
      value:
        "For the owners of the highest amount of tickets (no matter winning or losing), we will hold a second raffle for 23.000 USDT.",
    },
    {
      name: "How it works?",
      value:
        "The first 20 participants with the highest amount of tickets will receive such payments: \n1st place - 10.000 USDT \n2nd place - 5.000 USDT  \n3rd place - 2.000 USDT  \n4th place - 1.000 USDT \n5th place - 500 USDT \n6 - 20 places - 300 USDT",
    },
    {
      name: "How to Participate?",
      value:
        "The raffle date will be announced on our social media. At the moment of it, the smart contract will check all lottery participants' addresses and determine the 20 of them that own the most tickets.",
    },
    {
      name: "To buy or sell non-winning tickets?",
      value:
        "If you want to participate in the second raffle - you can buy Veritty tickets from other participants on OpenSea on the secondary market. \nIf you do not choose to, you can sell your tickets by listing them for sale on the OpenSea at the exact same price you are willing to sell them for.",
    },
  ];

  const prizes = [
    {
      place: "1st place",
      prize: "10.000 USTD",
    },
    {
      place: "2nd place",
      prize: "5.000 USTD",
    },
    {
      place: "3rd place",
      prize: "2.000 USTD",
    },
    {
      place: "4th place",
      prize: "1.000 USTD",
    },
    {
      place: "5th place",
      prize: "500 USTD",
    },
    {
      place: "6-20th place",
      prize: "300 USTD",
    },
  ];

  return (
    <>
      <Box
        className="ticketCountCont"
        sx={{
          width: "85%",
          height: expanded ? "865px" : "600px",
          background:
            "linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)",
          padding: "45px 0 0 0",
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "22.5px",
              lineHeight: "26px",
              background:
                "linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            23.000 USTD
          </Box>
          <Box
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "27px",
              color: "#F8F8F8",
              mt: "5px",
            }}
          >
            Second Round For Non-Winners
          </Box>

          <table className="prizeTable" style={{ marginTop: "23px" }}>
            <tbody>
              {prizes.map((p, index) => (
                <tr key={index} style={{ display: "flex", marginTop: "5px" }}>
                  <td
                    className="mobileSecRoundRow"
                    style={{ textAlign: "right", width: "105px" }}
                  >
                    {p.place}
                  </td>
                  <td
                    className="mobileSecRoundRow"
                    style={{
                      textAlign: "center",
                      color: "#FFD057",
                      width: "30px",
                    }}
                  >
                    -
                  </td>
                  <td
                    className="mobileSecRoundRow"
                    style={{ textAlign: "left", width: "110px" }}
                  >
                    {p.prize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Box className="secRoundFAQ mobileSecRound">
            <Box
              className="FAQTitle"
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "22px",
                textAlign: "center",
                width: "276px",
                color: "#F8F8F8",
                mt: "20px",
                mb: "15px",
              }}
            >
              Can I sell my ticket in case I don’t win anything?
            </Box>
            {accardionTitle?.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  width: "88%",
                  background: "transparent",
                  color: "#FFAC33",
                  boxShadow: 0,
                  flexGrow: 0,
                  borderBottom: "1px solid",
                }}
              >
                <AccordionSummary
                  sx={{
                    height: "39px",
                    minHeight: 0,
                  }}
                  expandIcon={<ArrowDropDownIcon sx={{ color: "#FFAC33" }} />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography
                    sx={{
                      fontFamily: "Epilogue",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "10px",
                      lineHeight: "18px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "white",
                      whiteSpace: "pre-wrap",
                      textAlign: "center",
                    }}
                  >
                    {item.value}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>

      {/*desktop*/}
      <Box
        className="ticketCountCont"
        sx={{
          width: "830px",
          height: expanded ? "957px" : "780px",
          background:
            "linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)",
          padding: "45px 0 0 0",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "24px",
          transitionDuration: ".1s",
          "&:hover": {
            boxShadow: "0px 0px 30px #fff8e6",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "33px",
              background:
                "linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            23.000 USTD
          </Box>
          <Box
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "33px",
              color: "#F8F8F8",
              mt: "5px",
            }}
          >
            Second Round For Non-Winners
          </Box>

          <table className="prizeTable" style={{ marginTop: "29px" }}>
            <tbody>
              {prizes.map((p, index) => (
                <tr key={index} style={{ display: "flex", marginTop: "5px" }}>
                  <td
                    className="secRoundRow"
                    style={{ textAlign: "right", width: "130px" }}
                  >
                    {p.place}
                  </td>
                  <td
                    className="secRoundRow"
                    style={{
                      textAlign: "center",
                      color: "#FFD057",
                      width: "70px",
                    }}
                  >
                    -
                  </td>
                  <td
                    className="secRoundRow"
                    style={{ textAlign: "left", width: "140px" }}
                  >
                    {p.prize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Box className="secRoundFAQ">
            <Box
              className="FAQTitle"
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#F8F8F8",
                mt: "43px",
                mb: "33px",
              }}
            >
              Can I sell my ticket in case I don’t win anything?
            </Box>
            {accardionTitle?.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  width: "700px",
                  background: "transparent",
                  color: "#FFAC33",
                  boxShadow: 0,
                  flexGrow: 0,
                  borderBottom: "1px solid",
                }}
              >
                <AccordionSummary
                  sx={{
                    height: "51px",
                  }}
                  expandIcon={<ArrowDropDownIcon sx={{ color: "#FFAC33" }} />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography
                    sx={{
                      fontFamily: "Epilogue",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "22px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "white",
                      whiteSpace: "pre-wrap",
                      textAlign: "center",
                    }}
                  >
                    {item.value}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
