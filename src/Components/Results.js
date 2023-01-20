import React, { useState } from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import '../Styles/Results.css';
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Results = () => {
  const [expanded, setExpanded] = useState(false);
  const winningAcc = ['20.000 USTD','10.000 USTD','5.000 USTD','2.500 USTD','1.500 USTD','1.000 USTD','500 USTD','200 USTD','100 USTD','50 USTD']

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className='resultsCont'>
      <Box sx={{
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: '28px',
        background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }}>LOTTERY RESULTS</Box>
      <Box sx={{
        width: '413px',
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: '28px',
        color: '#F8F8F8',
        textAlign: 'center',
        mt: '20px',
      }}>Here you can find the information about our best players! They are already playing, earning and enjoying! Feel
        free to join them!</Box>
      <Box sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        width: '435px',
        height: expanded ? '650px' : '546px',
        borderRadius: '8px',
        mt: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transitionDuration: '.3s'
      }}>
        {
          winningAcc?.map((name, index) => (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{
              width: '80%',
              background: 'transparent',
              color: '#FFAC33',
              boxShadow: 0,
              flexGrow: 0,
              borderBottom: '1px solid',
            }}>
              <AccordionSummary
                sx={{
                  minHeight: '40px',
                  height: '40px'
                }}
                expandIcon={<ArrowDropDownIcon sx={{color: '#FFAC33'}}/>}
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
                {
                  [0, 1, 2].map(() => (
                    <Typography sx={{color: 'white'}}>
                      0x017858849..6765qww1 <NorthEastIcon/>
                    </Typography>
                  ))
                }
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
      <div className='blankSpace'></div>
    </Box>
  )
}

