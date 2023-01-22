import { Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ArticleList } from "../article-list/ArticleList";
import Search from "./search/Search";
import classes from "./home-page.module.scss"
import { useGetArticlesQuery } from "../../services/articles";
import { BlogArticle } from "../../types/types";
import { searchArticles } from "../../utility";

export const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<BlogArticle[]>([]);

  const { data, error, isLoading } = useGetArticlesQuery();

  useEffect(() => {
    if (data && search) {

      let filteredResults = searchArticles(data, search)

      setSearchResult(filteredResults);
      
      console.log(search);
      console.log(searchResult);
    }
  }, [data, search]);

  return (
    <main>
      <Container className={classes.container} >
        <Search setSearch={setSearch} />
        <Divider textAlign='center' sx={{ mb: '45px' }} />
        {error ? (<>oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ArticleList list={searchResult.length !== 0 ? searchResult : data} />
        ) : null}
      </Container>
    </main>
  );
};
