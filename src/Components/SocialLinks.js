import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import TwitterLogo from "../Images/Twitter.svg";
import DiscordLogo from "../Images/Discord.svg";
import CooliconLogo from "../Images/coolicon.svg";

export const SocialLinks = () => {
  return(
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Link style={{marginRight:'30px'}} to='#'><Box component="img" alt="Twitter Logo" src={TwitterLogo}/></Link>
      <Link style={{marginRight:'30px'}} to='#'><Box component="img" alt="Discord Logo" src={DiscordLogo}/></Link>
      <Link style={{marginRight:'43px'}} to='#'><Box component="img" alt="Coolicon Logo" src={CooliconLogo}/></Link>
    </Box>
  )
}