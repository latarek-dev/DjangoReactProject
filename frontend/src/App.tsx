import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { CssBaseline } from "@mui/material";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <CssBaseline />
        <Router />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
