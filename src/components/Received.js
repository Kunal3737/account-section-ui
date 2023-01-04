import React from "react";
import ReceivedDetails from "./ReceivedDetails";
import "./styles.css";

const Received = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="received-wrapper">
      {arr.map((item) => (
        <ReceivedDetails
          cardTitleText={
            <strong>
              <span className="received-name-wrapper">John Smith</span>&nbsp;
              <span>have invited you to become his family member</span>
            </strong>
          }
        />
      ))}
    </div>
  );
};

export default Received;
