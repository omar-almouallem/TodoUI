import * as React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          variant="h5"
          textAlign="center"
          padding="20px"
          color="inherit"
          component="div"
        >
          Todo List App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
