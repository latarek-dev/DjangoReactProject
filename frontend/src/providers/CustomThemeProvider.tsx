import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: "#E0FFFF",
        main: "#f8f8ff",
        light: "#000",
      },
      secondary: {
        main: "#000",
      },
      text: {
        primary: "#000",
        secondary: "#d8c9bc",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
