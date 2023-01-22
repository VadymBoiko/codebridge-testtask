import { Container, Divider } from "@mui/material";
import React , {useState, useEffect} from "react";
import { ArticleList } from "../article-list/ArticleList";
import Search from "./search/Search";
import classes from "./home-page.module.scss"
import { useGetArticlesQuery } from "../../services/articles";

export const HomePage = () => {
 

  

  const {data, error, isLoading } = useGetArticlesQuery();

  
  return (
    <main>
      <Container className={classes.container} >
        <Search/>
        <Divider textAlign='center' sx={{mb:'45px'}}/>
        {error ? ( <>oh no, there was an error</>
        ) : isLoading  ?(
          <>Loading...</>
        ) : data ? (
          <ArticleList list={data || []}/>
        ) : null}
      </Container>
    </main>
  );
};
