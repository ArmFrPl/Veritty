import React, { useState } from "react";
import { Box, Button, Fade, Link, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function CookiePolicyModal({ openPrivacy, handleClosePrivacy }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openPrivacy}
      onClose={() => {}}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={openPrivacy}>
        <Box
          className="footerModalCont"
          sx={{
            width: { xs: "80%", md: "820px" },
            height: "721.11px",
            background: "#101010",
            border: "1.20991px solid #5900EB",
            borderRadius: "29.0379px",
            padding: "25px 0 61px 45px",
          }}
        >
          <Box className="footerModalHeader">
            Veritty Cookie Policy
            <CloseIcon onClick={() => handleClosePrivacy()} cursor="pointer" />
          </Box>
          <Box className="footerModalBody">
            This is the Cookie Policy for Veritty Crypto Lottery, accessible
            from veritty.onrender.com
            <br />
            <br />
            <h3>What Are Cookies </h3>
            Veritty Crypto Lottery uses cookies, which are small files that are
            downloaded to your computer or mobile device when you use our
            website. Cookies help us to provide a better and more personalized
            experience for our users.
            <br />
            <h3>How We Use Cookies</h3>
            We use cookies for a variety of reasons, including:
            <ul>
              <li>
                Account-related cookies: If you create an account with us, we
                will use cookies to manage the signup process and general
                administration. These cookies will be deleted when you log out.
              </li>
              <li>
                Login-related cookies: We use cookies when you log in to your
                account to remember your login details and to keep you logged in
                across different pages of our website.
              </li>
              <li>
                Transaction-related cookies: We use cookies to ensure that your
                transaction is remembered between pages so that we can process
                it correctly.
              </li>
              <li>
                Site preferences cookies: We use cookies to remember your
                preferences for how our site runs when you use it. This includes
                your language preference and other settings.
              </li>
            </ul>
            <br />
            <h3>Third-Party Cookies</h3>
            In addition to our own cookies, we also use third-party cookies from
            trusted partners. These cookies help us to analyze user behavior and
            improve our services. The following section provides more
            information about the third-party cookies that we use:
            <ul>
              <li>
                Google Analytics: We use Google Analytics to understand how
                users interact with our website and to identify areas for
                improvement. Google Analytics cookies track information such as
                how long you spend on the site and the pages that you visit. For
                more information on Google Analytics cookies, see the official
                Google Analytics page.
              </li>
              <li>
                Facebook Pixel: We use the Facebook Pixel to track user behavior
                on our website and to serve personalized ads to our users on
                Facebook. Facebook Pixel cookies track information such as which
                pages you visit and which products you are interested in. For
                more information on Facebook Pixel cookies, see the official
                Facebook Pixel page.
              </li>
            </ul>
            <br />
            <h3>Disabling Cookies</h3>
            You can disable cookies by adjusting your browser settings. However,
            please note that disabling cookies may limit your ability to use
            certain features of our website.
            <br />
            <h3>More Information</h3>
            If you have any questions or concerns about our use of cookies,
            please contact us at{" "}
            <a href="mailto: info@veritty.io">info@veritty.io</a>.
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
