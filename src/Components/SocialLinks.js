import React from "react";
import { Box, Link } from "@mui/material";
import TwitterLogo from "../Images/Twitter.svg";
import DiscordLogo from "../Images/Discord.svg";
import MediumLogo from "../Images/Medium.svg";
import TelegramLogo from "../Images/Telegram.svg";
import CooliconLogo from "../Images/coolicon.svg";
import "../Styles/SocialLinks.css";

export const SocialLinks = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Link
        style={{ marginRight: "30px" }}
        target="_blank"
        href="https://twitter.com/VerittyNFT"
      >
        <Box
          className="socialLink"
          component="img"
          alt="Twitter Logo"
          src={TwitterLogo}
          sx={{ "&:hover": { fill: "#FFD057" } }}
        />
      </Link>
      <Link
        style={{ marginRight: "30px" }}
        target="_blank"
        href="https://discord.gg/QtbcewAu8p"
      >
        <Box
          className="socialLink"
          component="img"
          alt="Discord Logo"
          src={DiscordLogo}
        />
      </Link>
      <Link
        style={{ marginRight: "30px" }}
        target="_blank"
        href="https://testnets.opensea.io/collection/ticket-wpdx0q3dpa"
      >
        <Box
          className="socialLink"
          component="img"
          alt="Coolicon Logo"
          src={CooliconLogo}
        />
      </Link>
      <Link
        style={{ marginRight: "30px" }}
        target="_blank"
        href="https://medium.com/@veritty.io"
      >
        <Box
          className="socialLink"
          component="img"
          alt="Medium Logo"
          src={MediumLogo}
          style={{ height: "21px", width: "21px" }}
        />
      </Link>
      <Link
        style={{ marginRight: 0 }}
        target="_blank"
        href="https://t.me/+BB_N5RaB5N9hMDJi"
      >
        <Box
          className="socialLink"
          component="img"
          alt="Medium Logo"
          src={TelegramLogo}
          style={{ height: "21px", width: "21px" }}
        />
      </Link>
    </Box>
  );
};
