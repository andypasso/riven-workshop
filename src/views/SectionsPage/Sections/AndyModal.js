import React from 'react'

//core components

import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import ReactMarkdown from "react-markdown";


const useStyles = makeStyles(teamsStyle);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function AndyModal({ matchup }) {

  const classes = useStyles();

  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <>
    <Button block round color="primary" onClick={() => setClassicModal(true)}>
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
                </Dialog>
  </>
  )
}
