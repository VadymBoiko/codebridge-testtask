import { Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ArticleList } from "../article-list/ArticleList";
import Search from "./search/Search";
import classes from "./home-page.module.scss"
import { useGetArticlesQuery } from "../../services/articles";
import { BlogArticle } from "../../types/types";
import { searchArticles } from "../../utility/search";
import { useDebounce } from "../../hooks/debounce";

export const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<BlogArticle[]>([]);
  const [countSearchResult, setCountSearchResult] = useState<number>(searchResult.length)

  const debounced = useDebounce(search);
  const { data, error, isLoading } = useGetArticlesQuery(debounced);

  useEffect(() => { 
    if (data && search) {
      let filteredResults = searchArticles(data, search)
      setSearchResult(filteredResults);
      setCountSearchResult(filteredResults.length);
    }
  }, [ debounced]);

  return (
    <main>
      <Container className={classes.container} >
        <Search setSearch={setSearch} countSearchResult={countSearchResult}/>
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
