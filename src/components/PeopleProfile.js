import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import IconButton from "@mui/material/IconButton";
import "./styles.css";

const PeopleProfile = ({ isAdmin }) => {
  return (
    <div
      className="people-profile-wrapper"
      style={{
        backgroundColor: `${isAdmin ? "#F8991F" : "#DEE8FF"}`,
      }}
    >
      <div className="fam-list-wrapper">
        <div className="people-profile-photo-wrapper">P</div>
        <Typography
          style={{ color: `${isAdmin ? "#fff" : "#000"}` }}
          variant="subtitle2"
        >
          John Smith
        </Typography>
      </div>
      {isAdmin ? (
        <div className="fam-list-wrapper">
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#000",
            }}
            variant="contained"
            size="small"
          >
            ADMIN
          </Button>
          <div className="people-profile--people-alt-icon">
            <IconButton aria-label="Example">
              <PeopleAltIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div>
          <Button
            className="people-profile-member-wrapper"
            variant="contained"
            size="small"
          >
            MEMBER
          </Button>
        </div>
      )}
    </div>
  );
};

export default PeopleProfile;
