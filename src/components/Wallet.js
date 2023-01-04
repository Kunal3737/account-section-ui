import React from "react";
import WalletDetails from "./WalletDetails";
import { styled } from "@mui/material/styles";

const Wallet = ({ windowWidth }) => {
  const WalletDetailsWrapper = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  }));

  return (
    <WalletDetailsWrapper>
      <WalletDetails
        cardNumber="**** **** **** 5967"
        subText="Expires 09/27"
        windowWidth={windowWidth}
      />
      <WalletDetails
        cardNumber="**** **** **** 5967"
        subText="Expires 09/27"
        windowWidth={windowWidth}
      />
      {windowWidth < 900 && (
        <WalletDetails
          cardNumber="************5967"
          subText="Peter Moscone"
          windowWidth={windowWidth}
        />
      )}
    </WalletDetailsWrapper>
  );
};

export default Wallet;
