import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface NavBarProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EcoCart
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} color="default" />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;