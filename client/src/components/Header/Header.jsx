import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const style = {
  display: "flex",
  justifyContent: "center"
};

export const Header = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense" style={style}>
          <Typography variant="h6" color="inherit">
            Tokenizart
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
