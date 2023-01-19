import React from 'react';
import {
  Box,
  LinearProgress,
} from "@mui/material";
import '../../Styles/TicketsCount.css';

export const TicketsCount = () => {

  const winnings = [
    {
      winning: '20.000 USTD',
      left: 2
    },
    {
      winning: '10.000 USTD',
      left: 3
    },
    {
      winning: '5.000 USTD',
      left: 4
    },
    {
      winning: '2.500 USTD',
      left: 5
    },
    {
      winning: '1.500 USTD',
      left: 10
    },
    {
      winning: '1.000 USTD',
      left: 15
    },
    {
      winning: '500 USTD',
      left: 20
    },
    {
      winning: '200 USTD',
      left: 50
    },
    {
      winning: '100 USTD',
      left: 100
    }];

  return (
    <>
      <Box className='ticketCountCont' sx={{
        width: '830px',
        height: '556px',
        background: 'linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)',
        padding: '37px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontSize: "28px",
            lineHeight: '33px',
            background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            // mt: '37px'
          }}>JACKPOT</Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontSize: "37.3px",
            lineHeight: '33px',
            textAlign: 'center',
            color: '#FFD057',
            mt: '10px',
          }}>50.000 USTD x1</Box>

          <table style={{marginTop: '29px'}}>
            <tbody>
            {
              winnings.map((w, index) => (
                <tr key={index} style={{display: "flex", marginTop: '5px'}}>
                  <td className='row' style={{textAlign: 'right', width: '130px'}}>{w.winning}</td>
                  <td className='row' style={{textAlign: 'center', color: '#FFD057', width: '60px'}}>x</td>
                  <td className='row' style={{textAlign: 'left', width: '45px'}}>{w.left}</td>
                  <td className='row lastRow' style={{textAlign: 'left', width: '110px'}}>{`(left - ${w.left})`}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Box>
        <Box className='progressBarCont'>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: '22px',
            textAlign: 'center',
            color: '#F8F8F8',
            mr: '25px',
          }}>Sold Tickets</Box>
          <LinearProgress className='progressBar' variant='determinate' value={80} valueBuffer={100}>32</LinearProgress>
        </Box>
      </Box>
    </>
  )
}