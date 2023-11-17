import * as React from "react";
import { Link } from "react-router-dom";

import { Box, Tabs, Tab } from "@mui/material";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }} margin="50px 0px">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Todo" component={Link} to="/All" />
        <Tab label="Completed" component={Link} to="/Completed" />
        <Tab label="Active" component={Link} to="/Active" />
      </Tabs>
    </Box>
  );
}
