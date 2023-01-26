import { FC } from "react";
import {
  CardMedia,
  CardContent,
  Box,
  Card,
  Typography,
  Grid, 
  Link
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { DateTime } from "luxon";
import { BlogArticle } from "../../types/types";

import {ReactComponent as ArrowRightSVG} from "../../images/ArrowRightSVG.svg"
import {ReactComponent as CalendarSVG} from "../../images/CalendarSVG.svg"

import classes from "./article.module.scss";
import { ROUTE } from "../../routes/routes";

interface ArticleProps extends BlogArticle { }

export const Article: FC<ArticleProps> = ({ title, imageUrl, summary, publishedAt, id }) => {

  const createMarkup = (html: string) => {
    return { __html: html }
  }

  return (
    <Grid item md={4}>
      <Box component='article'>
        <Card className={classes.article}>
          <CardMedia
            className={classes.article__media}
            image={imageUrl}
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
              <CalendarSVG/>
              <Typography className={classes.article__date}>
                {DateTime.fromISO(publishedAt).toLocaleString(
                  DateTime.DATE_FULL
                )}
              </Typography>
            </Box>
            <Link 
              to={ ROUTE.ARTICLES + `/${id}`}
              style={{ textDecoration: 'none' }}
              component={RouterLink}>
              <Typography 
                variant="h3" 
                dangerouslySetInnerHTML={createMarkup(title)} 
                className={classes.article__title} 
                />
              <Typography dangerouslySetInnerHTML={createMarkup(summary.length > 100 ? `${summary.slice(0, 140)}...` : summary)} 
                className={classes.article__description} 
              />
            </Link>
            <Link 
              to={ ROUTE.ARTICLES + `/${id}`}
              className={classes.article__link}
              component={RouterLink}
              >
              Read More
            </Link>
           <ArrowRightSVG />
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};
