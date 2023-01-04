import * as React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  InputLabel,
  FormControl,
  InputBase,
  Grid,
} from "@mui/material";
import "./styles.css";
import { alpha, styled } from "@mui/material/styles";

const MyFamilyFormDetails = ({ windowWidth }) => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(2),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 16,
      minWidth: "100px",
      padding: "6px 8px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));

  const ButtonWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginTop: "60px", // 10px for mobile screen
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const FormNameWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "170px",
    },
  }));

  const FormInputWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  }));

  return (
    <Card>
      <CardContent>
        <Root>
          <div className="my-family-form-details-content">
            <div className="my-family-form-details-photo-wrapper">P</div>
            <FormNameWrapper>
              <Typography variant="h5">John Smith</Typography>
              <Typography variant="caption" display="block">
                Main St. Farmington, CA 123
              </Typography>
            </FormNameWrapper>
          </div>
          <FormInputWrapper>
            <Grid container spacing={0.5}>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    First Name:
                  </InputLabel>
                  <BootstrapInput defaultValue="John" id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Last Name:
                  </InputLabel>
                  <BootstrapInput defaultValue="Smith" id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Phone:
                  </InputLabel>
                  <BootstrapInput
                    defaultValue="+1 (324) 234-2342"
                    id="bootstrap-input"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Graduation Year:
                  </InputLabel>
                  <BootstrapInput defaultValue="1988" id="bootstrap-input" />
                </FormControl>
              </Grid>
              {/* Add for Desktop screen */}
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Email:
                  </InputLabel>
                  <BootstrapInput
                    disabled={true}
                    defaultValue="johnsmith@yahoo.com"
                    id="bootstrap-input"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl variant="standard" fullWidth={true}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Date of Birth:
                  </InputLabel>
                  <BootstrapInput
                    disabled={true}
                    defaultValue="08/03/1960"
                    id="bootstrap-input"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </FormInputWrapper>
          <ButtonWrapper>
            <Button
              style={{
                backgroundColor: windowWidth >= 426 ? "#0C611A" : "#232E3E",
                marginRight: "10px",
                marginTop: "10px",
              }}
              variant="contained"
            >
              {windowWidth >= 426 ? "Save" : "Edit Profile"}
            </Button>
            {windowWidth >= 426 && (
              <>
                <Button
                  style={{
                    backgroundColor: "#232e3e",
                    margin: "10px 10px 0 0",
                  }}
                  variant="contained"
                >
                  Change Password
                </Button>
                <Button
                  style={{
                    backgroundColor: "#ff3a3a",
                    margin: "10px 10px 0 0",
                  }}
                  className="leave-fam-wrapper"
                  variant="contained"
                >
                  Leave Family
                </Button>
              </>
            )}
          </ButtonWrapper>
        </Root>
      </CardContent>
    </Card>
  );
};

export default MyFamilyFormDetails;
