import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: "#d8c9bc",
        main: "#f4f0ec",
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
