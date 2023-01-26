import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'

import { BlogArticle } from '../../types/types'
import { Article } from '../article/Article'
import { useGetArticlesQuery } from '../../services/articles'
import { useDebounce } from '../../hooks/debounce'
import { searchArticles } from '../../utility/search'

interface ArticleListProps {
  search: string,
  searchResult: Array<BlogArticle>,
  setSearchResult: Dispatch<SetStateAction<BlogArticle[]>>
}

export const ArticleList: FC<ArticleListProps> = ({ search, searchResult, setSearchResult }) => {

  const debounced = useDebounce(search);
  const { data, error, isLoading, isFetching } = useGetArticlesQuery(debounced);


  useEffect(() => {
    if (data && search) {
      let filteredResults = searchArticles(data, search);
      setSearchResult(filteredResults);
    }
  }, [debounced]);
  if (error) {
    return (
      <>oh no, there was an error</>
    )
  }
  if (isLoading || isFetching) {
    return (
      <>Loading...</>
    )
  }
  if (search && searchResult.length === 0) {
    return (
      <>has no to search results</>
    )
  }
  if (search && searchResult.length !== 0) {
    return (
      <Grid container spacing={4}>
        {searchResult.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </Grid>
    )
  }
  return (
    <Grid container spacing={4}>
      {data?.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </Grid>
  )
}


