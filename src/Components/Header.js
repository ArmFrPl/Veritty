import React from 'react';
import {Box} from "@mui/material";
import '../Styles/Header.css'
import MintTicketImg from '../Images/Tickets/Mint Ticket.png';
import ToggleButtons from "./ToggleButtons";

export const Header = ({isLoggedIn}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box className='headerCont'>
        <Box className='headerText'>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "43px",
            color: "#F8F8F8",
            mb: '12px'
          }}>First in the world transparent and honest</Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "82.5px",
            lineHeight: "55px",
            color: "#FFFFFF",
            mb: '44px'
          }}>NFT LOTTERY</Box>
          <Box className='prizeFund'>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "27.8px",
              lineHeight: '52px',
              background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}>Prize fund</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "37.1px",
              lineHeight: '52px',
              color: '#FFD057',
            }}>247.500 USTD</Box>
          </Box>
        </Box>
        <Box component={"img"} src={MintTicketImg}/>
      </Box>
      <ToggleButtons isLoggedIn={isLoggedIn} />
    </Box>
  )
}