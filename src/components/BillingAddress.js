import * as React from "react";
import {
  Card,
  CardContent,
  Button,
  InputLabel,
  FormControl,
  InputBase,
  Grid,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import "./styles.css";
import { alpha, styled } from "@mui/material/styles";

const BillingAddress = () => {
  const [age, setAge] = React.useState("");

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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <div className="activities-wrapper">
          <div>
            <stromg>Billing Address</stromg>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#0C611A",
              }}
              variant="contained"
            >
              Save
            </Button>
          </div>
        </div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Same as Home Address"
        />
        <div className="billing-address-wrapper">
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

            <Grid item xs={12} md={12}>
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel shrink htmlFor="bootstrap-input">
                  Address Line 1:
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
                  Country
                </InputLabel>
                <div className="country-name-wrapper">
                  <strong>US</strong>
                </div>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={6}>
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel shrink htmlFor="bootstrap-input">
                  State/Province/Region:
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Select"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={6}>
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel shrink htmlFor="bootstrap-input">
                  City:
                </InputLabel>
                <BootstrapInput
                  defaultValue=""
                  placeholder="Enter city"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} md={6}>
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel shrink htmlFor="bootstrap-input">
                  Zip Code:
                </InputLabel>
                <BootstrapInput
                  defaultValue=""
                  placeholder="Enter zip code"
                  id="bootstrap-input"
                />
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingAddress;
