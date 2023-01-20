import React from "react";
import {Avatar, Icon} from "@mui/material";
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
        width: '30px',
        height: '30px',
        ml: '-10px',
        boxShadow: `0px 0px 4px ${frameColor}`
      }}>
        <td className='leaderRows'
            style={{textAlign: 'center', width: '4%', marginRight: '10px'}}>{index + 1}</td>
      </Avatar>
      <td className='leaderRows thin'
          style={{textAlign: 'center', width: '60%',}}>{data.id}<Icon
        sx={{ml: '12px'}}><img
        src={GoToIcon} height={10} width={10}/></Icon></td>
      <td className='leaderRows'
          style={{textAlign: 'right', width: '32%', marginLeft: '10px', color: '#FFAC33'}}>{data.winning}</td>
    </tr>
  )
}