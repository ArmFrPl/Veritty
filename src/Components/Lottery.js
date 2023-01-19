import React from "react";
import {TicketsCount} from "./Lottery/TicketsCount";
import '../Styles/Lottery.css';
import {SecRound} from "./Lottery/SecRound";
import {WhyNft} from "./Lottery/WhyNft";

export const Lottery = () => {
  return(
    <div className='lotteryCont'>
      <TicketsCount />
      <div className='blankSpace'></div>
      <SecRound />
      <div className='blankSpace'></div>
      <WhyNft />
    </div>
  )
}