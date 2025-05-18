import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  ListItem,
  List,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface NavBarProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          component={NavLink}
          to={"/"}
          variant="h6"
          sx={{  color: "inherit", textDecoration: "none" }}
        >
          EcoCart
        </Typography>
        <List sx={{ display: "flex", gap: 2 }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                "&.active": {
                  color: "secondary.main",
                },
              }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "inherit" }} component={NavLink} to="/cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <Switch
            checked={darkMode}
            onChange={handleThemeChange}
            color="default"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
