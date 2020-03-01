import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Row from "./Row";

const useStyles = makeStyles(() => ({
  content: {
    width: "65vw",
    height: "93vh",
    margin: "0px 15px"
  }
}));

export const Art = ({ fragmentClaimer }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <Grid
        className={classes.content}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <Row
              key={index}
              fragmentClaimer={fragmentClaimer}
              rowNumber={index}
            />
          ))}
      </Grid>
    </Paper>
  );
};
