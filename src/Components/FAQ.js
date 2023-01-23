import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Styles/FAQ.css';

export const FAQ = ({faqRef, mobileFaqRef}) => {
  const names = ['General', 'How does it Work', 'How to start', 'How to connect Wallet', 'How to get my NFT'];
  return (
    <>
      <Box ref={mobileFaqRef} sx={{
        display: {xs: 'flex', md: 'none'},
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '75px'
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '28px',
          color: 'white',
          mb: '28px',
        }}>Frequently Asked Questions</Box>
        <Box sx={{
          width: '342px',
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '22px',
          color: 'white',
          textAlign: 'center',
          mb: '30px',
        }}>Join our community now to get free updates and also alot of freebies are waiting for you or <Box
          component='span' sx={{
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          cursor: 'pointer',
          textUnderlinePosition: 'under',
        }}>Contact Support</Box></Box>
        {
          names?.map((name, index) => (
            <Accordion key={index} sx={{
              mb: '21px',
              width: '80%',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px !important',
              color: 'white',
            }}>
              <AccordionSummary
                sx={{
                  height: '45px',
                  justifyContent: 'space-between'
                }}
                expandIcon={<ArrowDropDownIcon sx={{color: 'white'}}/>}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography>{name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. {index}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>


      {/*Desktop*/}


      <Box ref={faqRef} sx={{
        display: {xs: 'none', md: 'flex'},
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '75px'
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '28px',
          lineHeight: '28px',
          color: 'white',
          mb: '28px',
        }}>Frequently Asked Questions</Box>
        <Box sx={{
          width: '540px',
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '22px',
          color: 'white',
          textAlign: 'center',
          mb: '30px',
        }}>Join our community now to get free updates and also alot of freebies are waiting for you or <Box
          component='span' sx={{
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          cursor: 'pointer',
          textUnderlinePosition: 'under',
        }}>Contact Support</Box></Box>
        {
          names?.map((name, index) => (
            <Accordion key={index} sx={{
              mb: '21px',
              width: '819px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px !important',
              color: 'white',
            }}>
              <AccordionSummary
                sx={{
                  height: '51px',
                }}
                expandIcon={<ArrowDropDownIcon sx={{color: 'white'}}/>}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography>{name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. {index}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </>
  )
}