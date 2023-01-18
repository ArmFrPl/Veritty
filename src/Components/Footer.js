import React from "react";
import Logo from "../Images/VERITTY.png";
import {Box, Button, Divider} from "@mui/material";
import {SocialLinks} from "./SocialLinks";
import '../Styles/Footer.css';

export const Footer = () => {
  const footerLinks = ['Privacy Polcy', 'Terms Of Use', 'Audit'];

  return (
    <Box className='footer'>
      <Box className='footerCont'>
        <Box component="img" sx={{height: 16, width: 113}} alt="Veritty Logo" src={Logo}/>
        <SocialLinks/>
        <Box display='flex' alignItems='flex-end' justifyContent='center' flexDirection='column' >
          {footerLinks?.map((link, index) => (
            <Button style={{color: 'white', textDecoration: 'none'}} className='footerItem'
                  key={index}>{link}</Button>
          ))}
        </Box>
      </Box>
      <Box className='copyright' sx={{borderTop: '1px solid #DCDCDC'}}>
        <Box sx={{
          color: 'white',
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
        }}>© 2022 Veritty</Box>
      </Box>
    </Box>
  )
}