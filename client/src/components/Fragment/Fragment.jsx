import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import FragImage from "#assets/frag.png";

const style = {
  width: "98%",
  height: "98%",
  cursor: "pointer"
};

export const Fragment = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={1}>
      <img onClick={handleOpen} style={style} src={FragImage} />
      <Dialog open={open} onClose={handleOpen}>
        <DialogTitle>Ta Daronne</DialogTitle>
        <DialogContent dividers>Jsp Gro</DialogContent>
        <DialogActions>
          <Button>Click click</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
