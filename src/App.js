import React from "react";
import RoutesAll from "./routes/routes";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return <ThemeProvider theme={theme}>
    <RoutesAll/>
    </ThemeProvider>
}

export default App;
