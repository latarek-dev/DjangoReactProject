import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes/Router";
import { CssBaseline } from "@mui/material";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";
import { AuthProvider } from "./providers/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <AuthProvider>
          <CssBaseline />
          <Router />
        </AuthProvider>
      </CustomThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
