import React, { useState } from "react";
import Received from "./Received";
import Sent from "./Sent";
import "./styles.css";

const Invitations = ({ activeStep, setActiveStep }) => {
  return (
    <div>
      <div className="activities-wrapper">
        <div>Invitations</div>
        <div className="invitation-wrapper">
          <div
            onClick={() => {
              setActiveStep("sent");
            }}
            className="invitation-toggle-wrapper"
            style={{
              color: `${activeStep === "sent" ? "#fff" : "#000"}`,
              backgroundColor: `${
                activeStep === "sent" ? "#F8991F" : "#dbdbdb"
              }`,
            }}
          >
            Sent (15)
          </div>
          <div
            onClick={() => {
              setActiveStep("received");
            }}
            className="invitation-toggle-wrapper"
            style={{
              backgroundColor: `${
                activeStep === "received" ? "#F8991F" : "#dbdbdb"
              }`,
              color: `${activeStep === "received" ? "#fff" : "#000"}`,
            }}
          >
            Received (5)
          </div>
        </div>
      </div>
      {activeStep === "sent" ? <Sent /> : <Received />}
    </div>
  );
};

export default Invitations;
