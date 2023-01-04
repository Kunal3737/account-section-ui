import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PageTitle from "./components/PageTitle";
import BasicTabs from "./components/Tabs";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import MyFamilyFormDetails from "./components/MyFamilyFormDetails";
import MyFamilyListDetails from "./components/MyFamilyListDetails";
import Wallet from "./components/Wallet";
import { Card, CardContent, Typography } from "@mui/material";
import BillingAddress from "./components/BillingAddress";
import VerticalLinearStepper from "./components/Stepper";
import Button from "@mui/material/Button";
import Invitations from "./components/Invitations";

function App() {
  const [activeStep, setActiveStep] = useState("sent");
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const BankAccountActivityWrapper = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginTop: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-95px",
    },
  }));

  const BillingAddressWrapper = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginTop: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: `${activeStep === "sent" ? "-330px" : "-390px"}`,
    },
  }));

  const VerticalLinearStepperWrapper = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      height: "336px",
      overflowY: "auto",
    },
    [theme.breakpoints.up("md")]: {
      height: "430px",
      overflowY: "auto",
    },
  }));

  return (
    <div>
      <NavBar />
      <div className="app-wrapper">
        {windowSize.innerWidth <= 600 ? (
          <>
            <PageTitle />
            <BasicTabs />
          </>
        ) : (
          <div>
            {windowSize.innerWidth >= 900 && (
              <div className="app-header-title-wrapper">
                <div>
                  <Typography variant="h6">My Account</Typography>
                </div>
                <div className="app-header-success-msg">
                  Succes Message Here
                </div>
                <div>
                  <Button
                    style={{
                      backgroundColor: "#232E3E",
                    }}
                    variant="contained"
                  >
                    View Button
                  </Button>
                </div>
              </div>
            )}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item sm={7} md={8}>
                  <MyFamilyFormDetails windowWidth={windowSize.innerWidth} />
                </Grid>
                <Grid item sm={5} md={4}>
                  <MyFamilyListDetails />
                </Grid>

                <Grid item sm={6} md={4}>
                  <BankAccountActivityWrapper>
                    <Card
                      style={{
                        height: `${
                          windowSize.innerWidth >= 900 ? "152px" : "333px"
                        }`,
                      }}
                    >
                      <CardContent>
                        <div>
                          <strong>Bank Accounts</strong>
                        </div>
                        <br />
                        <Wallet windowWidth={windowSize.innerWidth} />
                      </CardContent>
                    </Card>
                  </BankAccountActivityWrapper>
                </Grid>
                {windowSize.innerWidth >= 900 && (
                  <Grid item sm={6} md={4}>
                    <BankAccountActivityWrapper>
                      <Card>
                        <CardContent>
                          <div className="activities-wrapper">
                            <div>
                              <stromg>Activities</stromg>
                            </div>
                            <div>
                              <Button
                                style={{
                                  backgroundColor: "#0C611A",
                                }}
                                variant="contained"
                              >
                                View All
                              </Button>
                            </div>
                          </div>
                          <VerticalLinearStepperWrapper>
                            <VerticalLinearStepper />
                          </VerticalLinearStepperWrapper>
                        </CardContent>
                      </Card>
                    </BankAccountActivityWrapper>
                  </Grid>
                )}

                {windowSize.innerWidth >= 900 && (
                  <Grid item sm={6} md={4}>
                    <Card>
                      <CardContent>
                        <Invitations
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                )}

                <Grid item sm={6} md={4}>
                  <BillingAddressWrapper>
                    <BillingAddress />
                  </BillingAddressWrapper>
                </Grid>

                {windowSize.innerWidth < 900 && (
                  <Grid item sm={6}>
                    <Card>
                      <CardContent>
                        <div className="activities-wrapper">
                          <div>
                            <stromg>Activities</stromg>
                          </div>
                          <div>
                            <Button
                              style={{
                                backgroundColor: "#0C611A",
                              }}
                              variant="contained"
                            >
                              View All
                            </Button>
                          </div>
                        </div>
                        <div className="stepper-wrapper">
                          <VerticalLinearStepper />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                )}

                {windowSize.innerWidth < 900 && (
                  <Grid item sm={6}>
                    <Card>
                      <CardContent>
                        <Invitations
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Grid>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
