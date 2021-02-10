import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import AndyModal from './AndyModal'



import matchups from './matchups'

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div className={classes.team + " " + classes.sectionDark}>
        {console.log(classes)}
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Riven Specific Matchups</h2>
              <h5 className={classes.description}>
                In this section you can find how to win vs most common toplaners.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {
              matchups.map(
                (matchup, index) => {
                  return(
                    <GridItem xs={12} sm={4} md={4} style={{display: 'flex'}} key={index}>
              <Card profile plain >
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={matchup.image} alt={matchup.name} className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>{matchup.name}</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Hard</h6>
                  </Muted>
                  <p className={classes.description}>
                    {matchup.tldr}
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>

                {/* modal starts here */ }
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <AndyModal matchup={matchup}> </AndyModal>

              </GridItem>

              {/* modal ends here */}



                </CardFooter>
              </Card>
            </GridItem>
                  )
                }
              )
            }
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  );
}
