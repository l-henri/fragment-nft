import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Row from "./Row";

const useStyles = makeStyles(() => ({
  root: {
    width: "55vw",
    height: "70vh",
    backgroundColor: "red"
  }
}));

export const Art = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {Array(18)
        .fill(0)
        .map((_, index) => (
          <Row key={index} />
        ))}
    </Grid>
  );
};
