import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: "#022b3a",
        main: "#1F7A8C",
        light: "#bfdbf7",
      },
      secondary: {
        main: "#e1e5f2",
      },
      text: {
        primary: "#ffffff",
        secondary: "#000",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
