import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import ColorButtons from "./Button";
import PeopleProfile from "./PeopleProfile";
import "./styles.css";

const MyFamilyListDetails = () => {
  return (
    <Card>
      <CardContent>
        <div className="activities-wrapper">
          <div className="fam-list-wrapper">
            <Typography variant="body2">My Family</Typography>
          </div>
          <div className="fam-list-wrapper">
            <div className="fam-list--serach-icon-wrapper">
              <SearchIcon />
            </div>
            <ColorButtons />
          </div>
        </div>
        <div className="fam-list--profile-wrapper">
          <PeopleProfile isAdmin={true} />
          <PeopleProfile />
          <PeopleProfile />
          <PeopleProfile />
          <PeopleProfile />
          <PeopleProfile />
        </div>
      </CardContent>
    </Card>
  );
};

export default MyFamilyListDetails;
