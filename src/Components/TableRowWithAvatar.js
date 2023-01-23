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
            sx={{textAlign: 'center', width: '4%', marginRight: '10px', fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '22px !important', md: '35px !important'}}}>{index + 1}</Box>
      </Avatar>
      <Box component='td' className='leaderRows thin'
          sx={{textAlign: 'center', width: '60%',fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '28px !important', md: '35px !important'}}}>{data.id}<Icon
        sx={{ml: {xs: 0, md:'12px'}, }}><img alt='arrow'
        src={GoToIcon} height={10} width={10}/></Icon></Box>
      <Box component='td' className='leaderRows'
          sx={{textAlign: 'right', width: {xs: '40%', md: '32%'},  marginLeft: '10px', color: '#FFAC33', fontSize: {xs: '16px !important', md: '18px !important'}, lineHeight: {xs: '22px !important', md:'35px !important'}}}>{data.winning}</Box>
    </tr>
  )
}