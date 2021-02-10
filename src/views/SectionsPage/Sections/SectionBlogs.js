import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import mechanicsText from './mechanicsText';
import ReactMarkdown from "react-markdown";


import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";


import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SectionBlogs({ ...rest }) {
  const [classicModal, setClassicModal] = React.useState(false);

  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title} style={{textAlign: 'center'}}>Animation Cancels and Mechanis</h2>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  
                  {/* <h3 className={classes.cardTitle}>
                    <ReactMarkdown source={mechanicsText} />
                  </h3> */}

                  {/* modal starts here */ }
                
                <Button color='info' round onClick={() => setClassicModal(true)}>
                  <LibraryBooks />
                  All riven Mechanics (text)
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
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                     <h3 className={classes.cardTitle}>
                    <ReactMarkdown source={mechanicsText} />
                  </h3>
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
                </Dialog>
              

              {/* modal ends here */}



                  <h5 className={classes.description}>
                  </h5>
                  <a href = 'https://www.youtube.com/watch?v=Sys3GVscGCw' target='blank'>
                  <Button round color="primary" >
                    RivenBadCHamp's Mechanics Video
                  </Button>
                  </a>
                  <a href = 'https://www.youtube.com/watch?v=CxIVyTw9AYI' target='blank'>
                  <Button round color="primary" >
                    Adrian's Mechanics Video
                  </Button>
                  </a>
                  <a href = 'https://www.youtube.com/watch?v=CxIVyTw9AYI' target='blank'>
                  <Button round color="primary" >
                    Adrian's doublecast guide
                  </Button>
                  </a>
                  <a href = 'https://www.youtube.com/watch?v=CxIVyTw9AYI' target='blank'>
                  <Button round color="primary" >
                    RivenMains oneshot combos
                  </Button>
                  </a>
                  <a href = 'https://www.youtube.com/watch?v=CxIVyTw9AYI' target='blank'>
                  <Button round color="primary" >
                  Dekar173's wallhops
                  </Button>
                  </a>
                </CardBody>
              </Card>
              
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}
