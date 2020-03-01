import React from "react";
import Grid from "@material-ui/core/Grid";
import Half from "./Half";

export const Row = ({ fragmentClaimer, rowNumber }) => {
  return (
    <Grid container item>
      <Half fragmentClaimer={fragmentClaimer} rowNumber={rowNumber} firstHalf />
      <Half fragmentClaimer={fragmentClaimer} rowNumber={rowNumber} />
    </Grid>
  );
};
