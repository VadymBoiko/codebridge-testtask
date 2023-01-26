import { FC } from 'react'
import { Typography }from '@mui/material';
import classes from './searchCount.module.scss'
 
interface searchCountProps{
    countSearchResult: number;
}

export const SearchCount:FC<searchCountProps> = ({countSearchResult}) => {
  return (
    <>
        <Typography className={classes.searchResultText}>{`Results: ${countSearchResult}`}</Typography>
    </>
    
  )
}
