import React from "react";
import {Avatar, Box, Icon} from "@mui/material";
import GoToIcon from "../Images/goToIcon.svg";

export const TableRowWithAvatar = ({data, index, frameColor}) => {
  return(
    <tr style={{
      display: "flex",
      marginTop: '5px',
      justifyContent: 'space-between',
      maxHeight: '110px',
    }}>
      <Avatar sx={{
        background: 'transparent',
        border: `2.5px solid ${frameColor}`,
        width: {xs: '24px', md:'30px'},
        height:  {xs: '24px', md:'30px'},
        ml: '-10px',
        boxShadow: `0px 0px 4px ${frameColor}`
      }}>
        <Box component='td' className='leaderRows'
            sx={{textAlign: 'center', width: '100%', marginTop: '3px', fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '22px !important', md: '35px !important'}, display: 'flex', justifyContent: 'center'}}>{index + 1}</Box>
      </Avatar>
      <Box component='td' className='leaderRows thin'
          sx={{textAlign: 'center', width: '40%',fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '28px !important', md: '35px !important'}, "&:hover": {color: '#FDD057', filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}}}>{data?.id.slice(0, 10) + "…"}<Icon><img alt='arrow'
        src={GoToIcon} height={10} width={10}/></Icon></Box>
      <Box component='td' className='leaderRows'
          sx={{textAlign: 'right', width: {xs: '45%', md: '45%'},  marginLeft: '10px', color: '#FFAC33', fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '22px !important', md:'35px !important'}}}>{data.totalSum} USTD</Box>
    </tr>
  )
}