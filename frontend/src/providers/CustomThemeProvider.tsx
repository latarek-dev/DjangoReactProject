import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: "#022b3a",
        main: "#edc786",
        light: "#000",
      },
      secondary: {
        main: "#000",
      },
      text: {
        primary: "#000",
        secondary: "#000",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
