import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography, Link} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../Styles/FAQ.css';

export const FAQ = ({faqRef, mobileFaqRef}) => {
  const names = [
    {
      name: 'General',
      value: 'Veritty is the world\'s first transparent and honest NFT Lottery. Veritty smart contact is based on Ethereum blockchain which gives anyone a chance to win 50000 USDT and join some of the most exclusive NFT-gated communities on Web-3.',
    },
    {
      name: 'How does it Work',
      value: 'As soon as you connect your wallet and purchase a ticket, the smart contract will generate 10,888 tickets randomly, 888 of which will be winning the prize. Upon payment, the winning ticket appears immediately on the website on the dashboard, in your wallet, and on OpenSea. We\'ve made sure that the mechanism for determining the winning ticket is as transparent as possible, and you can easily check that in an open for public smart contract.,'
    },
    {
      name: 'How to start',
      value: 'Connect your wallet and click \'Mint ticket\' for a quick start.',
    },
    {
      name: 'How to connect Wallet',
      value: `1. Connect Metamask (Ethereum Mainnet network) \n2. Press MINT NFT to purchase \n3. Press ""Confirm"" button \n4. Follow transaction instructions on Metamask. \n5. See the tickets you purchased in ’Dashboard’ section`
    },
    {
      name: 'How to get my NFT',
      value: 'You can view all the tickets that you have purchased for live and ended raffles by going to the History section on the Dashboard. Click on the tx hash of tickets to see a complete transaction on the blockchain on EtherScan',
    }
  ];
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
        }}><Link sx={{color: '#F8F8F8'}} target='_blank' href='mailto:info@veritty.io'>Contact Support</Link></Box></Box>
        {
          names?.map((item, index) => (
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
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ whiteSpace: 'pre-wrap', textAlign: 'center'}}>
                  {item.value}
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
        }}><Link sx={{color: '#F8F8F8'}} target='_blank' href='mailto:info@veritty.io'>Contact Support</Link></Box></Box>
        {
          names?.map((item, index) => (
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
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ whiteSpace: 'pre-wrap', textAlign: 'center'}}>
                  {item.value}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </>
  )
}