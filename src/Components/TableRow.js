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
            sx={{textAlign: 'center', width: '4%', marginRight: '10px', fontSize: {xs: '16px !important'}, lineHeight: {xs: '22px !important'}}}>{index + 1}</Box>
      <Box component='td' className='leaderRows thin'
          sx={{textAlign: 'center', width: {xs: '85%', md:'60%'}, fontSize: {xs: '16px !important'}, lineHeight: {xs: '28px !important'}}}>{data.id}<Icon
        sx={{ml: {xs: '0px', md:'12px'}}}><img alt='arrow'
        src={GoToIcon} height={10} width={10}/></Icon></Box>
      <Box component='td' className='leaderRows'
          sx={{textAlign: 'right', width: {xs: '50%', md: '40%'}, marginLeft: '3%', fontSize: {xs: '16px !important'}, lineHeight: {xs: '22px !important'}}}>{data.winning}</Box>
    </tr>
  )
}