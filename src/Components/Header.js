import React from 'react';
import {Box} from "@mui/material";
import '../Styles/Header.css'
import MintTicketImg from '../Images/Tickets/Mint Ticket.png';
import PrizeFundRect from '../Images/prizeFund.svg';
import ToggleButtons from "./ToggleButtons";

export const Header = () => {
  return(
    <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box className='headerCont'>
        <Box className='headerText'>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontHeight: 700,
            fontSize: "24px",
            lineHeight: "43px",
            color: "#F8F8F8",
            mb: '12px'
          }}>First in the world transparent and honest</Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontHeight: 700,
            fontSize: "82.5px",
            lineHeight: "55px",
            color: "#FFFFFF",
            mb: '44px'
          }}>NFT LOTTERY</Box>
          <Box component='img' src={PrizeFundRect} />
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontHeight: 700,
            fontSize: "27.8px",
            lineHeight:'52px',
            background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            position: 'relative',
            top: '-4.3em'
          }}>Prize fund</Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontHeight: 700,
            fontSize: "37.1px",
            lineHeight:'52px',
            color: '#FFD057',
            position: 'relative',
            top: '-3.5em',
          }}>247.500 USTD</Box>
        </Box>
        <Box component={"img"} src={MintTicketImg} />
      </Box>
      <ToggleButtons />
    </Box>
  )
}