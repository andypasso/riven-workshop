import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
 
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
          
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Wanna help me grow ? 
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            everything you can find here  is free . 
            if you want to support me , you can buy me a coffe, it helps me a lot , and 
            keeps me motivated to keep improving this sit , as well as making new ones.
          </h4>
          <GridItem 
          style={{display:'flex', flexDirection: 'column'}}>
          <a 
            style={{textAlign: 'center'}}
              href="https://www.buymeacoffee.com/yulandy" 
              target="_blank"
              rel="noopener noreferrer">

                <a href='https://cafecito.app/yulandy' rel="noopener noreferrer" target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_3.png 1x, https://cdn.cafecito.app/imgs/buttons/button_3_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_3_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_3.png' alt='Invitame un café en cafecito.app' />==> (only for argentina)</a>
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
                   alt="Buy Me A Coffee" style={{  height: '60px !important',width: '217px !important'}} 
              />
                </a>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
