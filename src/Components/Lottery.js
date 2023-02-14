import React from "react";
import {TicketsCount} from "./Lottery/TicketsCount";
import '../Styles/Lottery.css';
import {SecRound} from "./Lottery/SecRound";
import {WhyNft} from "./Lottery/WhyNft";
import {Box} from "@mui/material";

export const Lottery = ({menuOpen, ticketCounts}) => {

  return(
    <Box className='lotteryCont' sx={{}}>
      <TicketsCount menuOpen={menuOpen} ticketCounts={ticketCounts} />
      <div className='blankSpace'></div>
      <SecRound menuOpen={menuOpen} />
      <div className='blankSpace'></div>
      <WhyNft menuOpen={menuOpen} />
    </Box>
  )
}