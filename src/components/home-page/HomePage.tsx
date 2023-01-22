import { Container, Divider } from "@mui/material";
import React from "react";
import { ArticleList } from "../article-list/ArticleList";
import Search from "./search/Search";
import classes from "./home-page.module.scss"

export const HomePage = () => {
  return (
    <main>
      <Container className={classes.container} >
        <Search/>
        <Divider textAlign='center' sx={{mb:'45px'}}/>
        <ArticleList/>
      </Container>
    </main>
  );
};
