import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";

const ReceivedDetails = ({ cardTitleText }) => {
  return (
    <div className="received-details-wrapper">
      <div className="fam-list-wrapper">
        <div className="people-profile-photo-wrapper">P</div>
        <div className="received-details-card-title-wrapper">
          <Typography style={{ color: "#000" }} variant="caption">
            {cardTitleText}
          </Typography>
        </div>
      </div>

      <div className="received-details--done-wrapper">
        <IconButton
          sx={{
            width: 20,
            height: 20,
            borderRadius: "4px",
            border: "1px solid #0C611A",
            backgroundColor: "#0C611A",
            padding: "10px",
          }}
          aria-label="save"
        >
          <DoneIcon fontSize="small" sx={{ color: "#fff" }} />
        </IconButton>
        &nbsp;
        <IconButton
          sx={{
            width: 20,
            height: 20,
            borderRadius: "4px",
            border: "1px solid #FF3A3A",
            backgroundColor: "#FF3A3A",
            padding: "10px",
          }}
          aria-label="save"
        >
          <CloseIcon fontSize="small" sx={{ color: "#fff" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReceivedDetails;
