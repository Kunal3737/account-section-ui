import React from "react";
import SentDetails from "./SentDetails";

const Sent = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
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
