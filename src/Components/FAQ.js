import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Styles/FAQ.css';

export const FAQ = () => {
  const names = ['General', 'How does it Work', 'How to start', 'How to connect Wallet', 'How to get my NFT'];
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mb:'75px'}}>
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
      }}>Join our community now to get free updates and also alot of freebies are waiting for you or <Box component='span' sx={{textDecoration: 'underline', textDecorationThickness: '1px', cursor: 'pointer', textUnderlinePosition: 'under',}}>Contact Support</Box></Box>
      {
        names?.map((name, index) => (
          <Accordion sx={{
            mb:'21px',
            width: '819px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '8px !important',
            color: 'white',
          }}>
            <AccordionSummary
              sx={{
                height: '51px',
              }}
              expandIcon={<ArrowDropDownIcon sx={{color: 'white'}} />}
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
        )
    }