import React from "react";
import { Typography, Button } from "@mui/material";
import "./styles.css";

const WalletDetails = ({ cardNumber, subText, windowWidth }) => {
  return (
    <div
      className="wallet-details-wrapper"
      style={{
        backgroundColor: windowWidth <= 600 ? "f5f6f8" : "#fff",
      }}
    >
      <div className="fam-list-wrapper">
        <div className="people-profile-photo-wrapper">P</div>
        <div className="received-details-card-title-wrapper">
          <Typography style={{ color: "#000" }} variant="subtitle2">
            {cardNumber}
          </Typography>
          <Typography variant="caption" sx={{ color: "#D4D5D5" }}>
            {subText}
          </Typography>
        </div>
      </div>

      {windowWidth <= 600 && (
        <div>
          <Button
            variant="contained"
            style={{
              maxHeight: "28px",
              minHeight: "28px",
              backgroundColor: "#0C611A",
              textTransform: "none",
            }}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default WalletDetails;
