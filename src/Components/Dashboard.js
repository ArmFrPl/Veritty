import React from "react";
import {Box, Icon} from "@mui/material";
import '../Styles/Dashboard.css';
import GoToIcon from "../Images/goToIcon.svg";

export const Dashboard = () => {
  const history = [
    {
      winning: '50 USTD',
      date: '15/12/22 22:54'
    },
    {
      winning: '100 USTD',
      date: '18/12/22 13:40'
    },
    {
      winning: '0 USTD',
      date: '19/12/22 12:11'
    },
  ]

  return (
    <Box className='dashboardCont'>
      <Box sx={{
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: '35px',
        background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }}>YOUR DASHBOARD</Box>
      <Box sx={{
        width: '365px',
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: '28px',
        color: '#F8F8F8',
        textAlign: 'center',
        mt: '32px',
      }}>Here you can find the information about our your tickets! </Box>
      <Box sx={{
        width: '435px',
        height: '128px',
        borderRadius: '10px',
        mt: '23px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        padding: '35px 0 0 32px',
        boxSizing: 'border-box',
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '28px',
          color: '#F8F8F8',
          textAlign: 'left',
        }}>Total tickets: <Box component='span' sx={{color: '#FFAC33', fontSize: '18px', ml: '10px'}}>3</Box> </Box>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '28px',
          color: '#F8F8F8',
          textAlign: 'left',
          mt: '13px',
        }}>Total winnings USDT: <Box component='span' sx={{color: '#FFAC33', fontSize: '18px', ml: '10px'}}>5.000
          USDT</Box> </Box>
      </Box>
      <Box sx={{
        width: '435px',
        height: '214px',
        borderRadius: '10px',
        mt: '23px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: '35px',
          color: '#F8F8F8',
          textAlign: 'center',
          height: '57px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1.3px solid #FFD057'
        }}>
          Your History
        </Box>
        <Box sx={{
          width: '100%',
          height: '156px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <table className='history' style={{width: '70%'}}>
            <tbody>
            {
              history?.map((h, index) => (
                <tr style={{
                  display: "flex",
                  marginTop: '0px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <td className='historyRows'
                      style={{textAlign: 'left', width: '4%', marginRight: '15px'}}>{index + 1}</td>
                  <td className='historyRows bold'
                      style={{textAlign: 'left', width: '40%',}}>{h.winning}</td>
                  <td className='historyRows'
                      style={{textAlign: 'left', width: '65%', marginLeft: '30px'}}>{h.date}<Icon sx={{
                        color: '#FFFFFF'
                  }}><img
                    src={GoToIcon} height={10} width={10}/></Icon></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Box>
      </Box>
      <div className='blankSpace'></div>
    </Box>
  )
}