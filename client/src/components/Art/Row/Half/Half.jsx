import React from "react";
import Grid from "@material-ui/core/Grid";

import Fragment from "#fragment";

export const Half = () => {
  return (
    <Grid container item xs={6}>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <Fragment key={index} />
        ))}
    </Grid>
  );
};
