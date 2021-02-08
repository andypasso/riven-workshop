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
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";

import ReactMarkdown from "react-markdown";
import AndyModal from './AndyModal'



import matchups from './matchups'

const useStyles = makeStyles(teamsStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [AatroxModal, setAatroxModal] = React.useState(false)
  const [MalphiteModal, setMalphiteModal] = React.useState(false);

  
// matchups.map((matchup) => { return( eval(matchup.state) )})


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
              <h2 className={classes.title}>Our Awesome Team 1</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {
              matchups.map(
                (matchup, index) => {
                  return(
                    <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
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

                {/* <Button block round color="primary" onClick={() => setClassicModal(true)}>
                Full info
                </Button>
                <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>{matchup.name} Matchup</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <ReactMarkdown source={matchup.crucial} />
                    <ReactMarkdown source={matchup.lvl1} />
                    <ReactMarkdown source={matchup.lvl2} />
                    <ReactMarkdown source={matchup.lvl3} />
                    <ReactMarkdown source={matchup.lvl6} />
                   

                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog> */}
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
