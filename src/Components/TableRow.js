import React from "react";
import {Box, Icon} from "@mui/material";
import GoToIcon from "../Images/goToIcon.svg";

export const TableRow = ({data, index}) => {
  return(
    <tr style={{
      display: "flex",
      marginTop: '5px',
      justifyContent: 'space-between',
      maxHeight: '110px',
    }}>
        <Box component='td' className='leaderRows'
            sx={{textAlign: 'center', width: '4%', marginRight: '10px', fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '22px !important', md: '28px !important'}}}>{index + 1}</Box>
      <Box component='td' className='leaderRows thin'
          sx={{textAlign: 'center', width: {xs: '85%', md:'80%'}, fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '28px !important', md: '35px !important'}, "&:hover": {color: '#FDD057', filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}}}>{data?.id.slice(0, 10) + "…"}<Icon
        sx={{ml: {xs: '0px', md:'12px'}}}><img alt='arrow'
        src={GoToIcon} height={10} width={10}/></Icon></Box>
      <Box component='td' className='leaderRows'
          sx={{textAlign: 'right', width: {xs: '50%', md: '40%'}, marginLeft: '3%', fontSize: {xs: '16px !important',  md: '18px !important'}, lineHeight: {xs: '22px !important',  md: '35px !important'}}}>{data.totalSum} USTD</Box>
    </tr>
  )
}