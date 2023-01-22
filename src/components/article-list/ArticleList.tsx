import Grid from '@mui/material/Grid'
import React, { FC } from 'react'
import { BlogArticle } from '../../types/types'
import { Article } from '../article/Article'
 
interface ArticleListProps {
  list:Array<BlogArticle>
}

export const ArticleList:FC<ArticleListProps> = ({list}) => {
  return (
    <Grid container spacing={4}>
     {list.map((article) =>(
      <Article key={article.id} {...article} />
     )) }
    </Grid>
  )
}
