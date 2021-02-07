import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Wanna help me make this site awesome ? </h2>
          <h5 className={classes.description}>
            If you could help me improve the content provided, I'll eagerly accept that help.
            A lot of the info here could be way better, so yeah, help is much appreciated. 
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
