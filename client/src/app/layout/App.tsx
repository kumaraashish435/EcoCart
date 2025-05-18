import {  useState } from "react";

import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "dark" ? "#121212" : "#ffffff",
      },
    },
  });

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
        <Container maxWidth="xl" sx={{ marginTop: 12 }}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;