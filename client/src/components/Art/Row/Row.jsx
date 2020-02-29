import React from "react";
import Grid from "@material-ui/core/Grid";
import Half from "./Half";

export const Row = () => {
  return (
    <Grid container item>
      <Half />
      <Half />
    </Grid>
  );
};
