import  {FC} from 'react';
import {Banner} from "./banner/Banner";
import { Container, Typography, Box, Link} from '@mui/material';

import { Link as RouterLink, useParams } from 'react-router-dom';
import { useGetSingleArticleQuery } from '../../services/articles';
import {ReactComponent as ArrowLeftSVG} from '../../images/ArrowLeftSVG.svg'

import classes from "./article-details.module.scss";

import { ROUTE } from '../../routes/routes';


interface ArticleDetailsProps{

}

export const ArticleDetails:FC<ArticleDetailsProps> = () => {

  const {id} = useParams();
  const {data} = useGetSingleArticleQuery({id: id!});
  return (
    <Box component='main'>
      <Container className={classes.mainContainer}>
        <Banner imageUrl={data?.imageUrl} />
        <Box className={classes.detailsContainer} >
          <Typography className={classes.title} variant='h1'>{data?.title}</Typography>
          <Box>
            <Typography className={classes.text}>
              {data?.summary}
            </Typography>
          </Box>
          <Link 
            to={ROUTE.HOME}
            className={classes.linkBack}
            component={RouterLink}
            >
            <ArrowLeftSVG/>
            <Box component='span' sx={{ mx: '6px' }}>Back to homepage</Box> </Link>
        </Box>
      </Container>
    </Box>
  )
}
