import { useState} from "react";
import { Box, Container, Divider } from "@mui/material";

import { ArticleList } from "../../components/article-list/ArticleList";
import { Search } from "../../components/search/Search";
import { SearchCount } from "../../components/search-count/SearchCount";
import { BlogArticle } from "../../types/types";

import classes from "./home-page.module.scss"



export const HomePage = () => {

  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<BlogArticle[]>([]);

  return (
    <Box component='main'>
      <Container className={classes.container} >
        <Search setSearch={setSearch} />
        <SearchCount countSearchResult={searchResult.length} />
        <Divider textAlign='center' sx={{ mb: '45px' }} />
        <ArticleList search={search} setSearchResult={setSearchResult} searchResult={searchResult}/>
      </Container>
    </Box>
  );
};
