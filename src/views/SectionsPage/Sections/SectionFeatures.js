import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import bg9 from "assets/img/bg9.jpg";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
       
      </div>
      {/* Feature 5 START */}
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Beginner TIps</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={VerifiedUserOutlinedIcon}
                  title="Use your shield efficiently"
                  description={
                    <p>
                      A common mistake is to use your CCs while your shield (E) is active.
                       After using E, you might want to auto attack before using your stun
                        (W) or 3rd Q. If you CC your target while you're shielded, 
                        you wont make profit of it since the target wont be able to 
                        attack you.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={NewReleasesIcon}
                  title="Auto Attacking In Between Your Spells"
                  description={
                    <p>
                      Riven's passive increases her auto attack damage after she uses 
                      a spell. Therefore, it is better to auto attack between your spells.
                       This way, you will improve your DPS, this can significantly change 
                       the result of a fight.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={KeyboardArrowRightIcon}
                  title="Q Directions and Hover"
                  description={
                    <p>
                      After using Q, Riven will dash forward UNLESS 
                      you're hovering an enemy (Minion/Monster/Champion),
                       in this case she will dash toward this enemy.
                       That also helps to stick on your target when
                        fighting in melee range.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Increased Hitboxes and range"
                  description={
                    <p>
                      A lot of people don't know that, 
                      but Riven's ultimate allows her to auto attack 
                      from further than usual, and her Q and W got a bigger hitboxes,
                       you can then damage and CC them from further than 
                       when you're not under the effects of the ult.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Keep on Running While Activating Your Ultimate"
                  description={
                    <p>
                      Most of the beginners tend to stop themselves 
                      to activate their ult. Thing is, if you use E 
                      into R (Keep using move command, because E stops your movements),
                       then you will turn your ultimate on while dashing forward. 
                       That also works with the second activation of the ultimate,
                        allowing you to throw the projectile further.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Using E Stops Your Actions"
                  description={
                    <p>
                      After pressing E, Riven will stop doing anything,
                       that's why you need to keep on using the move
                        command or your spells if you wanna keep going.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      {/* Feature 5 END */}
    </div>
  );
}
