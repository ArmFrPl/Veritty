import React from "react";
import {Icon} from "@mui/material";
import GoToIcon from "../Images/goToIcon.svg";

export const TableRow = ({data, index}) => {
  console.log(data.data)
  return(
    <tr style={{
      display: "flex",
      marginTop: '5px',
      justifyContent: 'space-between',
      maxHeight: '110px',
    }}>
        <td className='leaderRows'
            style={{textAlign: 'center', width: '4%', marginRight: '10px'}}>{index + 1}</td>
      <td className='leaderRows thin'
          style={{textAlign: 'center', width: '60%',}}>{data.id}<Icon
        sx={{ml: '12px'}}><img
        src={GoToIcon} height={10} width={10}/></Icon></td>
      <td className='leaderRows'
          style={{textAlign: 'right', width: '32%', marginLeft: '3%'}}>{data.winning}</td>
    </tr>
  )
}