import React from "react";
import SentDetails from "./SentDetails";
import "./styles.css";

const Sent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="received-wrapper">
      {arr.map((item) => (
        <SentDetails
          cardTitleText={
            <strong>
              <span style={{ color: "#F79B26" }}>You</span>&nbsp;
              <span>
                have invited johnsmith@gmail.com to become family member.
              </span>
            </strong>
          }
        />
      ))}
    </div>
  );
};

export default Sent;
