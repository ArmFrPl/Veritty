import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography} from "@mui/material";
import '../Styles/Results.css';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GoToIcon from "../Images/goToIcon.svg";

export const Results = ({results}) => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box className='resultsCont' sx={{
        display: {xs: 'flex', md: 'none'}
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: '28px',
          background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}>LOTTERY RESULTS</Box>
        <Box sx={{
          width: '289px',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: '22px',
          color: '#F8F8F8',
          textAlign: 'center',
          mt: '20px',
        }}>Here you can find the information about our best players! They are already playing, earning and enjoying!
          Feel
          free to join them!</Box>
        <Box sx={{
          background: 'rgba(255, 255, 255, 0.1)',
          width: '80%',
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
            Object.keys(results)?.map((result, index) => (
              <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                         sx={{
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
                  }}>{result}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {
                    results[result]?.map((obj) => (
                      <Link href={obj.link} sx={{textDecoration: 'none',}}>
                        <Typography sx={{color: 'white', textAlign: 'center', "&:hover": {color: '#FDD057', filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}}}>
                          {obj.id.slice(0, 16) + "…"} <img src={GoToIcon} alt='arrow' height={8} width={8}
                                                           style={{marginLeft: '5px'}}/>
                        </Typography>
                      </Link>
                    ))
                  }
                </AccordionDetails>
              </Accordion>
            ))
          }
        </Box>
        <div className='blankSpace'></div>
      </Box>

      {/*  Desktop*/}

      <Box className='resultsCont' sx={{
        display: {xs: 'none', md: 'flex'},
      }}>
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
        }}>Here you can find the information about our best players! They are already playing, earning and enjoying!
          Feel
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
          transitionDuration: '.3s',
          '&:hover': {
            boxShadow: '0px 0px 30px #fff8e6',
          }
        }}>
          {
            Object.keys(results)?.map((result, index) => (
              <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                         sx={{
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
                    textAlign: 'center',
                  }}>{result}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {
                    results[result]?.map((obj) => (
                      <Link href={obj.link} sx={{textDecoration: 'none',}}>
                        <Typography sx={{color: 'white', textAlign: 'center', "&:hover": {color: '#FDD057', filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}}}>
                          {obj.id.slice(0, 16) + "…"} <img src={GoToIcon} alt='arrow' height={8} width={8}
                                                           style={{marginLeft: '5px'}}/>
                        </Typography>
                      </Link>
                    ))
                  }
                </AccordionDetails>
              </Accordion>
            ))
          }
        </Box>
        <div className='blankSpace'></div>
      </Box>
    </>
  )
}

