import React from "react";
import Typography from "@mui/material/Typography";
import "./styles.css";

const SentDetails = ({ cardTitleText }) => {
  return (
    <div className="sent-details-wrapper">
      <div className="fam-list-wrapper">
        <div className="received-details-card-title-wrapper">
          <Typography style={{ color: "#000" }} variant="caption">
            {cardTitleText}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SentDetails;
