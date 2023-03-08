import React, { useState } from "react";
import Logo from "../Images/VERITTY.svg";
import { Box, Button, Fade, Link, Modal } from "@mui/material";
import { SocialLinks } from "./SocialLinks";
import CloseIcon from "@mui/icons-material/Close";
import "../Styles/Footer.css";

export const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const handleOpenPrivacy = () => setOpenPrivacy(true);
  const handleClosePrivacy = () => setOpenPrivacy(false);

  const [openTerms, setOpenTerms] = useState(false);
  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box
        className="footer"
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Box className="mobileFooterCont">
          <Box
            component="img"
            sx={{ height: 23, width: 149 }}
            alt="Veritty Logo"
            src={Logo}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "90%",
              mt: "20px",
              alignItems: "baseline",
            }}
          >
            <SocialLinks />
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              flexDirection="column"
            >
              <Button
                sx={{ color: "white", textDecoration: "none" }}
                className="mobileFooterItem"
                onClick={handleOpenPrivacy}
              >
                Privacy Policy
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openPrivacy}
                onClose={handleClosePrivacy}
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
                      Privacy Policy
                      <CloseIcon
                        onClick={() => handleClosePrivacy}
                        cursor="pointer"
                      />
                    </Box>
                    <Box className="footerModalBody">
                      Welcome to Veritty.com, a webssite of Veritty LLC
                      (“Veritty”, “we”, “our”, or “us”).
                      <br />
                      <br />
                      1.1 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      1.2 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      1.3 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      1.4 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      1.5 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.1 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      2.2 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.3 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      2.4 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.5 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                    </Box>
                  </Box>
                </Fade>
              </Modal>
              <Button
                style={{ color: "white", textDecoration: "none" }}
                className="mobileFooterItem"
                onClick={handleOpenTerms}
              >
                Terms Of Use
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openTerms}
                onClose={handleCloseTerms}
                closeAfterTransition
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fade in={openTerms}>
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
                      Terms of Use
                      <CloseIcon onClick={handleCloseTerms} cursor="pointer" />
                    </Box>
                    <Box className="footerModalBody">
                      Welcome to Veritty.com, a website of Veritty LLC
                      (“Veritty”, “we”, “our”, or “us”).
                      <br />
                      <br />
                      1.1 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      1.2 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      1.3 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      1.4 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      1.5 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.1 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      2.2 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.3 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                      <br />
                      <br />
                      2.4 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a registered user of our Site.
                      Veritty reserves the right to make unilateral
                      modifications to these terms and will provide notice of
                      these changes as described below. This Agreement applies
                      to all visitors, users, and others who access the Site
                      (“Users”).
                      <br />
                      <br />
                      2.5 Title
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify
                      <br />
                      <br />
                      This page explains the terms by which you may use our
                      website (the “Site”). By accessing or using the Site, you
                      signify that you have read, understood, and agree to be
                      bound by this Terms of Use Agreement (“Agreement”),
                      whether or not you are a
                    </Box>
                  </Box>
                </Fade>
              </Modal>
              <Link
                sx={{
                  textDecoration: "none",
                }}
                target="_blank"
                href="https://goerli.etherscan.io/address/0x7fb14DAA37ABe5A1Fe0808764D4CBe4fBb332294"
              >
                <Button
                  style={{ color: "white", textDecoration: "none" }}
                  className="footerItem"
                >
                  SmartContract
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="copyright" sx={{ borderTop: "1px solid #DCDCDC" }}>
          <Box
            sx={{
              color: "white",
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "20px",
            }}
          >
            © {year} Veritty
          </Box>
        </Box>
      </Box>

      {/*  Desktop */}

      <Box
        className="footer"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box className="footerCont">
          <Box
            component="img"
            sx={{ height: 16, width: 113 }}
            alt="Veritty Logo"
            src={Logo}
          />
          <SocialLinks />
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            flexDirection="column"
          >
            <Button
              style={{ color: "white", textDecoration: "none" }}
              className="footerItem"
              onClick={handleOpenPrivacy}
            >
              Privacy Policy
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openPrivacy}
              onClose={handleClosePrivacy}
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
                    width: "820px",
                    height: "721.11px",
                    background: "#101010",
                    border: "1.20991px solid #5900EB",
                    borderRadius: "29.0379px",
                    padding: "25px 0 61px 45px",
                  }}
                >
                  <Box className="footerModalHeader">
                    Privacy Policy
                    <CloseIcon onClick={handleClosePrivacy} cursor="pointer" />
                  </Box>
                  <Box className="footerModalBody">
                    <h3>A word from Veritty</h3>
                    <br />
                    Thank you for visiting veritty.io! We at Veritty respect
                    your privacy and are committed to protecting it through our
                    compliance with this Privacy Policy. This Policy is meant to
                    help you understand what data we collect, why we collect it
                    and what we do with it. This way you have a right to opt-out
                    from providing any piece of information about you at any
                    time. This is important, that is why we hope you will take
                    time to read it carefully. In case you don’t agree with the
                    way we treat information, please stop using the Site and/or
                    the Wallet.
                    <br />
                    <h3>1. Introduction These</h3>
                    Terms of Use (‘Terms’) describe the Veritty's Internet
                    website located at https://veritty.io and related subdomains
                    (the “Site” and collectively, “Veritty”, “us”, “our”, or
                    “we”) and content hosted on this Site. "you" or "your" means
                    the user of the Site. This Privacy Policy together with the
                    Terms of Use form the entire legal Agreement (“Agreement”)
                    between Veritty (“Veritty”, “Company”, “we”, “us” or “our”)
                    and you as a user (“you”, “user”). The Agreement Applies to
                    internet web sites located at the URL’s https://veritty.io
                    ("Site").
                    <br />
                    <h3>2. What types of information we collect?</h3>
                    <br />
                    There are two general categories of information we collect:
                    <ul>
                      <li>Information we collect automatically.</li>
                      <li>Information you give us.</li>
                    </ul>
                    <br />
                    <h3>2.1. Information we collect automatically</h3>
                    <br />
                    NOTE: This section applies only to our Site. While using the
                    Wallet we don’t collect any information, which means no
                    information leaves your computer and/or browser while you
                    interact with our Wallet.
                    <br />
                    While interacting with the Site some information is being
                    collected automatically, such information includes:
                    <ul>
                      <li>
                        <b>Geolocation information</b> When you use certain
                        features of our SIte, we may collect information about
                        your location using IP address. We collect such
                        information to improve your experience.
                      </li>
                      <li>
                        <b>Device information.</b> We may collect information
                        about your hardware model, operating system and version,
                        unique device identifier, mobile network information,
                        and information about the device’s interaction with our
                        services.
                      </li>
                      <li>
                        <b>Cookies and similar technologies.</b> We use cookies
                        and other similar technologies. You may disable cookies
                        at your browser settings at any time. Find out more
                        about our use of cookies further in this Privacy Policy.
                      </li>
                      <li>
                        <b>Log information.</b> We may collect your log
                        information.
                      </li>
                      <li>
                        <b>Usage information.</b> We may collect information
                        about your interaction with our Site. Such information
                        includes content you view, your searches etc.
                      </li>
                    </ul>
                    <h3>
                      2.2. WHAT PERSONAL INFORMATION DO WE COLLECT FROM OUR
                      USERS?
                    </h3>
                    <ul>
                      <li>
                        We do our best to minimize the amount of Personal
                        Information that we collect from Veritty users. Your
                        contact information, such as your phone number, or email
                        address (depending on how you contact us), may be
                        collected when you communicate with us for support, or
                        if you report a bug or other error related to Veritty or
                        when you interact with us through social media. When you
                        use our Services, we process PUBLIC wallet addresses
                        from which you pay for participation in the Veritty
                        lottery and where the tickets received as a result of
                        the NFT draw are sent.
                      </li>
                    </ul>
                    <h3>3. How we use information we collect?</h3>
                    <br />
                    Our usage of information that we collect may divided into
                    following categories:
                    <ul>
                      <li>
                        Provision, improvement and development of our Site and
                        Service;
                      </li>
                      <li>Newsletter. </li>
                    </ul>
                    <h3>
                      3.1. Provision, improvement and development of our Site
                      and Wallet.
                    </h3>
                    <br />
                    We use your information to:
                    <ul>
                      <li>Provide our service;</li>
                      <li>Conduct researches to improve our services;</li>
                      <li>Provide you with customer support;</li>
                      <li>
                        Contact you to deliver certain services or information
                        you have requested;
                      </li>
                      <li>
                        To improve the content and general administration of the
                        Site and the Smart contract.
                      </li>
                    </ul>
                    <h3>3.2. Newsletter.</h3>
                    <br />
                    We use your information to:
                    <ul>
                      <li>
                        Send you our latest news, but only if you have shown
                        your explicit consent to receive such messages. If you
                        at some point will no longer wish to receive these
                        marketing or promotions from us, you may opt-out as set
                        forth in the message.
                      </li>
                    </ul>
                    <h3>4. HOW WE SHARE AND DISCLOSE INFORMATION?</h3>
                    <br />
                    If you provide us with your personal identifiable
                    information such as email, we may share and disclose
                    information that we collect for following reasons:
                    <br />
                    <ul>
                      <li>With your consent;</li>
                      <li>Safety, legal purposes, and law enforcement;</li>
                      <li>Business transfers.</li>
                    </ul>
                    <h3>4.1. With your consent</h3>
                    <br />
                    In cases where you have provided your explicit consent, we
                    may share your personal information, as described at the
                    time of consent.
                    <br />
                    <h3>4.2. Safety, Legal purposes, and Law enforcement.</h3>
                    <br />
                    We will disclose your personally identifiable information
                    (a) if we are required to do so by law, regulation or other
                    government authority or otherwise in cooperation with an
                    ongoing investigation of a governmental authority, (b) to
                    enforce the Veritty Terms of Use or user agreements or to
                    protect our rights. 4.3. Business transfers We will not sell
                    your personally identifiable information to any company or
                    organization, but we may transfer your personally
                    identifiable information to a successor entity upon a
                    merger, consolidation or other corporate reorganization in
                    which Veritty participates or to a purchaser or acquirer of
                    all or substantially all of Veritty's assets to which this
                    Site and/or the Smart contract relates. In such event we
                    will notify you before your personal information is
                    transferred and becomes subject to a different privacy
                    policy.
                    <br />
                    <h3>5. OTHER IMPORTANT INFORMATION</h3>
                    In this section we will describe other important information
                    that our users need to know. Such information includes:
                    <ul>
                      <li>Children’s privacy;</li>
                      <li> Link to third party sites.</li>
                      <li>Cookies related information.</li>
                    </ul>
                    <h3>5.1. Children’s privacy</h3>
                    <br />
                    Veritty recognizes the privacy interests of children and we
                    encourage parents and guardians to take an active role in
                    their children's online activities and interests. Neither
                    the Site nor the Smart contract are directed to children
                    under the age of 13. Veritty does not target its Smart
                    contract or this Site to children under 13. Veritty does not
                    knowingly collect personally identifiable information from
                    children under the age of 13. If we learn that a child under
                    the age of 13 provided us with personally identifiable
                    information, we will delete that information. If your child
                    has provided personally identifiable information, please
                    contact us so we can delete it. If you are under the age of
                    13, please do not provide us with any personally
                    identifiable information.
                    <br />
                    <h3>5.2. Link to third party sites</h3>
                    <br />
                    The Site may provide links to other Websites or resources
                    over which Veritty does not have control ("External Web
                    Sites"). Such links do not constitute an endorsement by
                    Veritty of those External Web Sites. You acknowledge that
                    Veritty is providing these links to you only as a
                    convenience, and further agree that Veritty is not
                    responsible for the content of such External Web Sites. Your
                    use of External Web Sites is subject to the terms of use and
                    privacy policies located on the linked to External Web
                    Sites. Therefore, we strongly encourage you to familiarize
                    yourself with terms of use and privacy policies of External
                    Web Sites prior to using them.
                    <br />
                    <h3>5.3. Cookies related information</h3>
                    <br />
                    A cookie is a piece of data stored on the user's hard drive
                    containing information about the user. Cookies generally do
                    not permit us to personally identify you. We generally use
                    session cookies to save your preferences and such cookies
                    expire when you close your browser. We also may set a
                    persistent cookie to authenticate users (such as for
                    password recognition) and for support for the internal
                    operations of our Site. Veritty may track users over time
                    and over our Sites but we do not respond to browser do not
                    track signals. Third parties such as providers of external
                    services like web traffic analysis services may also track
                    users over time and over our Site and third party websites
                    and such third parties may also place cookies, via our Site.
                    These cookies are likely to be analytical, performance
                    cookies or targeting cookies, including: Google Analytics
                    cookies, which in particular are used as Veritty contracts
                    with Google as a third party vendor. You can find out more
                    about this popular website analytics tool here. These
                    cookies collect information about how visitors use a
                    website, for instance which pages visitors go to most often,
                    and if they get error messages from web pages. These cookies
                    don’t collect information that identifies a visitor. All
                    information these cookies collect is aggregated and
                    anonymous. It is only used to improve how a website works.
                    All of this information is anonymized. You can find out more
                    about how it protects your data here.
                    <br />
                    <h3>6. WHAT ARE YOUR RIGHTS?</h3>
                    <br />
                    NOTE: This section only applies to our Site, because we
                    don’t collect any information from our Smart contract.
                    <br />
                    <br />
                    You remain in full control of your information at all times.
                    In case you provide us with your personal identifiable
                    information such as email you may exercise any of the of the
                    rights described in this section by sending an email to
                    info@veritty.io. Under this Privacy Policy you have
                    following rights:
                    <br />
                    <ul>
                      <li>Manage and control your information;</li>
                      <li>
                        Rectification of inaccurate or incomplete information;
                      </li>
                      <li>Data access and portability;</li>
                      <li>Data retention and right to be forgotten;</li>
                      <li>
                        Withdrawing consent and restriction of processing;
                      </li>
                      <li>Objection to processing;</li>
                      <li>Lodging complaints;</li>
                      <li>Automated individual decision-making.</li>
                    </ul>
                    <h3>6.1 Manage and control your Information</h3>
                    <br />
                    Since our Site doesn’t have a personal space you may access
                    and update your information by sending an email to our
                    support at info@veritty.io.
                    <br />
                    <h3>
                      6.2 Rectification of Inaccurate or Incomplete Informatio
                    </h3>
                    You have the right to ask us to correct inaccurate or
                    incomplete personal information concerning you by contacting
                    our support at info@veritty.io.
                    <br />
                    <h3>6.3 Data Access and Portability</h3>
                    <br />
                    In some jurisdictions, Applicable law may entitle you to
                    request copies of your personal information held by us. You
                    may also be entitled to request copies of personal
                    information that you have provided to us in a structured,
                    commonly used, and machine-readable format and/or request us
                    to transmit this information to another service provider
                    (where technically feasible).
                    <br />
                    <h3>6.4 Data Retention and right to be forgotten</h3>
                    <br />
                    We generally retain your personal information for as long as
                    is necessary for the provision of our service to you and us
                    and to comply with our legal obligations. If you no longer
                    want us to use your information to provide the services to
                    you, you can execute your right to be forgotten. Please note
                    that if you request the erasure of your personal
                    information: Because we maintain Site and Smart contract to
                    protect from accidental or malicious loss and destruction,
                    residual copies of your personal information may not be
                    removed from our backup systems for a limited period of
                    time.
                    <br />
                    <h3>
                      6.5 Withdrawing Consent and Restriction of Processing
                    </h3>
                    <br />
                    Where you have provided your consent to the processing of
                    your personal information by Veritty you may withdraw your
                    consent at any time by sending a communication to us
                    specifying which consent you are withdrawing. Please note
                    that the withdrawal of your consent does not affect the
                    lawfulness of any processing activities based on such
                    consent before its withdrawal. Additionally, in some
                    jurisdictions, Applicable law may give you the right to
                    limit the ways in which we use your personal information, in
                    particular where (i) you contest the accuracy of your
                    personal information; (ii) the processing is unlawful and
                    you oppose the erasure of your personal information; (iii)
                    we no longer need your personal information for the purposes
                    of the processing, but you require the information for the
                    establishment, exercise or defence of legal claims; or (iv)
                    you have objected to the processing pursuant to Section 6.6
                    and pending the verification whether the legitimate grounds
                    of Veritty override your own.
                    <br />
                    <h3>6.6 Objection to Processing</h3>
                    <br />
                    In some jurisdictions, Applicable law may entitle you to
                    require Veritty not to process your personal information for
                    certain specific purposes (including profiling) where such
                    processing is based on legitimate interest. If you object to
                    such processing we will no longer process your personal
                    information for these purposes unless we can demonstrate
                    compelling legitimate grounds for such processing or such
                    processing is required for the establishment, exercise or
                    defence of legal claims. Where your personal information is
                    processed for direct marketing purposes, you may, at any
                    time ask us to cease processing your data for these direct
                    marketing purposes by sending an email to info@veritty.io.
                    <br />
                    <h3>6.7 Lodging Complaints</h3>
                    <br />
                    You have the right to lodge complaints about the data
                    processing activities carried out by us before the competent
                    data protection authorities.
                    <br />
                    <h3>6.8 Automated individual decision-making</h3>
                    <br />
                    While using our Site and/or Smart contract you will always
                    have an option to opt-in or to opt-out. Our Site and Wallet
                    doesn’t automatically make decisions for you.
                    <br />
                    <h3>7. HOW DO WE SECURE INFORMATION?</h3>
                    <br />
                    We may employ procedural and technological measures that are
                    generally consistent with industry practice. Such measures
                    are reasonably designed to help protect your personally
                    identifiable information from loss, unauthorized access,
                    disclosure, alteration or destruction. Veritty may use
                    encryption, secure socket layer and password protection to
                    help prevent unauthorized access to your personally
                    identifiable information. Moreover, we are actively
                    monitoring and enforcing the information protection
                    standards during all of our activities, namely:
                    <ul>
                      <li>
                        Limitation of the rendered access to information only to
                        those employees who need it for providing services to
                        the user;
                      </li>
                      <li>
                        Signature of non-disclosure agreements by employees;
                      </li>
                      <li>
                        Signature by partners and external companies invited for
                        the fulfillment of particular functions of
                        non-disclosure agreements and agreements concerning
                        non-usage of such information for any unauthorized
                        purposes;
                      </li>
                      <li>
                        Storing of the personal information obtained from the
                        user in encrypted form, at protected servers secured
                        from unauthorized access.
                      </li>
                    </ul>
                    The security of your information is important to us.
                    Nevertheless, we cannot guarantee absolute protection of
                    your personal information. If you have a reason to believe
                    that your interaction with us is no longer secure, please
                    immediately notify us by contacting us in writing at
                    info@veritty.io.
                    <br />
                    <h3>8. HOW DO WE UPDATE PRIVACY POLICY?</h3>
                    Veritty may need to update this Privacy Policy from time to
                    time. If so, Veritty will post our updated Privacy Policy on
                    our Site, along with notice that the Privacy Policy has been
                    changed so you are always aware of what personally
                    identifiable information we may collect and how we may use
                    this information. Veritty may also send users who have
                    signed up to receive an email communications an email
                    notification notifying such users of any changes to the
                    Privacy Policy. Veritty encourages you to review this
                    Privacy Policy regularly for any changes. Your continued use
                    of this Site or Wallet and/or continued provision of
                    personally identifiable information to us will be subject to
                    the terms of the then-current Privacy Policy.
                    <br />
                    <h3>9. CONTACT US</h3>
                    If you have any questions or complaints regarding this
                    Privacy Policy or questions in relation to the way we handle
                    your information please contact us via email at
                    info@veritty.io.
                  </Box>
                </Box>
              </Fade>
            </Modal>
            <Button
              style={{ color: "white", textDecoration: "none" }}
              className="footerItem"
              onClick={handleOpenTerms}
            >
              Terms Of Use
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openTerms}
              onClose={handleCloseTerms}
              closeAfterTransition
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fade in={openTerms}>
                <Box
                  className="footerModalCont"
                  sx={{
                    width: "820px",
                    height: "721.11px",
                    background: "#101010",
                    border: "1.20991px solid #5900EB",
                    borderRadius: "29.0379px",
                    padding: "25px 0 61px 45px",
                  }}
                >
                  <Box className="footerModalHeader">
                    Terms of Use
                    <CloseIcon onClick={handleCloseTerms} cursor="pointer" />
                  </Box>
                  <Box className="footerModalBody">
                    Welcome to Veritty.com, a website of Veritty LLC (“Veritty”,
                    “we”, “our”, or “us”).
                    <br />
                    <br />
                    1.1 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a registered user of our Site. Veritty
                    reserves the right to make unilateral modifications to these
                    terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and
                    others who access the Site (“Users”).
                    <br />
                    <br />
                    1.2 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a
                    <br />
                    <br />
                    1.3 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a registered user of our Site. Veritty
                    reserves the right to make unilateral modifications to these
                    terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and
                    others who access the Site (“Users”).
                    <br />
                    <br />
                    1.4 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a
                    <br />
                    <br />
                    1.5 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a registered user of our Site. Veritty
                    reserves the right to make unilateral modifications to these
                    terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and
                    others who access the Site (“Users”).
                    <br />
                    <br />
                    2.1 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a
                    <br />
                    <br />
                    2.2 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a registered user of our Site. Veritty
                    reserves the right to make unilateral modifications to these
                    terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and
                    others who access the Site (“Users”).
                    <br />
                    <br />
                    2.3 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a
                    <br />
                    <br />
                    2.4 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a registered user of our Site. Veritty
                    reserves the right to make unilateral modifications to these
                    terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and
                    others who access the Site (“Users”).
                    <br />
                    <br />
                    2.5 Title
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify
                    <br />
                    <br />
                    This page explains the terms by which you may use our
                    website (the “Site”). By accessing or using the Site, you
                    signify that you have read, understood, and agree to be
                    bound by this Terms of Use Agreement (“Agreement”), whether
                    or not you are a
                  </Box>
                </Box>
              </Fade>
            </Modal>
            <Link
              sx={{
                textDecoration: "none",
              }}
              target="_blank"
              href="https://goerli.etherscan.io/address/0x7fb14DAA37ABe5A1Fe0808764D4CBe4fBb332294"
            >
              <Button
                style={{ color: "white", textDecoration: "none" }}
                className="footerItem"
              >
                SmartContract
              </Button>
            </Link>
          </Box>
        </Box>
        <Box className="copyright" sx={{ borderTop: "1px solid #DCDCDC" }}>
          <Box
            sx={{
              color: "white",
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "20px",
            }}
          >
            © {year} Veritty
          </Box>
        </Box>
      </Box>
    </>
  );
};
