import React from "react";
import { Box } from "@mui/material";
import LoaderTicketBackground from "../../Images/Tickets/LoaderTicketBackground.png";

export const Loader = (desktop) => {
  return (
    <Box className="mintTicket">
      <Box
        sx={
          desktop
            ? {
                position: "relative",
                borderRadius: "24px",
                height: "485px",
                zIndex: 2,
              }
            : {}
        }
      >
        <Box
          component={"img"}
          sx={{ width: "278px !important", height: "485px !important" }}
          src={LoaderTicketBackground}
          className="mintTicketImage"
        />
        <div className="LoaderCircle">
          <div></div>
        </div>
      </Box>
    </Box>
  );
};
