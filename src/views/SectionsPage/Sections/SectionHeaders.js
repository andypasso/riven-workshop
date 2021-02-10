import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";


import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 3 START */}
      <div>
        <Carousel {...settings}>

          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Riven Studio</h1>
                    <h4>
                      The aim of this page is to help other Riven players out there.
                      Here you will be able to easily find Riven mechanichs / matchups guides.
                    </h4>
                    <br />
                    <h6>Check the community:</h6>
                    <div>
                      <a href='https://www.reddit.com/r/rivenmains' target='blank'>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-reddit" />
                      </Button>
                      </a>
                      <a href='https://discord.gg/ZYwC7CH9' targte='blank'>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-discord" />
                      </Button>
                      </a>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}
                   className={classes.textCenter}>
                  <h1 className={classes.title}>Newcomer Videos: BoxBox</h1>
                    <h4>
                      If you are new to Riven, check this BoxBox{"'"}s video, it 
                      will help you a lot to understand rivens kit and playstyle.
                    </h4>
                    <br />
                    <a href = 'https://www.youtube.com/watch?v=-t2ldJojSiQ' target='blank'>
                  <Button round color="primary" >
                    BoxBox's videos
                  </Button>
                  </a>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          
          {/* Carousel 3 START */}

          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}
                    className={classes.textCenter}>
                    <h1 className={classes.title}>Newcomer Videos: RivenBadChamp</h1>
                    <h4>
                      If you are new to Riven, check this RivenBadChamp{"'"}s video, it 
                      will help you a lot to understand rivens kit and playstyle.
                    </h4>
                    <br />
                    <a href = 'https://www.youtube.com/watch?v=x4QollqS3So' target='blank'>
                  <Button round color="primary" >
                    RivenBadChamp{"'"}s videos
                  </Button>
                  </a>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
}
