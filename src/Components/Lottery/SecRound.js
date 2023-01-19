import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import '../../Styles/SecRound.css';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const SecRound = () => {

  const accardionTitle = ['Yes', 'How it works?', 'How to Participate?', 'To buy or sell non-winning tickets?'];

  const prizes = [
    {
      place: '1 место',
      prize: '10.000 USTD'
    },
    {
      place: '2 место',
      prize: '5.000 USTD'
    },
    {
      place: '3 место',
      prize: '2.000 USTD'
    },
    {
      place: '4 место',
      prize: '1.000 USTD'
    },
    {
      place: '5 место',
      prize: '500 USTD'
    },
    {
      place: '6-20 место',
      prize: '300 USTD'
    }
  ]

  return (
    <Box className='ticketCountCont' sx={{
      width: '830px',
      height: '837px',
      background: 'linear-gradient(0deg, #111032 1.69%, rgba(9, 9, 18, 0) 102.54%)',
      padding: '45px 0 0 0',
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
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: '33px',
          background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}>23.000 USTD</Box>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: '33px',
          color: '#F8F8F8',
          mt: '5px',
        }}>Second Round For Non-Winners</Box>

        <table className='prizeTable' style={{marginTop: '29px',}}>
          <tbody>
          {
            prizes.map((p, index) => (
              <tr key={index} style={{display: "flex", marginTop: '5px'}}>
                <td className='secRoundRow' style={{textAlign: 'right', width: '120px'}}>{p.place}</td>
                <td className='secRoundRow' style={{textAlign: 'center', color: '#FFD057', width: '70px'}}>-</td>
                <td className='secRoundRow' style={{textAlign: 'left', width: '140px'}}>{p.prize}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <Box className='secRoundFAQ'>
          <Box className='FAQTitle' sx={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: '28px',
            color: '#F8F8F8',
            mt: '43px',
            mb: '33px',
          }}>Смогу ли я продать свой билет в случае если я не выиграю ничего?</Box>
          {
            accardionTitle?.map((name, index) => (
              <Accordion sx={{
                width: '700px',
                background: 'transparent',
                color: '#FFAC33',
                boxShadow: 0,
                flexGrow: 0,
                borderBottom: '1px solid',
              }}>
                <AccordionSummary
                  sx={{
                    height: '51px',
                  }}
                  expandIcon={<ArrowDropDownIcon sx={{color: '#FFAC33'}} />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <Typography sx={{
                    fontFamily: 'Epilogue',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: '22px',
                  }}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{color: 'white'}}>
                    После окончания лотереи мы делаем второй розыгрыш 23.000 USDT для владельцев наибольшего количество проигришных билетов. {index}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}