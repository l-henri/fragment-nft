import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Row from "./Row";

const useStyles = makeStyles(() => ({
  root: {
    width: "75vw",
    height: "85vh",
    backgroundColor: "red"
  }
}));

export const Art = ({ fragmentClaimer }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <Row
            key={index}
            fragmentClaimer={fragmentClaimer}
            rowNumber={index}
          />
        ))}
    </Grid>
  );
};
