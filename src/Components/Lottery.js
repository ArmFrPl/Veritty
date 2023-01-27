import React from "react";
import {TicketsCount} from "./Lottery/TicketsCount";
import '../Styles/Lottery.css';
import {SecRound} from "./Lottery/SecRound";
import {WhyNft} from "./Lottery/WhyNft";
import {Box} from "@mui/material";

export const Lottery = ({menuOpen}) => {

  return(
    <Box className='lotteryCont' sx={{
      // display: {xs: 'none', md: 'flex'}
    }}>
      <TicketsCount menuOpen={menuOpen} />
      <div className='blankSpace'></div>
      <SecRound menuOpen={menuOpen} />
      <div className='blankSpace'></div>
      <WhyNft menuOpen={menuOpen} />
    </Box>
  )
}