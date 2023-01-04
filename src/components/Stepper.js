import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const steps = [
  {
    id: 1,
    title: (
      <span>
        Leslie Alexander updated her&nbsp;
        <strong className="stepper-title-wrapper">Account Type</strong>
      </span>
    ),
    activityTime: "5 October 11:46 AM",
  },
  {
    id: 2,
    title: (
      <span>
        John Smith removed Mark Fleix from&nbsp;
        <strong className="stepper-title-wrapper">Family Member</strong>
      </span>
    ),
    activityTime: "5 October 10:01 AM",
  },
  {
    id: 3,
    title: (
      <span>
        Leslie Alexander updated her&nbsp;
        <strong className="stepper-title-wrapper">Account Type</strong>
      </span>
    ),
    activityTime: "5 October 11:46 AM",
  },
  {
    id: 4,
    title: (
      <span>
        John Smith removed Mark Fleix from&nbsp;
        <strong className="stepper-title-wrapper">Family Member</strong>
      </span>
    ),
    activityTime: "5 October 10:01 AM",
  },
  {
    id: 5,
    title: (
      <span>
        Leslie Alexander updated her&nbsp;
        <strong className="stepper-title-wrapper">Account Type</strong>
      </span>
    ),
    activityTime: "5 October 11:46 AM",
  },
  {
    id: 6,
    title: (
      <span>
        John Smith removed Mark Fleix from&nbsp;
        <strong className="stepper-title-wrapper">Family Member</strong>
      </span>
    ),
    activityTime: "5 October 10:01 AM",
  },
  {
    id: 7,
    title: (
      <span>
        Leslie Alexander updated her&nbsp;
        <strong className="stepper-title-wrapper">Account Type</strong>
      </span>
    ),
    activityTime: "5 October 11:46 AM",
  },
  {
    id: 8,
    title: (
      <span>
        John Smith removed Mark Fleix from&nbsp;
        <strong className="stepper-title-wrapper">Family Member</strong>
      </span>
    ),
    activityTime: "5 October 10:01 AM",
  },
  {
    id: 9,
    title: (
      <span>
        Leslie Alexander updated her&nbsp;
        <strong className="stepper-title-wrapper">Account Type</strong>
      </span>
    ),
    activityTime: "5 October 11:46 AM",
  },
  {
    id: 10,
    title: (
      <span>
        John Smith removed Mark Fleix from&nbsp;
        <strong className="stepper-title-wrapper">Family Member</strong>
      </span>
    ),
    activityTime: "5 October 10:01 AM",
  },
];

const VerticalLinearStepper = () => {
  const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#DEE8FF",
    zIndex: 1,
    color: "#232E3E",
    width: 28,
    height: 28,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  }));

  const ColorlibStepIcon = () => {
    return (
      <ColorlibStepIconRoot>
        <ManageAccountsIcon fontSize="small" />
      </ColorlibStepIconRoot>
    );
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={steps.length} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              optional={
                <Typography variant="caption">{step.activityTime}</Typography>
              }
            >
              {step.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalLinearStepper;
