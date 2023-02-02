import React from 'react';
import {
  Box, Divider,
  LinearProgress,
} from "@mui/material";
import '../../Styles/TicketsCount.css';

export const TicketsCount = ({ticketCounts}) => {
  let ticketCountsSum = 0;

  const countTickets = () => {
    ticketCountsSum = 0;
    ticketCounts?.forEach((ticket) => {
      ticketCountsSum += parseInt(ticket)
    })
    return ticketCountsSum;
  }

  const winnings = [
    {
      winning: '20.000 USTD',
      count: 2,
    },
    {
      winning: '10.000 USTD',
      count: 3,
    },
    {
      winning: '5.000 USTD',
      count: 4,
    },
    {
      winning: '2.500 USTD',
      count: 5,
    },
    {
      winning: '1.000 USTD',
      count: 10,
    },
    {
      winning: '500 USTD',
      count: 15,
    },
    {
      winning: '200 USTD',
      count: 49,
    },
    {
      winning: '100 USTD',
      count: 799
    }];
  return (
    <>
      {/*mobile*/}
      <Box className='ticketCountCont mobileTickets' sx={{
        width: '85%',
        height: '448px',
        background: 'linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)',
        padding: '37px 0 0 0',
        display: {xs: 'flex', md: 'none'},
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
            fontSize: "22.5px",
            lineHeight: '26px',
            background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            // mt: '37px'
          }}>JACKPOT</Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontSize: "30px",
            lineHeight: '26px',
            textAlign: 'center',
            color: '#FFD057',
            mt: '10px',
          }}>50.000 USTD x{ticketCounts[0]}</Box>

          <table style={{marginTop: '29px'}}>
            <tbody>
            {
              winnings.map((w, index) => (
                <tr key={index} style={{display: "flex", marginTop: '5px'}}>
                  <td className='mobileRow' style={{textAlign: 'right', width: '110px'}}>{w.winning}</td>
                  <td className='mobileRow' style={{textAlign: 'center', color: '#FFD057', width: '30px'}}>x</td>
                  <td className='mobileRow' style={{textAlign: 'left', width: '45px'}}>{w.count}</td>
                  <td className='mobileRow lastRow'
                      style={{textAlign: 'left', width: '80px'}}>{`(left - ${ticketCounts[index] + 1})`}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Box>
        <Divider/>
        <Box className='progressBarCont'>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: '18px',
            textAlign: 'center',
            color: '#F8F8F8',
            mr: '25px',
          }}>Sold Tickets</Box>
          <LinearProgress className='progressBar mobileProgress' variant='determinate' value={(10888 - countTickets())/10888*100} sx={{position: 'relative'}} />
          <Box sx={{
            position: 'absolute',
            color: 'inherit',
            marginLeft: '125px',
            width: '151px',
            textAlign: 'center',
          }}>
            {10888 - countTickets()}/10888
          </Box>
        </Box>
      </Box>


      {/*desktop*/}


      <Box className='ticketCountCont' sx={{
        width: '830px',
        height: '556px',
        background: 'linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)',
        padding: '37px 0 0 0',
        display: {xs: 'none', md: 'flex'},
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
          }}>50.000 USTD x {ticketCounts[0]}</Box>
          <table style={{marginTop: '29px'}}>
            <tbody>
            {
              winnings.map((w, index) => (
                <tr key={index} style={{display: "flex", marginTop: '5px'}}>
                  <td className='row' style={{textAlign: 'right', width: '130px'}}>{w.winning}</td>
                  <td className='row' style={{textAlign: 'center', color: '#FFD057', width: '60px'}}>x</td>
                  <td className='row' style={{textAlign: 'left', width: '45px'}}>{w.count}</td>
                  <td className='row lastRow'
                      style={{textAlign: 'left', width: '110px'}}>{`(left - ${ticketCounts[index+1]})`}</td>
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
          <LinearProgress className='progressBar' variant='determinate' value={(10888 - countTickets())/10888*100} sx={{position: 'relative'}} />
            <Box sx={{
              position: 'absolute',
              color: 'inherit',
              marginLeft: '150px',
              width: '253px',
              textAlign: 'center',
            }}>
              {10888 - countTickets()}/10888
            </Box>
        </Box>
      </Box>
    </>
  )
}