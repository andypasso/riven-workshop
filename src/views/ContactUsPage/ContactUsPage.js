/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";


import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";


const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Riven Workshop"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <GridContainer>
              <GridItem md={12} sm={6}>
                <p>
                  You can contact me with anything related to our Products. I
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            
            <div className={classes.center}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.linkedin.com/in/andres-dev/"
                target="_blank"
              >
                Andy
              </a>{" "}
              To help Riven players out there.
            </div>
          </div>
        }
      />
    </div>
  );
}
