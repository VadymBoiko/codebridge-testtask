import React, { FC } from 'react'
import { Box } from "@mui/material";
import classes from "./banner.module.scss"

interface BannerProps {
  imageUrl: string | undefined
}

export const Banner: FC<BannerProps> = ({ imageUrl }) => {
  return (
    <Box className={classes.banner} sx={{ backgroundImage: `url(${imageUrl})` }}></Box >
  )
}

