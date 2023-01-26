import  { FC, SetStateAction, Dispatch } from "react";
import { Typography, Box, InputBase } from "@mui/material";

import {ReactComponent as SearchSVG  } from '../../images/SearchSVG.svg'

import classes from "./search.module.scss";

interface SearchProps{
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Search:FC<SearchProps> = ({ setSearch }) => {

  return (
    <Box component='div'>
      <Typography className={classes.searchTitle}>
        Filter by keywords
      </Typography>
      <Box className={classes.input}>
        <Box component="span" className={classes.input__svg}>
          <SearchSVG />
        </Box>
        <InputBase
          className={classes.input__field}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
    </Box>
  );
};


