import React from "react";
import {
  CardMedia,
  CardContent,
  Box,
  Card,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import classes from "./article.module.scss";

export const Article = () => {
  return (
    <Grid item md={4}>
      <article>
        <Card className={classes.article}>
          <CardMedia
            className={classes.article__media}
            image="https://spacenews.com/wp-content/uploads/2023/01/mls-cyclone4m.jpg"
            sx={{
              height: 217,
            }}
          />
         
            <CardContent className={classes.article__contentWrap}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6" clipPath="url(#clip0_466_269)">
                      <path
                        d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z"
                        stroke="#363636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33331 1.33337V4.00004"
                        stroke="#363636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6666 1.33337V4.00004"
                        stroke="#363636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.33331 6.66675H14.6666"
                        stroke="#363636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_466_269">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <Typography className={classes.article__date}>
                  {DateTime.fromISO("2023-01-20T18:52:00.000Z").toLocaleString(
                    DateTime.DATE_FULL
                  )}
                </Typography>
              </Box>
              <Link to="/article" style={{textDecoration:'none'}}>
              <Typography variant="h3" className={classes.article__title}>
                The 2020 World's Most Valuable Brands
              </Typography>
              <Typography className="article__description">
                Non sed molestie tortor massa vitae in mattis. Eget vel consequat
                hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
                pharetra...
              </Typography>
              </Link>
              <Link to="/article" className={classes.article__link}>
                Read More
              </Link>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
                  fill="#363636"
                />
              </svg>
            </CardContent>
          
        </Card>
      </article>
    </Grid>
  );
};