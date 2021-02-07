import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";
import mechanicsText from './mechanicsText';
import ReactMarkdown from "react-markdown";


import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container + " " + classes.sectionDark}>
          <GridContainer>
            <GridItem
              xs={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto }
            >
              <h2 className={classes.title}>Animation Cancels and Mechanis</h2>
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
                  <Info>
                    <h6 className={classes.cardCategory}>info by RivenBadChamp</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <ReactMarkdown source={mechanicsText} />
                  </h3>
                  <h5 className={classes.description}>
                  </h5>
                  <Button round color="primary" onClick={window.open("https://www.google.com")}>
                    See it on Video
                  </Button>
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
