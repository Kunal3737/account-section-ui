import * as React from "react";
import "./styles.css";
import MyFamilyFormDetails from "./MyFamilyFormDetails";
import MyFamilyListDetails from "./MyFamilyListDetails";

const MyFamily = () => {
  return (
    <div className="my-family-wrapper">
      <MyFamilyListDetails />
      <br />
      <MyFamilyFormDetails />
    </div>
  );
};

export default MyFamily;
