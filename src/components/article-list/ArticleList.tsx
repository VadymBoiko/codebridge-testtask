import Grid from '@mui/material/Grid'
import React from 'react'
import { Article } from '../article/Article'

export const ArticleList = () => {
  return (
    <Grid container spacing={4}>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </Grid>
  )
}
