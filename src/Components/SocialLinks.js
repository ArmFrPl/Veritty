import React from 'react';
import {Box, Link} from "@mui/material";
import TwitterLogo from "../Images/Twitter.svg";
import DiscordLogo from "../Images/Discord.svg";
import CooliconLogo from "../Images/coolicon.svg";
import '../Styles/SocialLinks.css';

export const SocialLinks = () => {
  return(
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      <Link style={{marginRight:'30px'}} to='#'><Box className='socialLink' component="img" alt="Twitter Logo" src={TwitterLogo} sx={{ "&:hover": {fill: '#FFD057'}}}/></Link>
      <Link style={{marginRight:'30px'}} to='#'><Box className='socialLink' component="img" alt="Discord Logo" src={DiscordLogo}/></Link>
      <Link style={{marginRight: 0}} target="_blank" href='https://testnets.opensea.io/collection/ticket-wpdx0q3dpa'><Box className='socialLink' component="img" alt="Coolicon Logo" src={CooliconLogo}/></Link>
    </Box>
  )
}